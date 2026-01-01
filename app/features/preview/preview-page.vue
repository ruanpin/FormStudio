<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { FormConfig } from './types/form-config'
import type { FormElementType } from './types/form-element'

const props = defineProps<{
    formConfig: FormConfig
}>()

const componentsRendering = {
  spaceY: defineAsyncComponent(()=> import('./components/spaceY.vue')),
  separator: defineAsyncComponent(()=> import('./components/separator.vue')),
  input: defineAsyncComponent(()=> import('./components/input.vue')),
  inputPassword: defineAsyncComponent(()=> import('./components/input-password.vue')),
  inputDate: defineAsyncComponent(()=> import('./components/input-date.vue')),
  radio: defineAsyncComponent(()=> import('./components/radio.vue')),
  toggle: defineAsyncComponent(()=> import('./components/toggle.vue')),
  textarea: defineAsyncComponent(()=> import('./components/textarea.vue')),
  checkbox: defineAsyncComponent(()=> import('./components/checkbox.vue')),
  select: defineAsyncComponent(()=> import('./components/select.vue')),
  uploadImg: defineAsyncComponent(()=> import('./components/upload-img.vue')),
}
</script>

<template>
    <div class="p-4 h-[95%]">
        <template v-for="(element, index) in formConfig.render" :key="index">
            <div class="row items-center">
                <div class="col">
                    <!-- @updateCrObjectToRenderList="updateCrObjectToRenderList" -->
                    <component
                        :is="componentsRendering[element.type as FormElementType]"
                        v-model:element="formConfig.render[index]! as any"
                    />
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
:deep(.layout-flex-row) {
    display: flex;
    align-items: center;
}
:deep(.layout-flex-column) {
    display: flex;
    flex-direction: column;
}
</style>