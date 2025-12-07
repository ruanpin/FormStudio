<script setup lang="ts">
import Select from '@/components/atoms/select.vue';
import type { FormElement as IFormElement, SpaceY, Separator } from '../../../../../../types/form-element';

const element = defineModel<Exclude<IFormElement, SpaceY | Separator>>('element', { required: true })

const LAYOUT_FLEX_LIST = [
  { label: 'column - 堆疊排列', value: 'column' },
  { label: 'row - 同一行', value: 'row' },
]
</script>

<template>
    <div>
        <div class="font-bold">元素佈局(class > layoutFlex)(標題與元素)</div>
        <Select v-model="element.class.layoutFlex" :options="LAYOUT_FLEX_LIST" />
        <slot></slot>
    </div>
</template>