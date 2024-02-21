<script setup lang="ts">
import type { Theme } from '~/types/theme'

const { t } = useI18n()

const colorMode = useColorMode()
const selectedTheme = computed(() => colorMode.preference)

const selectTheme = (theme: string) => {
  colorMode.preference = theme
}

const themes: Theme[] = [
  {
    key: t('default.system'),
    name: 'system',
    icon: 'mdi:theme-light-dark'
  },
  {
    key: t('default.light'),
    name: 'light',
    icon: 'mdi:white-balance-sunny'
  },
  {
    key: t('default.dark'),
    name: 'dark',
    icon: 'mdi:weather-night'
  }
]

</script>

<template>
  <GenericDropdown
    :label="$t('default.theme')"
    :items="themes"
    :selected-item="selectedTheme"
    :action="selectTheme"
  />
</template>
