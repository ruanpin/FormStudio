export const CR_TYPES = {
    INPUT: [
        { label: '純值', value: 'pureValue' },
    ],
    INPUT_DATE: [
        { label: '年齡', value: 'age' },
    ],
    CHECKBOX: [
        { label: '選項包含', value: 'multipleValuesInArray' },
    ]
}

export const CR_TYPES_VALUES = Object.values(CR_TYPES).flat().map(({ value }) => value)

export const CR_OPERATION_TYPE = {
    input: [
        { label: '相等', value: 'equalTo' },
    ],
    inputDate: [
        { label: '相等', value: 'equalTo' },
        { label: '大於等於', value: 'greaterThanOrEqualTo' },
        { label: '小於等於', value: 'lessThanOrEqual' },
    ],
    radio: [
        { label: '相等', value: 'equalTo' },
    ],
    toggle: [
        { label: '相等', value: 'equalTo' },
    ],
    select: [
        { label: '相等', value: 'equalTo' },
    ]
}
