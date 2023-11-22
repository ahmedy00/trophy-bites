<script setup lang="ts">
import type { Language } from '~/types/language'

const languages: Language[] = [
  {
    name: 'turkish',
    code: 'tr'
  },
  {
    name: 'english',
    code: 'en'
  }
]

const i18n = useI18n()

const selectLanguage = (language: string) => {
  i18n.locale.value = language
}

</script>

<template>
  <GenericDropdown
    :label="i18n.locale.value.toLocaleUpperCase()"
    :items="languages"
    :selected-item="i18n.locale.value"
    :action="selectLanguage"
  />
</template>
