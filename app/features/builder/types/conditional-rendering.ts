import type { Input, InputDate, Radio, Toggle, Checkbox, Select } from './form-element'

export type ElementCrTypes = 'input' | 'inputDate' | 'radio' | 'toggle' | 'checkbox' | 'select';

export type PureValueType = 'input' | 'radio' | 'toggle' | 'select'

export type CrElement = Input | InputDate | Radio | Toggle | Checkbox | Select;

export type PureValueElement = Exclude<CrElement, InputDate | Checkbox>