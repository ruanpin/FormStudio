<script setup lang="ts">
import { toast } from 'vue-sonner'

import UploadImg from '@/components/atoms/upload-img.vue'

import type { UploadImg as IUploadImg } from '../types/form-element'

import { useElementLayout } from '../composables/element-css'

const element = defineModel<IUploadImg>('element', { required: true })

const {
  elementClass,
  titleClass,
} = useElementLayout({ element: element.value })

const sizeExceeded = (fileSize: number, maxSize: number) => {
    toast.error(`檔案大小(${fileSize} bytes) 超過限制(${maxSize} bytes)`)
}
</script>

<template>
    <div class="py-2" :class="elementClass">
        <div class="font-bold mb-1 mr-2 font-sm whitespace-nowrap" :class="titleClass">
            <span class="break-all">
                {{ element.label }}
            </span>
            <span
                v-show="element.required"
                style="color: #CC0100"
            >
                 *
            </span>
        </div>
        <UploadImg
            v-model="element.value"
            :maxSize="element.maxSize"
            @size-exceeded="sizeExceeded"
        />
    </div>
</template>