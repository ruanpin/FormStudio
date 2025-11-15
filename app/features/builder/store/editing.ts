import { defineStore } from 'pinia';
import type { FormElement } from '../types/form-element';

interface Cache {
    name: string;
    type: string;
    path: string;
    layerCache: FormElement[];
}

export const useEditingStore = defineStore('editing', () => {
    const root = ref<FormElement[]>([])
    const trace = ref<Cache[]>([])

    const currentLayer = computed(() => {
        const traceLength = trace.value.length

        if (traceLength > 0) {
            return trace.value[traceLength - 1]!.layerCache
        }

        return root.value
    })

    const init = (rootRender: FormElement[]) => {
        root.value = rootRender
    }

    const getPath = (element: FormElement): string => {
        if (trace.value.length === 0) {
            return element.id
        }
        const lastPath = trace.value[trace.value.length - 1]!.path
        return `${lastPath}.${element.id}`
    }

    const traceTransformer = (element: FormElement): Cache => {
        return {
            name: (element as any).name,
            type: element.type,
            path: getPath(element),
            layerCache: (element as any).cr
        }
    }

    const setTrace = (element: FormElement) => {
        trace.value.push(traceTransformer(element))
    }

    const back = () => {
        trace.value.pop()
    }

    return {
        init,
        trace,
        currentLayer,
        setTrace,
        back
    }
})