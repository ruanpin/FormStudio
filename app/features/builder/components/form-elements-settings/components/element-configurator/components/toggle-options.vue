<script setup lang="ts">
import Checkbox from '@/components/atoms/checkbox.vue';
import Input from '@/components/atoms/input.vue';
import type { Toggle as IToggle } from '../../../../../types/form-element';

const element = defineModel<IToggle>('element', { required: true })
</script>

<template>
  <div class="space-y-4">
    <div>
      <div class="text-4 font-bold">欄位必填(required)？</div>
      <Checkbox v-model="element.required">
        必填
      </Checkbox>
    </div>
    <div>
      <div class="text-4 font-bold">物件名稱(name)</div>
      <Input v-model="element.name" ></Input>
    </div>
    <div>
      <div class="text-4 font-bold">表單顯示名稱(label)</div>
      <Input v-model="element.label" ></Input>
    </div>
    <div>
      <div class="text-4 font-bold">API對應key(field)</div>
      <Input v-model="element.field" ></Input>
    </div>
    <div>
      <div class="text-4 font-bold">開啟值(trueValue)</div>
      <Input v-model="element.truevalue" ></Input>
    </div>
    <div>
      <div class="text-4 font-bold">關閉值(falseValue)</div>
      <Input v-model="element.falsevalue" ></Input>
    </div>
    <slot></slot>
  </div>
</template>
