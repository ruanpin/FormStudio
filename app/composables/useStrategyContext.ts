import { ref, readonly } from 'vue'

export type Context<T extends Record<string, any> = {}> = {
    execute: (...args: any[]) => any
} & T

export const useStrategyContext = () => {
    const context = ref<Context | null>(null)

    const setContext = (val: Context): void => {
        if (typeof val.execute !== 'function') {
            throw new Error('Invalid context: execute function is required.')
        }
        context.value = val
    }

    const execute = (...args: any[]) => {
        if (!context.value) {
            throw new Error('context has not been set yet.')
        }
        return context.value.execute?.(...args)
    }

    return {
        context: readonly(context),
        setContext,
        execute
    }
}