<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Tab {
    label: string;
    value: string;
}

defineProps<{
    tabs: Tab[];
    defaultTab: string;
}>()

defineOptions({
    inheritAttrs: false
})
</script>

<template>
    <Tabs :default-value="defaultTab" v-bind="$attrs" class="flex flex-col">
        <div class="flex items-center">
            <TabsList>
                <TabsTrigger
                    v-for="tab in tabs"
                    :key="tab.value"
                    :value="tab.value"
                >
                    {{ tab.label }}
                </TabsTrigger>
            </TabsList>
            <slot name="tab-side" />
        </div>
        <TabsContent
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
            class="flex-1 overflow-hidden"
        >
            <slot :name="tab.value" />
        </TabsContent>
    </Tabs>
</template>
