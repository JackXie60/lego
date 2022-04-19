<template>
    <a-button type="primary" v-if="!user.isLogin" class="user-profile-component">
        <router-link to="/">登录</router-link>
    </a-button>
    <a-dropdown-button class="user-profile-component">
        <router-link to="/setting">{{user.userName}}</router-link>
        <template v-slot:overlay>
            <a-menu class="user-profile-dropdown">
                <a-menu-item @click="logout">登出</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown-button>
</template>

<script lang="ts">
import { GlobalDataProps } from "../store/index"
import { UserProps } from "../store/user"
import { message } from "ant-design-vue"
import {defineComponent, PropType} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
export default defineComponent({
    name: "UserProfile",
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true
        },
    },
    setup() {
        const router = useRouter()
        const store = useStore<GlobalDataProps>()
        const logout = () => {
            store.commit("logout")
            message.success("退出成功，2秒跳转到首页")
            setTimeout(()=>{
                router.push("/")
            }, 2000)
        }

        return {
            logout,
        }
    }
})
</script>

<style scoped>
.user-profile-dropdown {
  border-radius: 2px !important;
}
.user-operation > * {
  margin-left: 30px !important;
}
</style>