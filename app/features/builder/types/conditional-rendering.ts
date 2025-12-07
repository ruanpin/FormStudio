import type { Input, InputDate, Radio, Toggle, Checkbox, Select } from './form-element'

export type CrTypesValues = 'pureValue' | 'multipleValuesInArray' | 'age';

export type ElementCrTypes = 'input' | 'inputDate' | 'radio' | 'toggle' | 'checkbox' | 'select';

export type PureValueType = 'input' | 'radio' | 'toggle' | 'select'

export type MultipleValuesInArrayType = 'checkbox'

export type AgeType = 'inputDate'

export type CrElement = Input | InputDate | Radio | Toggle | Checkbox | Select;

export type PureValueElement = Exclude<CrElement, InputDate | Checkbox>

export type MultipleValuesInArrayElement = Extract<CrElement, Checkbox>

export type AgeElement = Extract<CrElement, InputDate>