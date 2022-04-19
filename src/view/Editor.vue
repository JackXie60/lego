<template>
  <div class="editor" id="editor-layout-main">
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">
          组件列表
          <component-list :list="testData" @on-item-click="onItemClick" />
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canva-area">
            <edit-component
              @on-item-click="setActive"
              v-for="component in components"
              :key="component.id"
              :id="component.id"
            >
              <component :is="component.name" v-bind="component.props" />
            </edit-component>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background: #fff">
        组件属性
        <pre>
            <props-table 
                v-if="activeElement && activeElement.props"
                @change="handleChange"
                :props="activeElement.props"/>
            {{activeElement}}
        </pre>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import LText from "../components/LText.vue";
import ComponentList from "../components/ComponentList.vue";
import EditComponent from "../components/EditComponent.vue";
import PropsTable from "../components/PropsTable.vue"

export default defineComponent({
  components: {
    LText,
    ComponentList,
    EditComponent,
    PropsTable
  },
  setup() {
    const testData = [
      {
        text: "hello1",
        fontSize: "16px",
        color: "red",
      },
      {
        text: "hello2",
        fontSize: "20px",
      },
      {
        text: "hello3",
        fontSize: "20px",
        color: "yellow",
        lineHeight: "1"
      },
    ];
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editor.components);
    const activeElement = computed(() => store.getters.currentElement)

    const onItemClick = (data: any) => {
      store.commit("addComponent", data);
    };

    const setActive = (id: string) => {
        store.commit("setActive", id)
    }

    const handleChange = (e: any) => {
        store.commit('updateComponent', e)
    }
    return {
      components,
      testData,
      onItemClick,
      setActive,
      activeElement, 
      handleChange
    };
  },
});
</script>

<style scoped>
.editor {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.ant-layout-has-sider {
  flex: 1;
}
.preview-container {
  height: 100vh;
}
.preview-list {
  background-color: #fff;
  margin: 0 auto;
  height: 300px;
  box-shadow: 0 5px 5px #ccc;
}
</style>
