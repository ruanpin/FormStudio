// ================== 基礎類型定義 ==================
export type FormElementType =
  | 'spaceY'
  | 'separator'
  | 'input'
  | 'inputPassword'
  | 'inputDate'
  | 'textarea'
  | 'radio'
  | 'toggle'
  | 'checkbox'
  | 'select'
  | 'uploadImg';

export type LayoutFlex = 'row' | 'column';

// ================== 基礎結構介面 ==================
export interface Option {
  label: string;
  value: string;
}

export interface LayoutClass {
  layoutFlex: LayoutFlex;
  paddingY?: string;
}

// ================== 抽象基礎介面 ==================
interface BaseFormElement<T extends FormElementType = FormElementType> {
  readonly id: string;
  readonly type: T;
  name: string;
  label: string;
  field: string;
  required: boolean;
  class: LayoutClass;
  crList: FormElement[];
}

interface BaseInput<T extends FormElementType> extends BaseFormElement<T> {
  value: string;
  originValue: string;
}

interface BaseOptions<T extends FormElementType> extends BaseFormElement<T> {
  value: string;
  originValue: string;
  options: Option[];
}

interface BaseMultiSelect<T extends FormElementType> extends BaseFormElement<T> {
  value: unknown[];
  originValue: unknown[];
  options: Option[];
}

interface BaseToggle<T extends FormElementType> extends BaseFormElement<T> {
  value: string;
  originValue: string;
  truevalue: string;
  falsevalue: string;
}

interface BaseUpload<T extends FormElementType> extends BaseFormElement<T> {
  value: File | null;
  originValue: File | null;
  previewImgURL: string;
}

// ================== 特殊元件介面 ==================
export interface SpaceY {
  readonly id: string;
  readonly type: 'spaceY';
  class: {
    paddingY: string;
  };
}

export interface Separator {
  readonly id: string;
  readonly type: 'separator';
}

// ================== 輸入類型元件 ==================
export interface Input extends BaseInput<'input'> {
  placeholder: string;
}

export interface InputPassword extends BaseInput<'inputPassword'> {
  limitWordsAmount: string;
}

export interface InputDate extends BaseInput<'inputDate'> { }

export interface Textarea extends BaseInput<'textarea'> {
  limitWordsAmount: string;
  placeholder: string;
}

// ================== 選項類型元件 ==================
export interface Radio extends BaseOptions<'radio'> { }

export interface Select extends BaseOptions<'select'> { }

export interface Checkbox extends BaseMultiSelect<'checkbox'> { }

// ================== 開關類型元件 ==================
export interface Toggle extends BaseToggle<'toggle'> { }

// ================== 上傳類型元件 ==================
export interface UploadImg extends BaseUpload<'uploadImg'> { }

// ================== 聯合類型 ==================
export type FormElement =
  | SpaceY
  | Separator
  | Input
  | InputPassword
  | InputDate
  | Textarea
  | Radio
  | Toggle
  | Checkbox
  | Select
  | UploadImg;

// ================== 類型守護 ==================
export const isFormElement = (element: unknown): element is FormElement => {
  return typeof element === 'object' &&
    element !== null &&
    'type' in element &&
    typeof (element as any).type === 'string';
};

export const isInputElement = (element: FormElement): element is Input | InputPassword | InputDate | Textarea => {
  return ['input', 'inputPassword', 'inputDate', 'textarea'].includes(element.type);
};

export const isOptionsElement = (element: FormElement): element is Radio | Select => {
  return ['radio', 'select'].includes(element.type);
};

// ================== 工廠類型 ==================
export type FormElementFactory<T extends FormElementType> = () => Extract<FormElement, { type: T }>;