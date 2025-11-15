import { defineStore } from 'pinia';
import type { FormElement } from '../types/form-element';

interface Cache {
    path: string;
    layerCache: FormElement[]
}

interface SetTrace {
    elementCache: FormElement;
    cr: FormElement[]
}

export const useEditingStore = defineStore('editing', () => {
    const root = ref<FormElement[]>([])
    const trace = ref<Cache[]>([])

    const currentLayer = computed(() => {
        const traceLength = trace.value.length

        if (traceLength && trace.value[traceLength]) {
            return trace.value[traceLength].layerCache
        }

        return root.value
    })

    const init = (rootRender: FormElement[]) => {
        root.value = rootRender
    }

    const traceTransformer = (elementCache: FormElement): Cache => {
        return {
            // path: ,
            // layerCache:
        }
    }

    const setTrace = ({ elementCache, cr }: SetTrace) => {
        trace.value.push(traceTransformer(elementCache))
    }

    return {
        init,
        trace,
        currentLayer,
        setTrace
    }
})