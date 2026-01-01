<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedFile = defineModel<File | null>({ default: null })

const props = withDefaults(defineProps<{
  placeholder?: string;
  triggerClass?: string;
  accept?: string;
}>(), {
  placeholder: '點擊上傳檔案'
})

const inputRef = ref<HTMLInputElement>()

const fileName = computed(() => selectedFile.value?.name ?? '')

const triggerClassComputed = computed(() => {
  const classes = []
  
  // /b匹配 -> w-開頭的單詞
  const hasWidthClass = props.triggerClass ? /\bw-/.test(props.triggerClass) : false
  
  if (!hasWidthClass) {
    classes.push('w-full')
  }
  
  if (props.triggerClass) {
    classes.push(props.triggerClass)
  }
  
  return classes
})

const handleChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  
  if (file) {
    selectedFile.value = file
  } else if (selectedFile.value) {
    if (inputRef.value && selectedFile.value) {
      const dt = new DataTransfer()
      dt.items.add(selectedFile.value)
      inputRef.value.files = dt.files
    }
  }
}

const triggerFileInput = () => {
  inputRef.value?.click()
}
</script>

<template>
  <div class="w-full flex items-center gap-1.5">
    <input 
      ref="inputRef"
      type="file"
      :accept="accept"
      class="hidden"
      @change="handleChange"
    />
    
    <div
      class="cursor-pointer"
      :class="triggerClassComputed"
      @click="triggerFileInput"
    >
      <slot
        :fileName="fileName"
        :selectedFile="selectedFile"
        :triggerUpload="triggerFileInput"
      >
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors">
          <div class="text-center">
            <div class="text-sm text-gray-600">
              {{ placeholder }}
            </div>
            <div v-if="fileName" class="text-xs text-gray-500 mt-1 truncate">
              已選擇: {{ fileName }}
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>