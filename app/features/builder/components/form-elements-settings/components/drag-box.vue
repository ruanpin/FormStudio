<script setup lang="ts">
import { useDraggingStore } from '@/store/drag'

const draggingStore = useDraggingStore()

const props = defineProps<{
    sourceIndex: number
}>()

const startDrag = (e: DragEvent) => {
    const dt = e.dataTransfer
    if (!dt) return

    e.dataTransfer.setData("application/json", JSON.stringify({ sourceIndex: props.sourceIndex }));
    draggingStore.handleDraggingChange(true)
    draggingStore.handleDraggingTypeChange('reorder')
    draggingStore.handleDraggingSourceIndexChange(props.sourceIndex)
}

const endDrag = () => {
    draggingStore.handleDraggingChange(false)
    draggingStore.handleDraggingTypeChange(null)
}

const cursorClass = computed(() => {
    if (draggingStore.isDragging) {
        return 'cursor-grabbing'
    }
    return 'hover:cursor-grab'
})
</script>
<template>
    <div
        class="flex items-center gap-2 border border-gray-300 rounded p-2 transition-all duration-200 select-none"
        :class="cursorClass"
        :draggable="true"
        @dragstart="startDrag"
        @dragend="endDrag"
    >
        <slot></slot>
    </div>
</template>
