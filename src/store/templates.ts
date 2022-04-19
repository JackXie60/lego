import { Module } from "vuex";
import { GlobalDataProps } from ".";

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

const testData: TemplateProps[] = [
  {
    id: 1,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    title: "前端海报",
    author: "xiexu",
    copiedCount: 100,
  },
  {
    id: 2,
    coverImg: "	https://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "程序员日",
    author: "xiexu",
    copiedCount: 200,
  },
  {
    id: 3,
    coverImg:
      "	https://static.imooc-lego.com/upload-files/screenshot-323204.png",
    title: "招聘",
    author: "xiexu",
    copiedCount: 300,
  },
  {
    id: 4,
    coverImg:
      "	https://static.imooc-lego.com/upload-files/screenshot-677311.png",
    title: "作品",
    author: "xiexu",
    copiedCount: 400,
  },
  {
    id: 5,
    coverImg:
      "	https://static.imooc-lego.com/upload-files/screenshot-726751.png",
    title: "前端咨询",
    author: "xiexu",
    copiedCount: 500,
  },
  {
    id: 6,
    coverImg:
      "	https://static.imooc-lego.com/upload-files/screenshot-682056.png",
    title: "每日分享",
    author: "xiexu",
    copiedCount: 600,
  },
];

export interface TemplatesProps {
  data: TemplateProps[];
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state) => (id: number) => {
      return state.data.find((t) => {
        return t.id === id;
      });
    },
  },
};

export default templates
