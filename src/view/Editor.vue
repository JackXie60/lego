<template>
    <div class="editor" id="editor-layout-main">
        <a-layout>
            <a-layout-sider width="300" style="background:yellow">
                <div class="sidebar-container">
                    组件列表
                </div>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-layout-content class="preview-container">
                    <p>画布区域</p>
                    <div class="preview-list" id="canva-area"></div>
                </a-layout-content>
            </a-layout>
            <a-layout-sider width="300" style="background:purple">
                组件属性
            </a-layout-sider>
        </a-layout>
    </div>
</template>

<script>
import {defineComponent} from "vue"
export default defineComponent({
    name: "Editor"    
})
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
</style>