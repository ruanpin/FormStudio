<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Field<T = AcceptableValue> {
    label: string;
    value: T;
}

interface GroupOptions<T = AcceptableValue> {
    [groupName: string]: Field<T>[];
}

interface Props<T = AcceptableValue> {
    placeholder?: string;
    modelValue?: T;
    options?: Field<T>[];
    groupOptions?: GroupOptions<T>;
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Please select...'
});

const emits = defineEmits<{
    'update:modelValue': [value: AcceptableValue];
}>();

const handleValueChange = (value: AcceptableValue) => {
    emits('update:modelValue', value);
};

const hasGroups = computed(() => !!props.groupOptions && Object.keys(props.groupOptions).length > 0);
</script>

<template>
    <Select :model-value="modelValue" @update:model-value="handleValueChange">
        <SelectTrigger>
            <SelectValue :placeholder="placeholder" />
        </SelectTrigger>
        <SelectContent>
            <template v-if="hasGroups">
                <SelectGroup 
                    v-for="(groupOptions, groupName) in groupOptions" 
                    :key="groupName"
                >
                    <SelectLabel>{{ groupName }}</SelectLabel>
                    <SelectItem
                        :value="option.value"
                        v-for="option in groupOptions"
                        :key="String(option.value)"
                    >
                        {{ option.label }}
                    </SelectItem>
                </SelectGroup>
            </template>
            
            <template v-else>
                <SelectGroup>
                    <SelectItem
                        :value="option.value"
                        v-for="option in options"
                        :key="String(option.value)"
                    >
                        {{ option.label }}
                    </SelectItem>
                </SelectGroup>
            </template>
        </SelectContent>
    </Select>
</template>
