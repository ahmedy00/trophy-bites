<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const i18n = useI18n()

const fullName = ref<string>('')
const email = ref<string>('')
const userName = ref<string>('')
const password = ref<string>('')

const registerLoading = ref<boolean>(false)

const register = () => {
  registerLoading.value = true
  // register
  registerLoading.value = false
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
  <div class="flex flex-col items-center p-8 pb-12 sm:pb-36 h-full w-[100vw] sm:w-[420px]">
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
            {{ $t('auth.register-page.message') }}
          </h1>
        </div>
        <div class="mt-8">
          <div>
            <TextField
              @update:model-value="newValue => fullName = newValue"
              :model-value="fullName"
              :label="$t('auth.common.full-name')"
            />
          </div>
          <div>
            <TextField
              @update:model-value="newValue => email = newValue"
              :model-value="email"
              :label="$t('auth.common.email')"
            />
          </div>
          <div>
            <TextField
              @update:model-value="newValue => userName = newValue"
              :model-value="userName"
              :label="$t('auth.common.user-name')"
            />
          </div>
          <div>
            <TextField
              @update:model-value="newValue => password = newValue"
              :model-value="password"
              :label="$t('auth.common.password')"
              :append-inner-icon="{name: 'bi:eye', color: ''}"
              input-type="password"
            />
          </div>
          <div class="mt-8">
            <ActionButton
              @action="register"
              :label="$t('auth.common.register')"
              :loading="registerLoading"
              class="w-full"
            />
          </div>
        </div>
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
    </form>
    <div class="text-center w-full py-4 sm:border-[1px] border-essence dark:border-secondary rounded-md mt-12 text-light-text dark:text-dark-text">
      {{ $t('auth.register-page.login-message') }}
      <span class="text-secondary font-bold">
        <NuxtLink to="/auth/login">
          {{ $t('auth.common.login') }}
        </NuxtLink>
      </span>
    </div>
  </div>
</template>
