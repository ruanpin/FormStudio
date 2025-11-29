import { toast } from 'vue-sonner'
import type { FormConfig } from '../types/form-config'
import { copyToClipboard } from '../utils/copy'

export const useFormStatesStore = defineStore('formStates', () => {
    const formConfig = ref<FormConfig>({
        render: [],
        submit: {
            method: "POST",
            urls: [
                { url: "firstUrl" },
            ],
            ask: false,
            payloadType: "form-data",
        }
    })

    const clickToCopy = async () => {
        const text = JSON.stringify(formConfig.value)
        const success = await copyToClipboard(text)

        if (success) {
            toast.success('複製成功')
        } else {
            toast.error('複製失敗')
        }
    }

    return {
        formConfig,
        clickToCopy
    }
})