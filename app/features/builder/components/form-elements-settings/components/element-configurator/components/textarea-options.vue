<script setup lang="ts">
import Checkbox from '@/components/atoms/checkbox.vue';
import Input from '@/components/atoms/input.vue';
import type { Textarea as ITextarea } from '../../../../../types/form-element';

const element = defineModel<ITextarea>('element', { required: true })
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
      <div class="text-4 font-bold">字數限制(limitWordsAmount)</div>
      <Input v-model="element.limitWordsAmount" ></Input>
    </div>
    <div>
      <div class="text-4 font-bold">提示(placeholder)</div>
      <Input v-model="element.placeholder" ></Input>
    </div>
    <slot></slot>
  </div>
</template>

