<script setup lang="ts">
import TrophyBitesLogo from '~/assets/img/TrophyBitesLogo.png'

defineProps({
  width: {
    type: Number || String,
    default: null,
  }
})

</script>

<template>
  <NuxtLink to="/">
    <img
      class="cursor-pointer"
      :src="TrophyBitesLogo"
      alt="Trophy Bites Logo"
      :width="width"
    >
  </NuxtLink>
</template>
