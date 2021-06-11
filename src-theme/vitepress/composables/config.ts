import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'
import type { Config as UserConfig } from '../config'

export interface Config extends UserConfig {
  appearance: boolean
}

export function useConfig() {
  const site = useSiteDataByRoute()

  const config = computed(() => resolveConfig(site.value.themeConfig))

  return {
    config
  }
}

function resolveConfig(config: UserConfig): Config {
  return {
    appearance: true,
    ...config
  }
}
