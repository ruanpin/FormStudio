import { useStrategyContext, type Context } from '@/composables/useStrategyContext';

import type { Option } from '../types/form-element';
import { BasicOption } from '../schemas/form-element';

type Operate = 'create' | 'delete';

interface UpdateOptions {
    operate: Operate;
    target: Option[];
    index: number;
}

const operateStrategy = useStrategyContext()

const createContext = ({ target, index }: Omit<UpdateOptions, 'operate'>): Context => {
    return {
        execute() {
            target.splice(index, 0, BasicOption())
        }
    }
}

const deleteContext = ({ target, index }: Omit<UpdateOptions, 'operate'>): Context => {
    return {
        execute() {
            target.splice(index, 1)
        }
    }
}

const selectStrategy = ({ operate, target, index }: UpdateOptions) => {
    switch (operate) {
        case 'create':
            operateStrategy.setContext(createContext({ target, index }))
            break;
        case 'delete':
            operateStrategy.setContext(deleteContext({ target, index }))
            break;
        default:
            throw new Error('create/delete only.')
    }
}

export const updateOptions = ({ operate, target, index }: UpdateOptions): void => {
    if (!Array.isArray(target)) {
        throw new Error('target is not Array.')
    }

    if (!operate) {
        throw new Error('missing operate.')
    }

    selectStrategy({ operate, target, index })
    operateStrategy.context.value?.execute()
}