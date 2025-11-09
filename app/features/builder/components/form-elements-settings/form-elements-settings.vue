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
  formConfig.value.render.splice(index, 0, element)
}

const handleDroppedReorder = ({ sourceIndex, targetIndex }: { sourceIndex: number; targetIndex: number }) => {
  // 相同位置不需要處理
  if (sourceIndex === targetIndex) return
  
  // 從原位置移除元素
  const [item] = formConfig.value.render.splice(sourceIndex, 1)
  if (!item) return
  
  // 向下移動時需要補償索引偏移（因為splice已刪除元素）
  const adjustedIndex = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex
  formConfig.value.render.splice(adjustedIndex, 0, item)
}
</script>

<template>
    <div class="p-3 flex-col">
      <DropBox
        :drop-index="0"
        @dropped-create="handleDroppedCreate"
        @dropped-reorder="handleDroppedReorder"
      />
      <TransitionGroup name="list">
        <div
          v-for="(element, index) in formConfig.render"
          :key="element.id"
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
      </TransitionGroup>
    </div>
</template>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s ease;
  }
  .list-enter-from, .list-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
  .list-move {
    transition: all 1s ease;
  }
</style>