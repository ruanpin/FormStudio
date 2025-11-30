<script setup lang="ts">
import { Copy } from 'lucide-vue-next'

import Tabs from '@/components/atoms/tabs.vue'
import Button from "@/components/atoms/button.vue"

import FormElementBuilder from './views/form-element-builder.vue';
import HTTPRequestSettings from './views/HTTP-request-settings.vue';

import { useFormStatesStore } from './store/form-states'

const formStatesStore = useFormStatesStore()

const tabs = [
    { label: "表單HTTP Request設定", value: "HTTP-request-settings" },
    { label: "表單元素建構器", value: "form-element-builder" },
]
</script>

<template>
    
    <div class="p-4 h-[95%]">
        <Tabs
            class="h-full"
            :tabs="tabs"
            :default-tab="'HTTP-request-settings'"
        >
            <template #tab-side>
                <Button class="ml-1" variant="ghost" size="sm" @click="() => formStatesStore.clickToCopy()">
                    <Copy :size="14" />
                </Button>
            </template>
            <template #HTTP-request-settings>
                <HTTPRequestSettings />
            </template>
            <template #form-element-builder>
                <FormElementBuilder />
            </template>
        </Tabs>
    </div>
</template>