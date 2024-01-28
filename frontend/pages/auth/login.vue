<script setup lang="ts">
// import { CredentialResponse } from 'vue3-google-signin'

definePageMeta({
  layout: 'auth'
})

const axios = useNuxtApp().$axios
const i18n = useI18n()

const userName = ref<string>('')
const password = ref<string>('')

const loginLoading = ref<boolean>(false)

const login = async () => {
  loginLoading.value = true
  // Login
  loginLoading.value = false
}

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
  <div class="flex flex-col items-center p-8 mb-36 h-full w-[100vw] sm:w-[420px]">
    <form class="w-full px-2 sm:px-8 py-8 sm:border-[1px] border-essence dark:border-secondary rounded-md">
      <div class="container">
        <div class="flex justify-center">
          <AppLogo
            :width="128"
            :redirect="''"
          />
        </div>
        <div class="text-center mt-4">
          <h1 class="font-bold text-light-text dark:text-dark-text">
            {{ $t('auth.login-page.message') }}
          </h1>
        </div>
        <div class="mt-8">
          <div>
            <TextField
              @update:model-value="newValue => userName = newValue"
              :model-value="userName"
              label="auth.common.user-name"
            />
          </div>
          <div>
            <TextField
              @update:model-value="newValue => password = newValue"
              :model-value="password"
              label="auth.common.password"
            />
          </div>
          <div class="mt-8">
            <ActionButton
              @action="login"
              label="auth.common.login"
              :loading="loginLoading"
              class="w-full"
            />
          </div>
          <div class="text-center flex flex-row mt-4">
            <span class="border-b-[1px] w-[37.5%] border-secondary mb-3" />
            <span class="w-[25%] text-light-text dark:text-dark-text">{{ $t('auth.common.or') }}</span>
            <span class="border-b-[1px] w-[37.5%] border-secondary mb-3" />
          </div>
          <div class="text-center mt-4">
            <GoogleSignInButton
              @success="handleLoginSuccess"
              @error="handleLoginError"
              :locale="i18n.locale.value"
            />
          </div>
        </div>
      </div>
    </form>
    <div class="text-center w-full py-4 sm:border-[1px] border-essence dark:border-secondary rounded-md mt-12 text-light-text dark:text-dark-text">
      {{ $t('auth.login-page.register-message') }}
      <span class="text-secondary font-bold">
        <NuxtLink to="/auth/register">
          {{ $t('auth.common.register') }}
        </NuxtLink>
      </span>
    </div>
  </div>
</template>
