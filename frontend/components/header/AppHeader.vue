<script setup lang="ts">
import type { CredentialResponse } from 'vue3-google-signin'

const user = ref()
const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response

  if (credential) {
    user.value = await useFetch('/api/google-login', {
      method: 'POST',
      body: {
        token: credential
      }
    })
  }
  console.log('user', user)
}

const handleLoginError = () => {
  console.error('Login failed')
}

</script>
<template>
  <header class="bg-light-header dark:bg-dark-header custom:bg-custom-header border-b-[1px] border-b-gray-400">
    <nav class="container px-24 grid grid-cols-7 m-auto items-center h-header">
      <div>
        <AppLogo />
      </div>
      <div class="col-span-6 flex justify-end gap-8">
        <ThemeSelector />
        <LanguageSelector />
        <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
        />
        <div v-if="!!user">
          <pre>{{ user }}</pre>
          <img
            :src="user.data.picture"
            alt=""
          >
        </div>
      </div>
    </nav>
  </header>
</template>