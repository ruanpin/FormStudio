<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { FormElement } from '../../../../../../types/form-element'
import type { CrElement, AgeType } from '../../../../../../types/conditional-rendering'

defineProps<{
    element: FormElement,
    fatherElement: CrElement
}>()
const crTypesMap = {
  inputDate: defineAsyncComponent(() => import('./components/age-input-date.vue'))
}
</script>

<template>
    <component
        :is="crTypesMap[fatherElement.type as AgeType]"
        :element="element"
        :father-element="fatherElement as any"
    />
</template>