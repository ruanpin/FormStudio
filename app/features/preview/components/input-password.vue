<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next';
import Input from '@/components/atoms/input.vue'
import Button from '@/components/atoms/button.vue'

import type { InputPassword as IInputPassword } from '../types/form-element'

import { useElementLayout } from '../composables/element-css'

const element = defineModel<IInputPassword>('element', { required: true })

const {
  elementClass,
  titleClass,
} = useElementLayout({ element: element.value })

const isPwd = ref<boolean>(true)
</script>

<template>
  <div class="py-2" :class="elementClass">
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
            :type="isPwd ? 'password' : 'text'"
        >
            <template v-slot:append>
                <Button variant="ghost" @click="isPwd = !isPwd">
                    <Eye v-if="isPwd" />
                    <EyeOff v-else />
                </Button>
            </template>
        </Input>
    </div>
</template>
