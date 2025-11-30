<script setup lang="ts">
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layouts/app-sidebar.vue"
</script>

<template>
    <SidebarProvider class="h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset class="h-full overflow-hidden">
            <div class="px-4 gap-1">
                <SidebarTrigger />
            </div>
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>