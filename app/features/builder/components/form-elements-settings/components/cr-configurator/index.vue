<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Select from '@/components/atoms/select.vue';
import FatherElementInfo from './components/father-info.vue';

import type { FormElement } from '../../../../types/form-element'
import type { ElementCrTypes, CrElement } from '../../../../types/conditional-rendering'

import { CR_TYPES } from './constants'

const element = defineModel<FormElement>('element', { required: true })

defineProps<{
    fatherElement: FormElement
}>()

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

const crTypesMap = {
//   pureValue: defineAsyncComponent(()=> import('./components/PureValue/index.vue')),
//   multipleValuesInArray: defineAsyncComponent(()=> import('./components/MultipleValuesInArray/index.vue')),
//   age: defineAsyncComponent(()=> import('./components/Age/index.vue')),
}
</script>

<template>
    <div class="">
      <FatherElementInfo :father-element="fatherElement as CrElement" />
      <div>
        <div class="text-4 font-bold">條件渲染類型(cr_type)</div>
        <Select v-model="element.crType" :options="elementCrTypesMap[fatherElement.type as ElementCrTypes]" />
      </div>
      <!-- <component
        :is="crTypesMap[element.crType]"
        :element="element"
        :fatherElement="fatherElement"
      /> -->
    </div>
</template>
