import { computed } from 'vue'

export function useElementLayout({ element }) {
  const elementClass = computed(() => {
    const BASIC_CLASS = 'layout-flex'
    return [
      `${BASIC_CLASS}-${element.class?.layoutFlex}`
    ]
  })
  const titleClass = computed(() => {
    const classMap = {
      row: "form-title",
      column: ""
    }
    return [
      classMap[element.class?.layoutFlex]
    ]
  })

  return {
    elementClass,
    titleClass,
  }
}
