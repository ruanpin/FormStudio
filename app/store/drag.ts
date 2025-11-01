import { defineStore } from 'pinia';

type DraggingType = 'create' | 'reorder' | null

export const useDraggingStore = defineStore('dragging', () => {
    const isDragging = ref<boolean>(false)
    const draggingType = ref<DraggingType>(null)

    const handleDraggingChange = (val: boolean): void => {
        isDragging.value = val
    }

    const handleDraggingTypeChange = (val: DraggingType): void => {
        draggingType.value = val
    }

    return {
        isDragging,
        handleDraggingChange,
        draggingType,
        handleDraggingTypeChange
    }
})