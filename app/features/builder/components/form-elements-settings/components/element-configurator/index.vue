<script setup lang="ts">
import DragBox from '../drag-box.vue';

import type { Component } from 'vue'
import type { FormElement, FormElementType } from '../../../../types/form-element'

const element = defineModel<FormElement>('element', { required: true })

defineProps<{
    sourceIndex: number
}>()

const ElementConfigMap: Record<FormElementType, Component> = {
  input: defineAsyncComponent(() => import('./components/input-options.vue')),
//   inputPassword: defineAsyncComponent(() => import('./components/input-options.vue')),
//   inputDate: defineAsyncComponent(() => import('./components/input-options.vue')),
//   radio: defineAsyncComponent(() => import('./components/input-options.vue')),
//   toggle: defineAsyncComponent(() => import('./components/input-options.vue')),
//   textarea: defineAsyncComponent(() => import('./components/input-options.vue')),
//   checkbox: defineAsyncComponent(() => import('./components/input-options.vue')),
//   select: defineAsyncComponent(() => import('./components/input-options.vue')),
//   uploadImg: defineAsyncComponent(() => import('./components/input-options.vue')),
//   spaceY: defineAsyncComponent(() => import('./components/input-options.vue')),
//   separator: defineAsyncComponent(() => import('./components/input-options.vue')),
}
</script>

<template>
    <DragBox :sourceIndex="sourceIndex">
        <div>
            <div>current object: {{ element }}</div>
            <div>{{ element.type }}</div>
            <div>基本設定</div>
            <component
                :is="ElementConfigMap[element.type]"
                v-model:element="element"
            />
        </div>
    </DragBox>
</template>