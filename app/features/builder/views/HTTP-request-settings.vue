<script setup lang="ts">
import { Plus, Trash } from "lucide-vue-next"

import Item from '@/components/atoms/item.vue'
import Select from '@/components/atoms/select.vue';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/atoms/input.vue';

import { useFormStatesStore } from '../store/form-states';

interface Url {
    url: string
}

const { formConfig } = useFormStatesStore()

const HTTP_METHODS = ref([
  { label: 'GET', value: 'GET' },
  { label: 'POST', value: 'POST' },
  { label: 'PUT', value: 'PUT' },
  { label: 'DELETE', value: 'DELETE' },
])
const PAYLOAD_TYPES = {
  GET: [
    { label: 'params', value: 'params' },
  ],
  POST: [
    { label: 'form-data', value: 'form' },
  ],
  PUT: [
    { label: 'form-data', value: 'form' },
  ],
  DELETE: [
    { label: 'form-data', value: 'form' },
    { label: 'params', value: 'params' },
  ]
}
const emptyList = ["請先選擇HTTP Request方法"]

const targetApiUrl = computed(() => {
  return formConfig.submit.urls.map(e => e.url).join('/')
})

const addUrl = (arr: Url[]) => {
    arr.push({
        url: ""
    })
}

const deleteUrl = (arr: Url[], index: number) => {
    arr.splice(index, 1)
}
</script>

<template>
    <div>
        <Item>
            <template #title>
                <span class="text-lg">
                    HTTP Request Settings
                </span>
            </template>
            <template #content>
                {{ formConfig.submit }}
            </template>
        </Item>
        <div class="mt-2 flex flex-col gap-2">
            <div>
                <div class="font-bold">HTTP方法(method)</div>
                <Select
                    v-model="formConfig.submit.method"
                    :options="HTTP_METHODS"
                />
            </div>
            <div>
                <div class="font-bold">payload類別(payload type)</div>
                <Select
                    v-model="formConfig.submit.payloadType"
                    :options="PAYLOAD_TYPES?.[formConfig.submit.method] || emptyList"
                />
            </div>
            <div class="font-bold flex items-center">
                <div>URL設定(API URL)</div>
                <div class="ml-xs">
                    <Button @click="addUrl(formConfig.submit.urls)">
                        <Plus />
                    </Button>
                </div>
            </div>
            <div class="">
                <div class="font-semibold">Target API URL:</div>
                <div>{{ targetApiUrl }}</div>
            </div>
            <TransitionGroup name="element">
                <div
                    v-for="(_, index) in formConfig.submit.urls"
                    :key="index"
                    class="flex items-center"
                >
                    <Input v-model="formConfig.submit.urls[index]!.url" />
                    <Button @click="deleteUrl(formConfig.submit.urls, index)">
                        <Trash />
                    </Button>
                </div>
            </TransitionGroup>
            <!-- <div>
                <div class="font-bold">送出前詢問(askUser)？</div>
                <q-checkbox class="" dense v-model="formSettings.submit.askUser">是</q-checkbox>
            </div> -->
        </div>
  </div>
</template>
