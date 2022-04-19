<template>
    <div class="component-list-container">
        <div v-for="(item, index) in list" :key="index" @click="()=>{onItemClick(item)}">
            <l-text v-bind="item"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LText from "./LText.vue"

export default defineComponent({
    name: 'component-list',
    emits: ['on-item-click'],
    components: {
        LText
    },
    props: {
        list: {
            type:  Array,
            required: true
        },
    },
    setup(props, context) {
        console.log("list", props.list)
        const onItemClick = (data: any) => {
            context.emit('on-item-click', data)
        }

        return {
            onItemClick
        }
    }
})
</script>