<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

defineProps({
  label: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
  selectedItem: {
    type: String,
    default: '',
  },
  action: {
    type: Function,
    default: () => {},
  }
})


const { capitalizeFirst } = useStringHelpers()


</script>

<template>
  <Menu
    as="div"
    class="rounded-md"
  >
    <MenuButton
      class="px-4 py-1 dark:text-secondary border border-secondary rounded-md"
    >
      {{ label }}
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
        class="absolute p-2 mt-2 bg-white dark:bg-gloom shadow-lg border border-secondary rounded-md"
      >
        <MenuItem
          v-for="(item, index) in items"
          :key="index"
          v-slot="{ active }"
          :disabled="selectedItem === item?.code || selectedItem === item.name"
          class="rounded-md"
        >
          <button
            @click="action(item?.code || item?.name)"
            class="flex items-center gap-2 group w-full px-2 py-2 text-sm font-bold"
            :class="[
              active ? 'bg-secondary text-white' : '',
              selectedItem === item?.code || selectedItem === item.name ? 'text-essence' : 'dark:text-white'
            ]"
          >
            <Icon
              v-if="!!item.icon"
              :name="item.icon"
            />
            {{ capitalizeFirst(item?.key || item.name) }}
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>