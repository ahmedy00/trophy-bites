<script setup lang="ts">
import TrophyBitesLogo from '~/assets/img/TrophyBitesLogo.png'
</script>
<template>
  <header class="bg-green-400">
    <nav class="container grid grid-cols-7 m-auto items-center h-[64px]">
      <div>
        <img
          :src="TrophyBitesLogo"
          alt="TrophyBitesLogo"
          width="50"
        >
      </div>
      <div class="col-span-6 flex justify-end gap-8 ">
        <div>Tema</div>
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