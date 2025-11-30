<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import Tabs from '@/components/atoms/tabs.vue'
import Button from '@/components/atoms/button.vue'
import FormElementsToolbox from './components/form-elements-toolbox/form-elements-toolbox.vue';
import FormElementsSettings from './components/form-elements-settings/form-elements-settings.vue';

import { useFormStatesStore } from './store/form-states';
import { useEditingStore } from './store/editing';

const { formConfig } = useFormStatesStore()
const editingStore = useEditingStore()

const tabs = [
    { label: "表單HTTP Request設定", value: "HTTP-request-settings" },
    { label: "表單元素建構器", value: "form-element-builder" },
]

const isInCrSettings = computed(() => editingStore.trace.length)

onMounted(() => {
    editingStore.init(formConfig.render)
})
</script>

<template>
    
    <div class="p-4 h-[95%]">
        <Tabs
            class="h-full"
            :tabs="tabs"
            :default-tab="'HTTP-request-settings'"
        >
            <template #HTTP-request-settings>
                AAAAAAAAA
            </template>
            <template #form-element-builder>
                <div class="flex items-center h-9 mb-2">
                    <Button
                        class="mr-2"
                        :disabled="!isInCrSettings"
                        @click="() => editingStore.back()"
                    >
                        返回
                    </Button>
                    <div class="flex items-center">
                        <div>當前層級：</div>
                        <div>Root</div>
                        <div v-show="isInCrSettings" class="mx-1">></div>
                        <div
                            v-for="(trace, index) in editingStore.trace"
                            :key="trace.path"
                            class="flex items-center"
                            >
                            <div>{{ trace.type }}</div>
                            <div v-show="trace.name">({{ trace.name }})</div>
                            <div v-show="editingStore.trace.length > (Number(index) + 1)" class="mx-1">></div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 h-[calc(100%-2.75rem)]">
                    <div class="border-2 border-gray-300 h-full">
                        <ScrollArea class="w-full h-full">
                            <FormElementsToolbox />
                        </ScrollArea>
                    </div>
                    <div class="flex-1 border-2 border-gray-300 h-full overflow-auto">
                        <ScrollArea class="w-full h-full">
                            <FormElementsSettings
                                v-model:render="editingStore.currentLayer"
                            />
                        </ScrollArea>
                    </div>
                </div>
            </template>
        </Tabs>
    </div>
</template>