<template>
    <div class="edit-component-container" @click="onItemClick(id)">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "edit-component",
    emits: ['on-item-click'],
    props: {
        id: {
            type: String,
            required: true
        }
    }, 
    setup(props, context) {
        const onItemClick = (id: string) => {
            context.emit('on-item-click', id)
        }

        return {
            onItemClick
        }
    }
})
</script>