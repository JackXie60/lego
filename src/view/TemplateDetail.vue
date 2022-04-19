<template>
  <div class="work-detail-container">
    <a-row justify="center">
      <a-col :span="8" class="cover-img">
        <img :src="template.coverImg" alt="">
      </a-col>
      <a-col :span="8">
        <h2>{{template.title}}</h2>
        <!-- <p>{{currentTemplate.desc}}</p> -->
      <div class="author">
        <a-avatar :src="template.picture" v-if="template.picture">
        </a-avatar>
        <a-avatar v-else>
          <template v-slot:icon><UserOutlined /></template>
        </a-avatar>
        该模版由 <b>{{template.author}}</b> 创作
      </div>
      <div class="bar-code-area" >
        <span>扫一扫，手机预览</span>
        <div ref="container"></div>
      </div>
      <div class="use-button">
          <a-button>
              <router-link to="/editor">编辑模板</router-link>
          </a-button>
          <!-- <router-link>编辑模板</router-link> -->
          <!-- <a-button>
              <router-link>编辑模板</router-link>
          </a-button> -->
        <!-- <a-button
          type="primary" size="large"
          @click="onCopy(currentTemplate.id)"
          :loading="isCreating"
        > -->
          <!-- {{ isCreating ? '创建中...' : '使用模版' }} -->
        <!-- </a-button>
        <a-button
          size="large"
          :style="{ marginLeft: '20px' }"
          @click="download"
        >
          下载图片海报
        </a-button> -->
      </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { GlobalDataProps } from '@/store'
import {computed, defineComponent} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: "TemplateDetail",
  setup(){
      const route = useRoute()
      const store = useStore<GlobalDataProps>()
      const currentId = route.params.id as string
      const template = computed(()=>store.getters.getTemplateById(parseInt(currentId)))

      return {
          template
      }
  }  
})
</script>


<style scoped>
.work-detail-container {
  margin-top:50px;
  height: 85vh;
}
.cover-img {
  margin-right: 30px;
}
.cover-img img {
  width: 100%;
}
.use-button {
  margin: 30px 0;
}
.ant-avatar {
  margin-right: 10px;
}
.bar-code-area {
  margin: 20px 0;
}
</style>

