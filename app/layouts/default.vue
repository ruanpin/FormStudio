<script setup lang="ts">
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layouts/app-sidebar.vue"
import Button from "@/components/atoms/button.vue"
import { useFormStatesStore } from '@/features/builder'

const formStatesStore = useFormStatesStore()
</script>

<template>
    <SidebarProvider class="h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset class="h-full overflow-hidden">
            <div>
                <SidebarTrigger />
                <Button @click="() => formStatesStore.clickToCopy()">複製</Button>
            </div>
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>