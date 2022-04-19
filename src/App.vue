<template>
  <div class="homepage-container">
    <a-layout>
      <a-layout-header class="header" v-if="route.meta.withHeader">
        <div class="page-title">
          <router-link to="/" :style="{marginRight: 'auto'}">
            <img src="https://oss.imooc-lego.com/editor/img/logo2.cae6ad43.png" alt="">
          </router-link>
          <user-profile :user="user"/>
        </div>
      </a-layout-header>
      <a-layout-content class="home-layout" :gutter="16">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>@版权所有|1809697652@qq.com</a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import UserProfile from './components/UserProfile.vue'
import {useStore} from 'vuex'
import { GlobalDataProps } from './store';
export default defineComponent({
  name: 'App',
  components: {
    UserProfile
  },
  setup(){
    const route = useRoute()
    const store = useStore<GlobalDataProps>()

    const user = computed(()=>store.state.user.data)
    return {
      route,
      user
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
:root::-webkit-scrollbar {
  width: 0px;
}
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
