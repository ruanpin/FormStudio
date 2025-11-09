import { nanoid } from 'nanoid'
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
export const SpaceY = (): ISpaceY => ({
  id: nanoid(),
  type: 'spaceY',
  class: {
    paddingY: ""
  }
});

export const Separator = (): ISeparator => ({
  id: nanoid(),
  type: 'separator'
});

export const BasicOption = (): Option => ({
  label: "",
  value: ""
});

// ================== 輸入類型元件工廠函數 ==================
export const Input = (): IInput => ({
  id: nanoid(),
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
  crList: []
});

export const InputPassword = (): IInputPassword => ({
  id: nanoid(),
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
  crList: []
});

export const InputDate = (): IInputDate => ({
  id: nanoid(),
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
  crList: []
});

export const Textarea = (): ITextarea => ({
  id: nanoid(),
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
  crList: []
});

// ================== 選項類型元件工廠函數 ==================
export const Radio = (): IRadio => ({
  id: nanoid(),
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
  crList: []
});

export const Select = (): ISelect => ({
  id: nanoid(),
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
  crList: []
});

// ================== 開關類型元件工廠函數 ==================
export const Toggle = (): IToggle => ({
  id: nanoid(),
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
  crList: []
});

// ================== 多選類型元件工廠函數 ==================
export const Checkbox = (): ICheckbox => ({
  id: nanoid(),
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
  crList: []
});

// ================== 上傳類型元件工廠函數 ==================
export const UploadImg = (): IUploadImg => ({
  id: nanoid(),
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
  crList: []
});
