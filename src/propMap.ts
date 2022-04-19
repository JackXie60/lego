import { h, VNode } from "vue";

export interface PropToForms {
  component: string;
  subComponent?: string;
//   value?: string;
  extraProps?: { [key: string]: any };
  text?: string;
  option?: { text: string | VNode; value: any }[];
  initTransform?: (v: any) => any;
  valueProps?: string;
  eventName?: string;
  afterTransform?: (v: any) => any;
}

export type PropsToForms = {
  [key: string]: PropToForms;
};

const fontFamilyArr = [
  { text: "宋体", value: '"SimSun","STSong"' },
  { text: "黑体", value: '"SimHei","STHeiti"' },
  { text: "楷体", value: '"KaiTi","STKaiti"' },
  { text: "仿宋", value: '"FangSong","STFangsong"' },
  { text: "Arial", value: '"Arial", sans-serif' },
  { text: "Arial Black", value: '"Arial Black", sans-serif' },
  { text: "Comic Sans MS", value: '"Comic Sans MS"' },
  { text: "Courier New", value: '"Courier New", monospace' },
  { text: "Georgia", value: '"Georgia", serif' },
  { text: "Times New Roman", value: '"Times New Roman", serif' },
];

const fontFamilyOption = fontFamilyArr.map((font)=>{
    return {
        value: font.value,
        text: h('span', {style: {fontFamily: font.value}}, font.text)
    }
})

export const mapPropsToForms: PropsToForms = {
  text: {
    text: "文本",
    component: "a-textarea",
    afterTransform: (e: any) => e.target.value
  },
  fontSize: {
    text: "字体大小",
    component: "a-input-number",
    initTransform: (v: string)=>parseInt(v),
    afterTransform: (v: number) => v ? `${v}px` : ''
  },
  lineHeight: {
    text: "行高",
    component: "a-slider",
    extraProps: { min: 0, max: 3, step: 0.1 },
    initTransform: (v: string) => parseFloat(v)
  },
  textAlign: {
    component: "a-radio-group",
    subComponent: "a-radio-button",
    text: "对齐",
    option: [
      { value: "left", text: "左" },
      { value: "center", text: "中" },
      { value: "right", text: "右" },
    ],
    afterTransform: (e: any) => e.target.value
  },
  fontFamily: {
      component: 'a-select',
      subComponent: 'a-select-option',
      text: '字体',
      option: [
          {value: '', text: '无'},
          ...fontFamilyOption
        // ...fontFamilyArr
      ]
  }
};
