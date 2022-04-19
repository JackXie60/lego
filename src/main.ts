import { createApp } from 'vue'
import antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import router from './routes'
import store from './store/index'
import App from './App.vue'

const app = createApp(App)
app.use(antd).use(router).use(store)
app.mount('#app')
