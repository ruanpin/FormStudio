<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { FormElement } from '../../../../../../types/form-element'
import type { CrElement, MultipleValuesInArrayType } from '../../../../../../types/conditional-rendering'

defineProps<{
    element: FormElement,
    fatherElement: CrElement
}>()
const crTypesMap = {
  checkbox: defineAsyncComponent(() => import('./components/multiple-values-checkbox.vue'))
}
</script>

<template>
    <component
        :is="crTypesMap[fatherElement.type as MultipleValuesInArrayType]"
        :element="element"
        :father-element="fatherElement as any"
    />
</template>