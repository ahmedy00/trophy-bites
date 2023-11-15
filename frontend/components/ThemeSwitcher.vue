<script setup lang="ts">

const colorMode = useColorMode()
const switchTheme = (val: string) => {
  colorMode.preference = val
}

const iconName = computed(() => colorMode.preference === 'light' ? 'mdi:weather-night' : 'mdi:white-balance-sunny')
const iconColor = computed(() => colorMode.preference === 'light' ? '#2F2F2F' : '#FFFFFF')

</script>

<template>
  <button
    @click="switchTheme(colorMode?.preference === 'light' ? 'dark' : 'light')"
    class="bg-[#F1F1F1] dark:bg-[#2F2F2F] border-[1px] border-emerald-600 hover:border-emerald-950 rounded-2xl py-[1px] px-1 w-[3vw] flex"
    :class="{'justify-end': colorMode.preference === 'dark', 'justify-start': colorMode.preference === 'light'}"
  >
    <Icon
      class="rounded-full p-1 bg-white dark:bg-[#1A1A1A]"
      :name="iconName"
      :color="iconColor"
    />
  </button>
</template>
