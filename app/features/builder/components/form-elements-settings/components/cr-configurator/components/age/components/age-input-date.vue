<script setup lang="ts">
import Select from '@/components/atoms/select.vue';
import Input from '@/components/atoms/input.vue';
import type { FormElement, InputDate as IInputDate } from '../../../../../../../types/form-element'
import type { AgeType } from '../../../../../../../types/conditional-rendering'
import { CR_OPERATION_TYPE } from '../../../constants'

defineProps<{
    element: FormElement,
    fatherElement: IInputDate
}>()
</script>

<template>
    <div>
        <div class="font-bold">條件渲染運算(crOperator)</div>
        <Select
            v-model="element.crOperator"
            :options="CR_OPERATION_TYPE[fatherElement.type as AgeType]"
        />
    </div>
    <div>
        <div class="font-bold">條件渲染觸發值（歲）(crTrigger)</div>
        <Input v-model="element.crTrigger" placeholder="輸入觸發值" />
    </div>
</template>
