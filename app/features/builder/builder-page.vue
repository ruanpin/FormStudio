<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import FormElementsToolbox from './components/form-elements-toolbox/form-elements-toolbox.vue';
import FormElementsSettings from './components/form-elements-settings/form-elements-settings.vue';

import { useFormStatesStore } from './store/form-states';
import { useEditingStore } from './store/editing';

const { formConfig } = useFormStatesStore()
const editingStore = useEditingStore()

onMounted(() => {
    editingStore.init(formConfig.render)
})
</script>

<template>
    <div class="flex p-4 gap-4 h-[95%]">
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