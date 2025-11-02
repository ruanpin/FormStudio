import { defineStore } from 'pinia';

type DraggingType = 'create' | 'reorder' | null

export const useDraggingStore = defineStore('dragging', () => {
    const isDragging = ref<boolean>(false)
    const draggingType = ref<DraggingType>(null)
    const draggingSourceIndex = ref<number | null>(null)

    const handleDraggingChange = (val: boolean): void => {
        isDragging.value = val
    }

    const handleDraggingTypeChange = (val: DraggingType): void => {
        draggingType.value = val
    }

    const handleDraggingSourceIndexChange = (val: number | null): void => {
        draggingSourceIndex.value = val
    }

    const shouldShowDropBox = (dropIndex: number): boolean => {
        // 不是拖曳狀態、不是reorder類型、找不到reorder時原本元素的index時，返回isDragging的值
        if (!isDragging.value || draggingType.value !== 'reorder' || draggingSourceIndex.value === null) {
            return isDragging.value
        }
        // reorder時排除自身位置和下一個位置的drop index
        const sourceIndex = draggingSourceIndex.value
        return !(dropIndex === sourceIndex || dropIndex === sourceIndex + 1)
    }

    return {
        isDragging,
        handleDraggingChange,
        draggingType,
        handleDraggingTypeChange,
        draggingSourceIndex,
        handleDraggingSourceIndexChange,
        shouldShowDropBox
    }
})