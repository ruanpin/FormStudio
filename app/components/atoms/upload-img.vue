<script setup lang="ts">
import { RefreshCcw, Trash } from 'lucide-vue-next';

const selectedFile = defineModel<File | null>({ default: null })

const props = withDefaults(defineProps<{
  placeholder?: string;
  triggerClass?: string;
  accept?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
  maxSize?: number; // bytes
}>(), {
  placeholder: '點擊上傳圖片',
  objectFit: 'cover'
})

const emit = defineEmits<{
  sizeExceeded: [fileSize: number, maxSize: number]
}>()

const inputRef = ref<HTMLInputElement>()

const previewURL = ref<string | null>(null)

const fileName = computed(() => selectedFile.value?.name ?? '')

const triggerClassComputed = computed(() => {
  const classes = []
  
  // /b匹配 -> w-開頭的單詞
  const hasWidthClass = props.triggerClass ? /\bw-/.test(props.triggerClass) : false
  // /b匹配 -> h-開頭的單詞
  const hasHeightClass = props.triggerClass ? /\bh-/.test(props.triggerClass) : false
  
  if (!hasWidthClass) {
    classes.push('w-[200px]')
  }
  
  if (!hasHeightClass) {
    classes.push('h-[200px]')
  }
  
  if (props.triggerClass) {
    classes.push(props.triggerClass)
  }
  
  return classes
})

const handleChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  
  // 已上傳後點擊更換，開啟選擇檔案視窗，再按取消後檔案不清空
  if (!file) {
    return
  }

  // 檢查檔案大小
  if (props.maxSize && file.size > props.maxSize) {
    emit('sizeExceeded', file.size, props.maxSize)
    return
  }

  if (previewURL.value) {
    URL.revokeObjectURL(previewURL.value)
    previewURL.value = null
  }
  
  selectedFile.value = file
  if (file.type.startsWith('image/')) {
    previewURL.value = URL.createObjectURL(file)
  }
}

const triggerFileInput = () => {
  inputRef.value?.click()
}

const clearImg = () => {
  if (previewURL.value) {
    URL.revokeObjectURL(previewURL.value)
    previewURL.value = null
  }
  selectedFile.value = null
  if (inputRef.value) {
    inputRef.value.value = ''
  }
}

onUnmounted(() => {
  if (previewURL.value) {
    URL.revokeObjectURL(previewURL.value)
  }
})
</script>

<template>
  <div class="w-full flex items-center gap-1.5">
    <input 
      ref="inputRef"
      type="file"
      :accept="accept || 'image/*'"
      class="hidden"
      @change="handleChange"
    />
    
    <div
      v-if="previewURL"
      class="relative"
      :class="triggerClassComputed"
    >
      <img
        :src="previewURL"
        :alt="fileName"
        class="w-full h-full rounded-lg"
        :style="{ objectFit: objectFit }"
      />
      <div class="absolute top-2 right-2 flex gap-1">
        <button
          class="bg-black/70 text-white px-2 py-1 rounded text-xs hover:bg-black"
          @click="triggerFileInput"
        >
          <RefreshCcw class="w-4 h-4" />
        </button>
        <button
          class="bg-black/70 text-white px-2 py-1 rounded text-xs hover:bg-black"
          @click="clearImg"
        >
          <Trash class="w-4 h-4" />
        </button>
      </div>
    </div>
    <div
      v-else
      class="cursor-pointer"
      :class="triggerClassComputed"
      @click="triggerFileInput"
    >
      <slot
        :fileName="fileName"
        :selectedFile="selectedFile"
        :triggerUpload="triggerFileInput"
        :previewURL="previewURL"
        :clearImg="clearImg"
      >
        <div class="h-full w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors flex items-center justify-center">
          <slot name="placeholder">
            <div class="text-sm text-gray-600 font-semibold">
              {{ placeholder }}
            </div>
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>