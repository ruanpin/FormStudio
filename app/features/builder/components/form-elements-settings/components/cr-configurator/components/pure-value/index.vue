<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { FormElement } from '../../../../../../types/form-element'
import type { CrElement, PureValueType } from '../../../../../../types/conditional-rendering'
defineProps<{
    element: FormElement,
    fatherElement: CrElement
}>()
const crTypesMap = {
  input: defineAsyncComponent(() => import('./components/pure-value-input.vue')),
  radio: defineAsyncComponent(() => import('./components/pure-value-radio.vue')),
//   toggle: defineAsyncComponent(() => import('./components/pure-value-toggle.vue')),
//   select: defineAsyncComponent(() => import('./components/pure-value-select.vue')),
}
</script>

<template>
    <component
        :is="crTypesMap[fatherElement.type as PureValueType]"
        :element="element"
        :father-element="fatherElement"
    />
</template>
