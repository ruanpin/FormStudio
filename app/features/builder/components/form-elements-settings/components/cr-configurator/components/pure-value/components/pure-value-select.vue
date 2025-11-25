<script setup lang="ts">
import Select from '@/components/atoms/select.vue';
import RadioGroup from '@/components/atoms/radio-group.vue';

import type { FormElement, Select as ISelect } from '../../../../../../../types/form-element'
import type { PureValueType } from '../../../../../../../types/conditional-rendering'
import { CR_OPERATION_TYPE } from '../../../constants'

defineProps<{
    element: FormElement,
    fatherElement: ISelect
}>()
</script>

<template>
    <div>
        <div class="font-bold">條件渲染運算(crOperator)</div>
        <Select
            v-model="element.crOperator"
            :options="CR_OPERATION_TYPE[fatherElement.type as PureValueType]"
        />
    </div>
    <div>
        <div class="font-bold">條件渲染觸發值(crTrigger)</div>
        <div class="text-gray-300">觸發條件：父元素的值必須為此處所選擇的值</div>
        <RadioGroup
            v-model="element.crTrigger"
            group-class="flex"
            :options="fatherElement.options"
        />
    </div>
</template>
