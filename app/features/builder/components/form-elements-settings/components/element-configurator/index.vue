<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue'
import { X } from "lucide-vue-next"

import Badge from '@/components/atoms/badge.vue'
import Button from '@/components/atoms/button.vue'
import Item from '@/components/atoms/item.vue'
import DragBox from '../drag-box.vue';
import type { FormElement, FormElementType } from '../../../../types/form-element'

import { useEditingStore } from '../../../../store/editing';

type BaseType = Exclude<FormElementType, 'spaceY' | 'separator'>

type SpecialStyleType = Extract<FormElementType, 'spaceY'>

const element = defineModel<FormElement>('element', { required: true })

defineProps<{
    sourceIndex: number
}>()

const emit = defineEmits(['deleteElement'])

const editingStore = useEditingStore()

const elementConfigMap: Record<BaseType, Component> = {
    input: defineAsyncComponent(() => import('./components/input-options.vue')),
    inputPassword: defineAsyncComponent(() => import('./components/input-options.vue')),
    inputDate: defineAsyncComponent(() => import('./components/input-options.vue')),
    radio: defineAsyncComponent(() => import('./components/radio-options.vue')),
    toggle: defineAsyncComponent(() => import('./components/toggle-options.vue')),
    textarea: defineAsyncComponent(() => import('./components/textarea-options.vue')),
    checkbox: defineAsyncComponent(() => import('./components/checkbox-options.vue')),
    select: defineAsyncComponent(() => import('./components/select-options.vue')),
    uploadImg: defineAsyncComponent(() => import('./components/uploadImg-options.vue'))
}

const baseStyleMap: Record<BaseType, Component> = {
    input: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    inputPassword: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    inputDate: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    radio: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    toggle: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    textarea: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    checkbox: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    select: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
    uploadImg: defineAsyncComponent(()=> import('./components/style/base-style-options.vue')),
}

const specialStyleMap: Record<SpecialStyleType, Component> = {
    spaceY: defineAsyncComponent(() => import('./components/style/spaceY-style-options.vue')),
}

const handleSetCR = (element: FormElement) => {
    if (!('cr' in element)) {
        throw new Error('the element does not have cr property')
    }
    editingStore.setTrace(element)
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
            <div v-show="elementConfigMap[element.type as BaseType]" class="mt-6">
                <Badge class="py-2 px-3">基本設定</Badge>
                <component
                    :is="elementConfigMap[element.type as BaseType]"
                    v-model:element="element"
                />
            </div>
            <div v-show="baseStyleMap[element.type as BaseType]" class="mt-6">
                <Badge class="py-2 px-3">基本樣式</Badge>
                <component
                    :is="baseStyleMap[element.type as BaseType]"
                    v-model:element="element"
                />
            </div>
            <div v-show="specialStyleMap[element.type as SpecialStyleType]" class="mt-6">
                <Badge class="py-2 px-3">特殊樣式</Badge>
                <component
                    :is="specialStyleMap[element.type as SpecialStyleType]"
                    v-model:element="element"
                />
            </div>
            <div v-show="!['spaceY', 'separator'].includes(element.type)" class="mt-6">
                <Button
                    class="w-full"
                    @click="() => handleSetCR(element)"
                >
                    條件渲染設定
                </Button>
            </div>
        </div>
    </DragBox>
</template>