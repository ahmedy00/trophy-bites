<script setup lang="ts">
defineProps({
  redirect: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  }
})

</script>

<template>
  <NuxtLink :to="redirect">
    <button
      class="border border-[#F3F3F3] rounded-lg px-8 py-2 mt-8 text-[#F3F3F3]"
    >
      {{ $t(label) }}
    </button>
  </NuxtLink>
</template>
