<script setup lang="ts">
const props = defineProps<{
    elementJson: string
}>()

const isDragging = ref(false)

const startDrag = (e: DragEvent) => {
    const dt = e.dataTransfer
    if (!dt) return

    e.dataTransfer.setData("application/json", props.elementJson);
    isDragging.value = true
}

const endDrag = () => {
    isDragging.value = false
}

const cursorClass = computed(() => {
    if (isDragging.value) {
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
