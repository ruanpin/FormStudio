<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue'
import { X } from "lucide-vue-next"

import Badge from '@/components/atoms/badge.vue'
import Button from '@/components/atoms/button.vue'
import Item from '@/components/atoms/item.vue'
import DragBox from '../drag-box.vue';
import type { FormElement, FormElementType } from '../../../../types/form-element'

type BaseStyleType = Exclude<FormElementType, 'spaceY' | 'separator'>

const element = defineModel<FormElement>('element', { required: true })

defineProps<{
    sourceIndex: number
}>()

const emit = defineEmits(['deleteElement'])

const elementConfigMap: Record<FormElementType, Component> = {
  input: defineAsyncComponent(() => import('./components/input-options.vue')),
  inputPassword: defineAsyncComponent(() => import('./components/input-options.vue')),
  inputDate: defineAsyncComponent(() => import('./components/input-options.vue')),
  radio: defineAsyncComponent(() => import('./components/radio-options.vue')),
  toggle: defineAsyncComponent(() => import('./components/toggle-options.vue')),
  textarea: defineAsyncComponent(() => import('./components/textarea-options.vue')),
  checkbox: defineAsyncComponent(() => import('./components/checkbox-options.vue')),
//   select: defineAsyncComponent(() => import('./components/input-options.vue')),
//   uploadImg: defineAsyncComponent(() => import('./components/input-options.vue')),
//   spaceY: defineAsyncComponent(() => import('./components/input-options.vue')),
//   separator: defineAsyncComponent(() => import('./components/input-options.vue')),
}

const baseStyleMap: Record<BaseStyleType, Component> = {
    input: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    inputPassword: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    inputDate: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    radio: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    toggle: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    textarea: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    checkbox: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    select: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
    uploadImg: defineAsyncComponent(()=> import('./components/base-style-options.vue')),
}
</script>

<template>
    <DragBox :sourceIndex="sourceIndex">
        <div class="w-full">
            <Item>
                <template #title>
                    <span class="text-lg">
                        {{ element.type }}
                    </span>
                </template>
                <template #content>
                    {{ element }}
                </template>
                <template #action>
                    <Button
                        variant="outline"
                        size="sm"
                        class="text-red-delete"
                        @click="() => emit('deleteElement', sourceIndex)"
                    >
                        <X />
                    </Button>
                </template>
            </Item>
            <div v-show="elementConfigMap[element.type]" class="mt-6">
                <Badge class="py-2 px-3">基本設定</Badge>
                <component
                    :is="elementConfigMap[element.type]"
                    v-model:element="element"
                />
            </div>
            <div v-show="baseStyleMap[element.type as BaseStyleType]" class="mt-6">
                <Badge class="py-2 px-3">樣式設定</Badge>
                <component
                    :is="baseStyleMap[element.type as BaseStyleType]"
                    v-model:element="element"
                />
            </div>
        </div>
    </DragBox>
</template>