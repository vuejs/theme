const storageKey = 'vue-theme-appearance'

export function useAppearance() {
  if (typeof localStorage === 'undefined') {
    return () => {}
  }
  const saved = localStorage.getItem(storageKey)
  const classList = document.documentElement.classList
  let isDark =
    saved === 'auto'
      ? window.matchMedia(`(prefers-color-scheme: dark)`).matches
      : saved === 'dark'
  return () => {
    if ((isDark = !isDark)) {
      classList.add('dark')
    } else {
      classList.remove('dark')
    }
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light')
  }
}
