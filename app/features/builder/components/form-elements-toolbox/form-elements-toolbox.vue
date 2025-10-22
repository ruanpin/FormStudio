<script setup lang="ts">
import Input from '@/components/atoms/input.vue'
import formElementBox from './components/form-element-box.vue';
</script>

<template>
    <div class="p-4 flex flex-col gap-2">
        Tool panel
        <Input placeholder="搜尋表單元素"/>
        <formElementBox>
            <div>1</div>
            <div>2</div>
        </formElementBox>
    </div>
</template>