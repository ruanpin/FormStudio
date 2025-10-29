import { defineStore } from 'pinia';

export const useDraggingStore = defineStore('dragging', () => {
    const isDragging = ref<boolean>(false)

    const handleDraggingChange = (val: boolean): void => {
        isDragging.value = val
    }

    return {
        isDragging,
        handleDraggingChange
    }
})