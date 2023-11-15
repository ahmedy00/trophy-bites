<script setup lang="ts">
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'

</script>
<template>
  <header class="bg-light-header dark:bg-dark-header custom:bg-custom-header border-b-[1px] border-b-secondary">
    <nav class="container px-24 grid grid-cols-7 m-auto items-center h-header">
      <div>
        <AppLogo />
      </div>
      <div class="col-span-6 flex justify-end gap-8 ">
        <div>
          <ThemeSwitcher />
        </div>
        <div>
          Dil
        </div>
        <div class="pl-8">
          Login
        </div>
      </div>
    </nav>
  </header>
</template>