import type {
  SpaceY as ISpaceY,
  Separator as ISeparator,
  Option,
  Input as IInput,
  InputPassword as IInputPassword,
  InputDate as IInputDate,
  Textarea as ITextarea,
  Radio as IRadio,
  Toggle as IToggle,
  Checkbox as ICheckbox,
  Select as ISelect,
  UploadImg as IUploadImg
} from '../types/form-element';

// ================== 特殊元件工廠函數 ==================
export const SpaceY = (): Omit<ISpaceY, 'id'> => ({
  type: 'spaceY',
  class: {
    paddingY: ""
  },
  crType: "",
  crTrigger: "",
  crOperator: ""
});

export const Separator = (): Omit<ISeparator, 'id'> => ({
  type: 'separator',
  crType: "",
  crTrigger: "",
  crOperator: ""
});

export const BasicOption = (): Option => ({
  label: "",
  value: ""
});

// ================== 輸入類型元件工廠函數 ==================
export const Input = (): Omit<IInput, 'id'> => ({
  type: 'input',
  name: "",
  label: "",
  field: "",
  value: "",
  required: false,
  originValue: "",
  class: {
    layoutFlex: "column"
  },
  placeholder: "",
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});

export const InputPassword = (): Omit<IInputPassword, 'id'> => ({
  type: 'inputPassword',
  name: "",
  label: "",
  field: "",
  value: "",
  required: false,
  originValue: "",
  class: {
    layoutFlex: "column"
  },
  limitWordsAmount: "",
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});

export const InputDate = (): Omit<IInputDate, 'id'> => ({
  type: 'inputDate',
  name: "",
  label: "",
  field: "",
  value: "",
  required: false,
  originValue: "",
  class: {
    layoutFlex: "column"
  },
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});

export const Textarea = (): Omit<ITextarea, 'id'> => ({
  type: 'textarea',
  name: "",
  label: "",
  field: "",
  value: "",
  required: false,
  originValue: "",
  class: {
    layoutFlex: "column"
  },
  limitWordsAmount: "",
  placeholder: "",
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});

// ================== 選項類型元件工廠函數 ==================
export const Radio = (): Omit<IRadio, 'id'> => ({
  type: 'radio',
  name: "",
  label: "",
  field: "",
  value: "",
  required: false,
  originValue: "",
  class: {
    layoutFlex: "column"
  },
  options: [{ label: "", value: "" }],
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});

export const Select = (): Omit<ISelect, 'id'> => ({
  type: 'select',
  name: "",
  label: "",
  field: "",
  value: "",
  required: false,
  originValue: "",
  class: {
    layoutFlex: "column"
  },
  options: [{ label: "", value: "" }],
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});

// ================== 開關類型元件工廠函數 ==================
export const Toggle = (): Omit<IToggle, 'id'> => ({
  type: 'toggle',
  name: "",
  label: "",
  field: "",
  value: "",
  required: false,
  originValue: "",
  class: {
    layoutFlex: "column"
  },
  truevalue: "",
  falsevalue: "",
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});

// ================== 多選類型元件工廠函數 ==================
export const Checkbox = (): Omit<ICheckbox, 'id'> => ({
  type: 'checkbox',
  name: "",
  label: "",
  field: "",
  value: [],
  required: false,
  originValue: [],
  class: {
    layoutFlex: "column"
  },
  options: [{ label: "", value: "" }],
  cr: [],
  crType: "",
  crTrigger: [],
  crOperator: ""
});

// ================== 上傳類型元件工廠函數 ==================
export const UploadImg = (): Omit<IUploadImg, 'id'> => ({
  type: 'uploadImg',
  name: "",
  label: "",
  field: "",
  value: null, // 空字串q-file元件會報警告，因此這裡使用null
  required: false,
  originValue: null,
  class: {
    layoutFlex: "column"
  },
  previewImgURL: "",
  cr: [],
  crType: "",
  crTrigger: "",
  crOperator: ""
});
