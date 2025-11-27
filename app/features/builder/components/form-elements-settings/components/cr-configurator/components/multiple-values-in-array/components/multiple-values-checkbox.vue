<script setup lang="ts">
import CheckboxGroup from '@/components/atoms/checkbox-group.vue';
import type { FormElement, Checkbox as ICheckbox } from '../../../../../../../types/form-element'

defineProps<{
    element: FormElement,
    fatherElement: ICheckbox
}>()
</script>

<template>
    <div>
        <div class="font-bold">條件渲染觸發值(crTrigger)</div>
        <div class="text-gray-400">觸發條件：父元素的值必須包含此處「所有」選擇的值</div>
        <CheckboxGroup
            v-model="element.crTrigger"
            :options="fatherElement.options"
        />
    </div>
</template>