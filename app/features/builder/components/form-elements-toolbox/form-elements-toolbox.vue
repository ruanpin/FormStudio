<script setup lang="ts">
import SearchInput from '@/components/atoms/input.vue'
import DragBox from './components/drag-box.vue';
import type { FormElement } from '../../types/form-element';
import {
    SpaceY,
    Separator,
    Input,
    InputPassword,
    InputDate,
    Textarea,
    Radio,
    Select,
    Toggle,
    Checkbox,
    UploadImg
} from '../../schemas/form-element'

const formElements = ref<FormElement[]>([
    { ...SpaceY({}), id: 'template-spaceY' },
    { ...Separator({}), id: 'template-separator' },
    { ...Input({}), id: 'template-input' },
    { ...InputPassword({}), id: 'template-inputPassword' },
    { ...InputDate({}), id: 'template-inputDate' },
    { ...Textarea({}), id: 'template-textarea' },
    { ...Radio({}), id: 'template-radio' },
    { ...Select({}), id: 'template-select' },
    { ...Toggle({}), id: 'template-toggle' },
    { ...Checkbox({}), id: 'template-checkbox' },
    { ...UploadImg({}), id: 'template-uploadImg' }
])

const searchInput = ref<string>("")

const filteredFormElements = computed<FormElement[]>(() => {
    if(!searchInput.value) {
        return formElements.value
    }
    return formElements.value.filter(e => e.type.toLowerCase().includes(searchInput.value.toLowerCase()))
})
</script>

<template>
    <div class="p-3 flex flex-col gap-2">
        <SearchInput
            v-model="searchInput"
            placeholder="搜尋表單元素"
        />
        <DragBox
            v-for="element in filteredFormElements"
            :key="element.type"
            :element="element"
        >
            <div>
                {{ element.type }}
            </div>
        </DragBox>
    </div>
</template>