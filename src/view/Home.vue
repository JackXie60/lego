<template>
  <div class="home-container">
    <a-layout>
      <a-layout-content class="home-layout" :gutter="16">
        <div class="content-container">
          <template-list :list="testData" />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex"
import TemplateList from "../components/TemplateList.vue";
import { GlobalDataProps } from "../store/index"
export default defineComponent({
  components: {
    TemplateList,
  },
  setup() {
      const store = useStore<GlobalDataProps>()
      const testData = computed(()=>store.state.templates.data)

      return {
          testData
      }
  }
});
</script>

<style scoped>
.home-container{
    margin-top: 40px;
}
.ant-layout-header {
  z-index: 50;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}
.ant-layout-content {
  flex: 1;
}
.ant-layout-footer {
  background: #333;
  color: #999;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
