<script setup lang="ts">
const isOver = ref(false)
const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  isOver.value = true
}

// 拖曳離開放置區
const handleDragLeave = () => {
  isOver.value = false
}

// 放下元素時觸發
const handleDrop = (e: DragEvent) => {
console.log(e.target, '放下的元素');
  e.preventDefault()
  isOver.value = false

  if (!e.dataTransfer) return
  const data = e.dataTransfer.getData('text/plain')
  console.log('Dropped type:', data)
}
</script>

<template>
    <div class="p-4">settings</div>
    <div
        class="w-64 h-40 flex items-center justify-center rounded transition-colors duration-200"
        :class="isOver ? 'border-2 border-dashed border-green-500 bg-green-50' : 'border-2 border-gray-300'"
        @dragover="handleDragOver"
        @drop="handleDrop"
        @dragleave="handleDragLeave"
    >
        可放這
    </div>
</template>