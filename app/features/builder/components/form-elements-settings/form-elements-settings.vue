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

const handleDroppedCreate = ({ index, element }: { index: number; element: FormElement }) => {
  console.log(index, element, 'handleDroppedCreate');
  formConfig.value.render.splice(index, 0, element)
}

const handleDroppedReorder = ({ sourceIndex, targetIndex }: { sourceIndex: number; targetIndex: number }) => {
  console.log(sourceIndex, targetIndex, 'handleDroppedReorder');
  const [target] = formConfig.value.render.splice(sourceIndex, 1)
  if (!target) {
    return
  }
  formConfig.value.render.splice(targetIndex, 0, target)
}
</script>

<template>
    <div class="p-3 flex-col">
      <DropBox
        :drop-index="0"
        @dropped-create="handleDroppedCreate"
        @dropped-reorder="handleDroppedReorder"
      />
      <div
        v-for="(_, index) in formConfig.render"
        :key="index"
      >
        <ElementConfigurator
          v-model:element="formConfig.render[index]!"
          :source-index="index"
        />
        <DropBox
          :drop-index="index + 1"
          @dropped-create="handleDroppedCreate"
          @dropped-reorder="handleDroppedReorder"
        />
      </div>
    </div>
</template>