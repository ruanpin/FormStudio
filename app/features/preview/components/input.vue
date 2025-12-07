<script setup lang="ts">
import { CircleX } from 'lucide-vue-next';

import Input from '@/components/atoms/input.vue'
import Button from '@/components/atoms/button.vue'

import type { Input as IInput } from '../types/form-element'

import { useElementLayout } from '../composables/element-css'

const element = defineModel<IInput>('element', { required: true })

const {
  elementClass,
  titleClass,
} = useElementLayout({ element: element.value })
</script>

<template>
    <div class="q-py-sm" :class="elementClass">
        <div class="font-bold mb-1 mr-2 font-sm whitespace-nowrap" :class="titleClass">
            <span class="break-all">
                {{ element.label }}
            </span>
            <span
                v-show="element.required"
                style="color: #CC0100"
            >
                 *
            </span>
        </div>
        <!-- @update:model-value="value => { updateHandler(value) }" -->
        <Input
            v-model="element.value"
            :placeholder="element.placeholder"
        >
            <template v-slot:append>
                <Button variant="ghost" @click="element.value = ''">
                    <CircleX />
                </Button>
            </template>
        </Input>
    </div>
</template>

<!-- <style lang="scss" scoped>
$name: '.atomic-button';
$color-map: (
  primary: #1976D2,
  success: #72BF24,
);

#{$name} {
  &--contained {
    color: white;
    @each $color, $value in $color-map {
      &#{$name}--#{$color} {
        background-color: rgba($value, 1);

        &:not(:disabled):is(:hover, :focus) {
          background-color: rgba($value, 0.8);
        }

        &:not(:disabled):active {
          background-color: rgba($value, 0.6);
        }
      }
    }
  }
}
</style> -->
