<script setup lang="ts">
import { Plus, Trash } from "lucide-vue-next"

import Checkbox from '@/components/atoms/checkbox.vue';
import Input from '@/components/atoms/input.vue';
import Button from '@/components/atoms/button.vue';
import Item from '@/components/atoms/item.vue'

import { updateOptions } from '../../../../../utils/tools'
import type { Radio as IRadio } from '../../../../../types/form-element';

const element = defineModel<IRadio>('element', { required: true })
</script>

<template>
  <div class="space-y-4">
    <div>
      <div class="text-4 font-bold">欄位必填(required)</div>
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
    <!-- 待處理 -->
    <div class="space-y-2">
      <div class="flex items-center">
        <div class="font-bold">可選選項(options)</div>
        <div class="flex-ac q-ml-xs q-gutter-sm">
          <Button @click="updateOptions({ operate: 'create', target: element.options, index: 0 })">
            <Plus />
          </Button>
        </div>
      </div>
      <div class="space-y-2">
        <Item
          v-for="(item, index) in element.options"
          :key="index"
        >
          <template #title>
            選項 {{ index + 1 }}
          </template>
          <template #content>
            <div>
              <div class="font-bold">選項顯示名稱(label)</div>
              <Input v-model="item.label"></Input>
            </div>
            <div>
              <div class="font-medium">選項值(value)</div>
              <Input v-model="item.value"></Input>
            </div>
          </template>
          <template #action>
            <Button
              variant="outline"
              size="sm"
              class="text-red-delete"
              @click="updateOptions({ operate: 'delete', target: element.options, index })"
            >
              <Trash />
            </Button>
          </template>
        </Item>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
