<script setup lang="ts">
import { useDraggingStore } from '@/store/drag'
import type { FormElement } from '../../../types/form-element';
import { useEditingStore, type Cache } from '../../../store/editing'

const draggingStore = useDraggingStore()

const props = defineProps<{
    element: FormElement
}>()

const editingStore = useEditingStore()

const createElementWithDynamicCrTrigger = (element: FormElement, trace: Cache[]): FormElement => {
    const parentElement = trace.at(-1)?.element
    const crTrigger = parentElement?.type === 'checkbox' ? [] : ""
    
    return {
        ...element,
        crTrigger
    }
}

const startDrag = (e: DragEvent) => {
    const dt = e.dataTransfer
    if (!dt) return

    e.dataTransfer.setData("application/json", JSON.stringify(createElementWithDynamicCrTrigger(props.element, editingStore.trace)));
    draggingStore.handleDraggingChange(true)
    draggingStore.handleDraggingTypeChange('create')
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
