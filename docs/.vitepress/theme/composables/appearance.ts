import { useAppearance as useAppearanceBase } from 'vue-theme'
import { useConfig } from './config'

export function useAppearance() {
  const { config } = useConfig()

  if (config.value.appearance) {
    useAppearanceBase()
  }
}
