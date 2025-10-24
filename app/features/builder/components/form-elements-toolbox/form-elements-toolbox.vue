<script setup lang="ts">
import SearchInput from '@/components/atoms/input.vue'
import formElementBox from './components/form-element-box.vue';
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
    SpaceY(),
    Separator(),
    Input(),
    InputPassword(),
    InputDate(),
    Textarea(),
    Radio(),
    Select(),
    Toggle(),
    Checkbox(),
    UploadImg()
])

const searchInput = ref<string>("")

const filteredFormElements = computed<FormElement[]>(() => {
    if(!searchInput.value) {
        return formElements.value
    }
    return formElements.value.filter(e => e.type.includes(searchInput.value))
})
</script>

<template>
    <div class="p-4 flex flex-col gap-2">
        <SearchInput
            v-model="searchInput"
            placeholder="搜尋表單元素"
        />
        <formElementBox
            v-for="element in filteredFormElements"
            :key="element.type"
        >
            <div>
                {{ element.type }}
            </div>
        </formElementBox>
    </div>
</template>