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
</script>

<template>
    <Tabs :default-value="defaultTab">
        <TabsList>
            <TabsTrigger
                v-for="tab in tabs"
                :key="tab.value"
                :value="tab.value"
            >
                {{ tab.label }}
            </TabsTrigger>
        </TabsList>
        <TabsContent
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
        >
            <slot :name="tab.value" />
        </TabsContent>
    </Tabs>
</template>
