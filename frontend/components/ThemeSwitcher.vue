<script setup lang="ts">

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const colorMode = useColorMode()
const selectedTheme = computed(() => colorMode.preference)


</script>

<template>
  <Menu
    as="div"
  >
    <MenuButton
      class="px-4 py-1 dark:text-secondary border border-secondary rounded-xl"
    >
      Theme
      <Icon
        name="mdi:chevron-down"
        color="#42B883"
      />
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute w-48 bg-white dark:bg-gloom dark:bg-gradient-to-t shadow-lg border border-secondary rounded"
      >
        <MenuItem
          v-slot="{ active }"
          :disabled="selectedTheme === 'system'"
        >
          <button
            @click="() => colorMode.preference = 'system'"
            class="flex items-center gap-4 group w-full px-2 py-2 text-sm"
            :class="[
              active ? 'bg-secondary text-white' : '',
              selectedTheme === 'system' ? 'text-essence' : 'dark:text-white'
            ]"
          >
            <Icon name="mdi:theme-light-dark" />
            System Default
          </button>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          :disabled="selectedTheme === 'light'"
        >
          <button
            @click="() => colorMode.preference = 'light'"
            class="flex items-center gap-4 group w-full px-2 py-2 text-sm"
            :class="[
              active ? 'bg-secondary text-white' : '',
              selectedTheme === 'light' ? 'text-essence' : 'dark:text-white'
            ]"
          >
            <Icon name="mdi:white-balance-sunny" />
            Light
          </button>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          :disabled="selectedTheme === 'dark'"
        >
          <button
            @click="() => colorMode.preference = 'dark'"
            class="flex items-center gap-4 group w-full px-2 py-2 text-sm"
            :class="[
              active ? 'bg-secondary text-white' : '',
              selectedTheme === 'dark' ? 'dark:text-essence' : ''
            ]"
          >
            <Icon name="mdi:weather-night" />
            Dark
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
