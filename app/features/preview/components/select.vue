<script setup lang="ts">
import Select from '@/components/atoms/select.vue'

import type { Select as ISelect } from '../types/form-element'

import { useElementLayout } from '../composables/element-css'

const element = defineModel<ISelect>('element', { required: true })

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
        <Select
            v-model="element.value"
            :options="element.options"
        />
    </div>
</template>