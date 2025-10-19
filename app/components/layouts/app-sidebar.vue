<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar'
import { Cuboid, ScanEye } from "lucide-vue-next"

const items = [
  {
    title: "Builder",
    url: "builder",
    icon: Cuboid,
  },
  {
    title: "Preview",
    url: "preview",
    icon: ScanEye,
  }
];
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Features</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child>
                  <NuxtLink :prefetch="false" :to="item.url">
                    <component :is="item.icon" />
                    <span>{{item.title}}</span>
                  </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
  </Sidebar>
</template>