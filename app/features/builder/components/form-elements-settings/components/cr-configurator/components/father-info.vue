<script setup lang="ts">
import type { Radio, Toggle, Checkbox, Select } from '../../../../../types/form-element'
import type { CrElement } from '../../../../../types/conditional-rendering'

import Item from '@/components/atoms/item.vue'

defineProps<{
    fatherElement: CrElement
}>();

const hasOptions = (element: CrElement): element is Radio | Select | Checkbox => {
    return 'options' in element;
};

const hasToggleValues = (element: CrElement): element is Toggle => {
    return 'truevalue' in element && 'falsevalue' in element;
};
</script>

<template>
    <div>
        <div class="q-mb-md">
            <Item>
                <template #title>
                    <span class="text-lg">
                        父元素: {{ fatherElement.type }}
                    </span>
                </template>
                <template #content>
                    <div class="text-grey-8">
                        <span class="font-bold">Name: </span>
                        <span :class="{ 'text-gray-400': !fatherElement.name }">{{ fatherElement.name || '未設定' }}</span>
                    </div>
                    <div class="text-grey-8">
                        <span class="font-bold">Label: </span>
                        <span :class="{ 'text-gray-400': !fatherElement.label }">{{ fatherElement.label || '未設定' }}</span>
                    </div>
                    <div class="text-grey-8">
                        <span class="font-bold">Field: </span>
                        <span :class="{ 'text-gray-400': !fatherElement.field }">{{ fatherElement.field || '未設定' }}</span>
                    </div>
                    <div class="text-grey-8" v-if="hasOptions(fatherElement)">
                        <span class="font-bold">Options: </span>
                        <span v-for="(item, index) in fatherElement.options" :key="index">
                            {{ item.label }},
                        </span>
                    </div>
                    <div class="text-grey-8" v-if="hasToggleValues(fatherElement)">
                        <span class="font-bold">True value: </span>{{ fatherElement.truevalue || '未設定' }}
                    </div>
                    <div class="text-grey-8" v-if="hasToggleValues(fatherElement)">
                        <span class="font-bold">False value: </span>{{ fatherElement.falsevalue || '未設定' }}
                    </div>
                    <div class="text-grey">此元素是否出現在畫面中，是以條件是否匹配<span class="font-bold">父元素的值</span>來決定</div>
                </template>
            </Item>
        </div>
    </div>
</template>
