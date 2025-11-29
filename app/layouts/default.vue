<script setup lang="ts">
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layouts/app-sidebar.vue"
import Button from "@/components/atoms/button.vue"
import { Copy } from 'lucide-vue-next'
import { useFormStatesStore } from '@/features/builder'

const formStatesStore = useFormStatesStore()
</script>

<template>
    <SidebarProvider class="h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset class="h-full overflow-hidden">
            <div class="px-4 gap-1">
                <SidebarTrigger />
                <Button variant="ghost" size="sm" @click="() => formStatesStore.clickToCopy()">
                    <Copy :size="14" />
                </Button>
            </div>
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>