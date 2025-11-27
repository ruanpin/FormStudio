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

<template>
    <div
        v-for="(option, index) in options"
        :key="index"
        class="flex"
    >
        <label class="flex items-center gap-1 cursor-pointer">
            <Checkbox @update:modelValue="(val) => updateModelValue(val as boolean, option)" />
            <slot :option="option">
                {{ option.label }}
            </slot>
        </label>
    </div>
</template>
