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
//   input_password: defineAsyncComponent(()=> import('./components/InputPassword/index.vue')),
//   input_date: defineAsyncComponent(()=> import('./components/InputDate/index.vue')),
//   radio: defineAsyncComponent(()=> import('./components/Radio/index.vue')),
//   toggle: defineAsyncComponent(()=> import('./components/Toggle/index.vue')),
//   textarea: defineAsyncComponent(()=> import('./components/Textarea/index.vue')),
//   checkbox: defineAsyncComponent(()=> import('./components/Checkbox/index.vue')),
//   select: defineAsyncComponent(()=> import('./components/Select/index.vue')),
//   uploadImg: defineAsyncComponent(()=> import('./components/UploadImg/index.vue')),
//   mutiInputsColumn: defineAsyncComponent(()=> import('./components/MutiInputsColumn/index.vue')),
//   mutiSelectsColumn: defineAsyncComponent(()=> import('./components/MutiSelectsColumn/index.vue')),
//   dateRange: defineAsyncComponent(()=> import('./components/DateRange/index.vue')),
}
</script>

<template>
    <div class="p-4 h-[95%]">
        <template v-for="(element, index) in formConfig.render" :key="index">
            <div class="row items-center">
                <div class="col">
                    <component
                        :is="componentsRendering[element.type as FormElementType]"
                        v-model:element="formConfig.render[index]"
                        @updateCrObjectToRenderList="updateCrObjectToRenderList"
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