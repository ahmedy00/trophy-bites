<script setup lang="ts">
import TrophyBitesLogo from '~/assets/img/TrophyBitesLogo.png'

defineProps({
  width: {
    type: Number || String,
    default: null,
  },
  redirect: {
    type: String || null,
    default: '/'
  }
})

</script>

<template>
  <NuxtLink :to="redirect">
    <img
      :class="{
        'cursor-pointer': !!redirect
      }"
      :src="TrophyBitesLogo"
      alt="Trophy Bites Logo"
      :width="width"
    >
  </NuxtLink>
</template>
