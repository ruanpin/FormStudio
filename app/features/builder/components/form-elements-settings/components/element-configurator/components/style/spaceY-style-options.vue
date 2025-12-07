<script setup lang="ts">
import Select from '@/components/atoms/select.vue';
import type { SpaceY as ISpaceY } from '../../../../../../types/form-element';

const element = defineModel<ISpaceY>('element', { required: true })

const PADDINGY_LIST = [
  { label: 'xs - 10px', value: 'xs' },
  { label: 'sm - 20px', value: 'sm' },
  { label: 'md - 40px', value: 'md' },
  { label: 'lg - 60px', value: 'lg' },
  { label: 'xl - 80px', value: 'xl' },
]
</script>

<template>
  <div class="space-y-4">
    <div>
      <div class="text-4 font-bold">空白大小(class > paddingY)</div>
      <Select v-model="element.class.paddingY" :options="PADDINGY_LIST" />
    </div>
    <slot></slot>
  </div>
</template>
