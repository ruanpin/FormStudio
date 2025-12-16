<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import { CalendarIcon } from 'lucide-vue-next'

import { cn } from "@/lib/utils"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import Button from '@/components/atoms/button.vue'

const date = defineModel<DateValue>()

const displayValue = computed(() => {
  if (!date.value) {
    return "Pick a date"
  }
  
  // 格式化為 YYYY-MM-DD
  const year = date.value.year
  const month = date.value.month.toString().padStart(2, '0')
  const day = date.value.day.toString().padStart(2, '0')
  return `${year}-${month}-${day}`
})
</script>

<template>
  <Popover v-slot="{ close }">
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        :class="cn('w-full justify-start text-left font-normal border border-gray-300 hover:border-gray-400 focus:border-blue-500', !date && 'text-muted-foreground')"
      >
        <CalendarIcon />
        {{ displayValue }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0" align="start">
      <Calendar
        v-model="date"
        v-bind="$attrs"
        layout="month-and-year"
        initial-focus
        @update:model-value="close"
      />
    </PopoverContent>
  </Popover>
</template>