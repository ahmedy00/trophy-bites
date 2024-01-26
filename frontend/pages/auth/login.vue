<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const axios = useNuxtApp().$axios

const userName = ref<string>('')
const password = ref<string>('')

const loginDisabled = ref(false)
const loginLoading = ref(false)

const login = async () => {
  loginLoading.value = true
  // Login
  loginLoading.value = false
}

</script>

<template>
  <div class="p-8">
    <div class="text-center my-24">
      <h1 class="font-bold">
        LOGIN TO YOUR ACCOUNT
      </h1>
    </div>
    <form class="px-16">
      <div class="container">
        <div class="row">
          <div class="col">
            <TextField
              @update:model-value="newValue => userName = newValue"
              :model-value="userName"
              label="auth.login-page.user-name"
            />
          </div>
          <div class="col">
            <TextField
              @update:model-value="newValue => password = newValue"
              :model-value="password"
              label="auth.login-page.password"
            />
          </div>
          <div class="col">
            <ActionButton
              @action="login"
              label="auth.login"
              :disabled="loginDisabled"
              :loading="loginLoading"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
