<script setup lang="ts">
import DropBox from './components/drop-box.vue';
import ElementConfigurator from './components/element-configurator/index.vue';

import type { FormConfig } from '../../types/form-config'
import type { FormElement } from '../../types/form-element'

const formConfig = ref<FormConfig>({
  render: [],
  submit: {
    method: "POST",
    urls: [
      { url: "firstUrl" },
    ],
    ask: false,
    payloadType: "form-data",
  }
})

const handleDropped = ({ index, element }: { index: number; element: FormElement }) => {
  console.log(index, element);
  formConfig.value.render.push(element)
}
</script>

<template>
    <div class="p-3 flex-col gap-4">
      <DropBox @dropped="handleDropped"/>
      <div
        class="border-2"
        v-for="(_, index) in formConfig.render"
        :key="index"
      >
        <ElementConfigurator v-model:element="formConfig.render[index]!"/>
      </div>
    </div>
</template>