<script setup lang="ts">

defineProps({
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: true,
  },
  showError: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  }
})

const isFocused = ref(false)

</script>

<template>
  <div class="relative h-10 w-full min-w-[200px] mb-4">
    <input
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="peer h-full w-full rounded-[7px] border border-essence bg-transparent px-3 py-2.5 text-sm text-essence transition-all
      placeholder-shown:border-essence-200 placeholder-shown:border-t-essence focus:border-1 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-essence"
      :class="{
        'focus:border-error': showError,
      }"
      placeholder=""
      :required="required"
    >
    <div
      v-if="showError && isFocused"
      class="flex items-center justify-center w-48 p-2 bg-error mt-2 ml-2 rounded-md"
    >
      <div class="absolute left-4 top-10 border-[10px] border-t-0 border-transparent border-b-error" />
      <span
        v-text="$t(errorMessage)"
        class="text-white"
      />
    </div>
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[11px] leading-tight transition-all before:mt-[6px]
      before:mr-1 before:w-2.5 before:rounded-tl-md after:mt-[6px] after:rounded-tr-md after:border-t after:border-t-essence after:flex-grow peer-placeholder-shown:text-sm
      peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:before:border-t"
      :class="{
        'peer-focus:after:border-error': showError,
        'peer-focus:before:border-error': showError,
        'peer-focus:text-error': showError,
        'peer-focus:text-secondary': !showError,
      }"
    >
      {{ $t(label) }}
    </label>
  </div>
</template>