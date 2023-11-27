<script setup lang="ts">

const route = useRoute()
const isRegister = computed(() => route.fullPath?.includes('register'))

</script>

<template>
  <div
    class="flex flex-row h-[100vh]"
    :class="{
      'flex-row-reverse': isRegister
    }"
  >
    <div class="flex flex-col items-center justify-center w-[50%] bg-secondary px-8">
      <AppLogo :width="64" />
      <h1 class="font-display text-[#F3F3F3] font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
        {{ isRegister ? $t('auth.hello') : $t('auth.welcome') }}
      </h1>
      <p class="font-display text-[#F3F3F3] text-center md:text-2xl xl:text-3xl pt-8">
        {{ isRegister ? $t('auth.register-message') : $t('auth.login-message') }}
      </p>
      <RoutingButton
        :redirect="isRegister ? '/auth/login' : '/auth/register'"
        :label="isRegister ? 'auth.login' : 'auth.register'"
      />
    </div>
    <div class="w-[50%]">
      <slot />
    </div>
  </div>
</template>