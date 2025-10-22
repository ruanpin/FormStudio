<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from '@/components/ui/sidebar'
import { Cuboid, ScanEye } from "lucide-vue-next"

const { isMobile, setOpenMobile } = useSidebar()

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

const handleNavItemClick = () => {
  // 在手機版時點擊導航項目後關閉側邊欄
  if (isMobile.value) {
    setOpenMobile(false)
  }
}
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
                  <NuxtLink :prefetch="false" :to="item.url" @click="handleNavItemClick">
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