<script setup lang="ts">
import { useDraggingStore } from '@/store/drag'

const draggingStore = useDraggingStore()

const props = defineProps<{
  dropIndex: number
}>()
const emit = defineEmits(['dropped-create', 'dropped-reorder'])

const isOver = ref(false)

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  isOver.value = true
}

const handleDragLeave = () => {
  isOver.value = false
}

const createElement = (dataTransfer: DataTransfer) => {
  const element = JSON.parse(dataTransfer.getData('application/json'))
  emit('dropped-create', {
    index: props.dropIndex,
    element
  })
}

const reorderElement = (dataTransfer: DataTransfer, dropIndex: number) => {
  const { sourceIndex } = JSON.parse(dataTransfer.getData('application/json'))
  emit('dropped-reorder', {
    sourceIndex: sourceIndex,
    targetIndex: dropIndex
  })
}

const handleDrop = (e: DragEvent) => {
console.log(e.target, '放下的元素');
  e.preventDefault()
  isOver.value = false

  if (!e.dataTransfer) {
    return
  }

  if (draggingStore.draggingType === 'create') {
    createElement(e.dataTransfer)
  } else if (draggingStore.draggingType === 'reorder') {
    reorderElement(e.dataTransfer, props.dropIndex)
  }
}
</script>

<template>
  <div
    class="flex items-center justify-center rounded transition-all duration-300 ease-in-out"
    :class="[
      draggingStore.isDragging
        ? 'h-10 opacity-100 scale-100 pointer-events-auto my-4'
        : 'h-0 opacity-0 scale-95 pointer-events-none',
      isOver ? 'border-2 border-dashed border-green-500 bg-green-50' : 'border-2 border-gray-300'
    ]"
    @dragover="handleDragOver"
    @drop="handleDrop"
    @dragleave="handleDragLeave"
  >
    Drop here {{ props.dropIndex }}
  </div>
</template>