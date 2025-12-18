<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import DatePicker from '@/components/atoms/date-picker.vue'

import type { InputDate as IInputDate } from '../types/form-element'

import { useElementLayout } from '../composables/element-css'

const element = defineModel<IInputDate>('element', { required: true })

// 創建 string 和 DateValue 的雙向綁定轉換 for TS
const dateValue = computed({
  get: (): DateValue | undefined => {
    // 將 string 轉換為 DateValue
    return element.value.value as any
  },
  set: (value: DateValue | undefined) => {
    // 將 DateValue 轉換回 string
    element.value.value = value as any
  }
})

const {
  elementClass,
  titleClass,
} = useElementLayout({ element: element.value })
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
      <DatePicker v-model="dateValue" />
    </div>
</template>
