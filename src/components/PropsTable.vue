<template>
  <div class="props-table">
    '
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <span class="label" v-if="value.text">{{ value.text }}</span>
      <component
        v-if="value"
        :is="value.component"
        :[value.valueProps]="value.value"
        v-bind="value.extraProps"
        v-on="value.events"
      >
        <template v-if="value.option">
          <component
            :is="value.subComponent"
            v-for="(option, k) in value.option"
            :key="k"
            :value="option.value"
          >
            <render-vnode :VNode="option.text"></render-vnode>
          </component>
        </template>
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, VNode } from "vue";
import { reduce } from "lodash-es";
import { mapPropsToForms } from "../propMap";
import RenderVnode from "./RenderVnode"
interface FormProps {
  component: string;
  subComponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  text?: string;
  option?: { text: string | VNode; value: any }[];
  initTransform?: (v: any) => any;
  valueProps: string;
  eventName: string;
  events: { [key: string]: (e: any) => void };
}
export default defineComponent({
  name: "prop-table",
  components: {
    RenderVnode
  },
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  emits: ["change"],
  setup(props, context) {
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          const item = mapPropsToForms[key];
          if (item) {
            const {
              valueProps = "value",
              eventName = "change",
              initTransform,
              afterTransform
            } = item;
            const newItem: FormProps = {
              ...item,
              value: initTransform ? initTransform(value) : value,
              valueProps,
              eventName,
              events: {
                [eventName]: (e: any) => {
                  context.emit("change", { key, value:  afterTransform ? afterTransform(e) : e});
                },
              },
            };
            result[key] = newItem;
          }
          return result;
        },
        {} as { [key: string]: FormProps }
      );
    });

    return {
      finalProps,
    };
  },
});
</script>
