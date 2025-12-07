import { ref } from 'vue'

export function useTimeoutBoolean(timeout = 1000) {
    const value = ref(false)
    let timer: number | null = null

    const trigger = () => {
        if (timer) {
            clearTimeout(timer)
        }

        value.value = true

        timer = setTimeout(() => {
            value.value = false
            timer = null
        }, timeout)
    }

    const reset = () => {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        value.value = false
    }

    return {
        value,
        trigger,
        reset
    }
}