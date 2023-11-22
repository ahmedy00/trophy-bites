<script setup lang="ts">
import type { Theme } from '~/types/theme'

const colorMode = useColorMode()
const selectedTheme = computed(() => colorMode.preference)

const selectTheme = (theme: string) => {
  colorMode.preference = theme
}

const themes: Theme[] = [
  {
    name: 'system',
    icon: 'mdi:theme-light-dark'
  },
  {
    name: 'light',
    icon: 'mdi:white-balance-sunny'
  },
  {
    name: 'dark',
    icon: 'mdi:weather-night'
  }
]

</script>

<template>
  <GenericDropdown
    :label="'default.theme'"
    :items="themes"
    :selected-item="selectedTheme"
    :action="selectTheme"
  />
</template>
