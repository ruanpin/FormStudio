import type { FormElement } from './form-element'

interface Urls {
    url: string;
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type PayloadType = 'params' | 'form-data' | 'application/json' | "";

interface Submit {
    method: Method,
    urls: Urls[];
    ask: boolean;
    payloadType: PayloadType;
}

export interface FormConfig {
    render: FormElement[];
    submit: Submit;
}