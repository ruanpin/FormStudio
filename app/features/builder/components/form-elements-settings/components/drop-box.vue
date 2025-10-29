<script setup lang="ts">
const emit = defineEmits(['dropped'])

const isOver = ref(false)

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  isOver.value = true
}

const handleDragLeave = () => {
  isOver.value = false
}

const handleDrop = (e: DragEvent) => {
console.log(e.target, '放下的元素');
  e.preventDefault()
  isOver.value = false

  if (!e.dataTransfer) return
  const element = JSON.parse(e.dataTransfer.getData('application/json'))
  // console.log('Dropped type:', element)
  // 抓index，以及處理拖動時顯示drop組件
  emit('dropped', {
    index: 0,
    element
  })
}
</script>

<template>
    <div
        class="h-10 flex items-center justify-center rounded transition-colors duration-200"
        :class="isOver ? 'border-2 border-dashed border-green-500 bg-green-50' : 'border-2 border-gray-300'"
        @dragover="handleDragOver"
        @drop="handleDrop"
        @dragleave="handleDragLeave"
    >
        Drop here
    </div>
</template>