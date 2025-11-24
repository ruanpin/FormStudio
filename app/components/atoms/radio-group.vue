<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface Option {
    label: string;
    value: string;
}

const value = defineModel<string>()

defineProps<{
    options: Option[];
    groupClass?: string;
    labelClass?: string;
    radioClass?: string;
    textClass?: string;
}>()
</script>

<template>
    <RadioGroup
        v-model="value"
        :class="['my-2', $attrs.class]"
        v-bind="{ ...$attrs, class: undefined }"
    >
        <div
            v-for="option in options"
            :key="option.value"
            :class="groupClass"
        >
            <Label
                class="flex items-center leading-none cursor-pointer"
                :class="labelClass"
            >
                <RadioGroupItem :class="radioClass" :value="option.value" />
                <div :class="textClass">{{ option.label }}</div>
            </Label>
        </div>
    </RadioGroup>
</template>
