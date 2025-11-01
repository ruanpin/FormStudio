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
  console.log(index, element, 'handleDropped');
  formConfig.value.render.splice(index, 0, element)
}
</script>

<template>
    <div class="p-3 flex-col">
      <DropBox
        :drop-index="0"
        @dropped="handleDropped"
      />
      <div
        v-for="(_, index) in formConfig.render"
        :key="index"
      >
        <ElementConfigurator
          v-model:element="formConfig.render[index]!"
        />
        <DropBox
          :drop-index="index + 1"
          @dropped="handleDropped"
        />
      </div>
    </div>
</template>