import { UseDarkOptions, useDark, useToggle } from '@vueuse/core'

export type UseAppearanceOptions = UseDarkOptions

export function useAppearance(options: UseAppearanceOptions = {}) {
  const isDark = useDark({
    storageKey: 'vue-theme-appearance',
    ...options
  })

  const toggle = useToggle(isDark)

  return {
    isDark,
    toggle
  }
}
