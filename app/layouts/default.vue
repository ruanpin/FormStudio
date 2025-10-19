<script setup lang="ts">
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layouts/app-sidebar.vue"
</script>

<template>
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <SidebarTrigger />
            <slot />
        </SidebarInset>
    </SidebarProvider>
</template>