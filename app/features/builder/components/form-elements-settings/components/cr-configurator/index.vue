<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Select from '@/components/atoms/select.vue';

import type { FormElement } from '../../../../types/form-element'
import type { ElementCrTypes } from '../../../../types/conditional-rendering'

import { CR_TYPES } from './constants'

const element = defineModel<FormElement>('element', { required: true })

defineProps<{
    fatherElement: FormElement
}>()

const cr_triggerMap = {
//   pureValue: defineAsyncComponent(()=> import('./components/PureValue/index.vue')),
//   multipleValuesInArray: defineAsyncComponent(()=> import('./components/MultipleValuesInArray/index.vue')),
//   age: defineAsyncComponent(()=> import('./components/Age/index.vue')),
}

const elementCrTypesMap: Record<ElementCrTypes, Record<'label' | 'value', string>[]> = {
  input: CR_TYPES['INPUT'],
  // input_password: false,
  inputDate: CR_TYPES['INPUT_DATE'],
  radio: CR_TYPES['INPUT'],
  toggle: CR_TYPES['INPUT'],
  // textarea: false,
  checkbox: CR_TYPES['CHECKBOX'],
  select: CR_TYPES['INPUT'],
  // uploadImg: false,
}
</script>

<template>
    <div class="q-gutter-md">
      <div>
        <div class="options-title">條件渲染類型(cr_type)</div>
        <Select v-model="element.crType" :options="elementCrTypesMap[fatherElement.type as ElementCrTypes]" />
      </div>
      <!-- <component
        :is="cr_triggerMapping[formObj.cr_type]"
        :formObj="formObj"
        :formObjOfFather="formObjOfFather"
      /> -->
    </div>
</template>
