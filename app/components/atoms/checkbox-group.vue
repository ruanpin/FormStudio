<script setup lang="ts" generic="T">
import { Checkbox } from '@/components/ui/checkbox'

interface Option<T> {
    label: string;
    value: T
}

const checkboxModel = defineModel<T[] | string>()
const checkbox = computed({
    get: () => Array.isArray(checkboxModel.value) ? checkboxModel.value : [],
    set: (val: T[]) => checkboxModel.value = val
})

defineProps<{
    options: Option<T>[]
}>()

const updateModelValue = (val: boolean, option: Option<T>) => {
    if (val) {
        checkbox.value.push(option.value)
    } else {
        checkbox.value = checkbox.value.filter(value => value !== option.value)
    }
}
</script>

<template>{{ checkbox }}
    <label v-for="option in options" class="cursor-pointer">
        <Checkbox v-bind="$attrs" @update:modelValue="(val) => updateModelValue(val as boolean, option)"/>
        <slot :option="option">
            {{ option.label }}
        </slot>
    </label>
</template>
