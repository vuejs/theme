import { ref } from 'vue'

export function useSwitchAppearance() {
  return { isDark, toggle }
}

const storageKey = 'vitepress-theme-appearance'
const { isDark, toggle } =
  typeof localStorage !== 'undefined'
    ? useAppearance()
    : { isDark: false, toggle: () => {} }

function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || 'auto'
  const query = window.matchMedia(`(prefers-color-scheme: dark)`)
  const classList = document.documentElement.classList
  const isDark = ref(
    userPreference === 'auto' ? query.matches : userPreference === 'dark'
  )
  const setClass = (dark: boolean) => classList[dark ? 'add' : 'remove']('dark')

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark.value = e.matches))
    }
  }

  const toggle = () => {
    setClass((isDark.value = !isDark.value))
    localStorage.setItem(
      storageKey,
      (userPreference = isDark.value
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
          ? 'light'
          : 'auto')
    )
  }

  return { isDark, toggle }
}
