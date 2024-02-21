<script setup lang="ts">
import type { IconType } from '~/types/icon'
// FIXME: This is unnecessary import for a nuxt project but while testing components gives error without import.
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  inputType: {
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
  },
  modelValue: {
    type: String,
    default: '',
  },
  prependInnerIcon: {
    type: Object as () => IconType,
    default: () => {
      return { name: '', color: '' }
    }
  },
  prependOuterIcon: {
    type: Object as () => IconType,
    default: () => {
      return { name: '', color: '' }
    }
  },
  appendInnerIcon: {
    type: Object as () => IconType,
    default: () => {
      return { name: '', color: '' }
    }
  },
  appendOuterIcon: {
    type: Object as () => IconType,
    default: () => {
      return { name: '', color: '' }
    }
  }
})

defineEmits(['update:model-value'])

const showPrependInner = computed(() => !!props.prependInnerIcon.name)
const showPrependOuter = computed(() => !!props.prependOuterIcon.name)
const showAppendInner = computed(() => !!props.appendInnerIcon.name)
const showAppendOuter = computed(() => !!props.appendOuterIcon.name)
const showPrependInnerAndPrependOuter = computed(() => !!props.prependInnerIcon.name && !!props.prependOuterIcon.name)
// const showPrependInnerAndAppendInner = computed(() => !!props.prependInnerIcon.name && !!props.appendInnerIcon.name)
const showPrependInnerAndAppendOuter = computed(() => !!props.prependInnerIcon.name && !!props.appendInnerIcon.name)
// const showPrependOuterAndAppendInner = computed(() => !!props.prependOuterIcon.name && !!props.appendInnerIcon.name)
const showPrependOuterAndAppendOuter = computed(() => !!props.prependOuterIcon.name && !!props.appendInnerIcon.name)
const showAppendInnerAndAppendOuter = computed(() => !!props.appendInnerIcon.name && !!props.appendOuterIcon.name)

</script>

<template>
  <div
    data-test="generic-text-field"
    class="relative h-10 w-full min-w-[200px] mb-4 flex flex-row"
  >
    <span
      v-if="showPrependOuter"
      class="flex items-center justify-center"
    >
      <Icon
        data-test="prepend-outer-icon"
        :name="prependOuterIcon.name"
        :color="prependOuterIcon.color"
      />
    </span>
    <span
      v-if="showPrependInner"
      class="absolute inset-y-0 flex items-center px-2 bg-essence rounded-l-md"
      :class="{
        'left-8': showPrependInnerAndPrependOuter,
        'left-0': showPrependInnerAndPrependOuter
      }"
    >
      <Icon
        data-test="prepend-inner-icon"
        :name="prependInnerIcon.name"
        :color="prependInnerIcon.color"
      />
    </span>
    <input
      @input="$emit('update:model-value', $event.target.value)"
      data-test="text-field-input"
      :type="inputType"
      :value="modelValue"
      class="peer h-full w-full rounded-[7px] border border-essence bg-transparent px-3 py-2.5 text-sm text-light-text dark:text-dark-text transition-all
      placeholder-shown:border-essence-200 placeholder-shown:border-t-essence focus:border-1 border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-essence"
      :class="{
        'focus:border-error': showError,
        'pl-14': showPrependInner,
        'ml-2': showPrependInnerAndPrependOuter || showPrependOuter,
        'mr-2': showPrependInnerAndPrependOuter || showAppendInnerAndAppendOuter
      }"
      placeholder=""
      :required="required"
    >
    <label
      data-test="text-field-label"
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[11px] leading-tight transition-all before:mt-[6px]
      before:mr-1 before:w-2.5 before:rounded-tl-md after:mt-[6px] after:rounded-tr-md after:border-t after:border-t-essence after:flex-grow peer-placeholder-shown:text-sm
      peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] before:border-t text-light-text dark:text-dark-text"
      :class="{
        'peer-focus:after:border-error': showError,
        'peer-focus:before:border-error': showError,
        'peer-focus:text-error': showError,
        'peer-focus:text-secondary': !showError,
        'ml-8 after:mr-8': showPrependOuter,
        'after:mr-8': showAppendOuter && !showPrependOuter,
        'after:mr-24 peer-focus:after:mr-16': showPrependOuterAndAppendOuter,
        'before:pl-12': showPrependInner,
        'after:mr-16': showPrependOuterAndAppendOuter,
        'after:mr-10': showPrependInnerAndAppendOuter,
        'after:mr-[4.5rem]': showPrependInnerAndPrependOuter && showAppendOuter
      }"
    >
      {{ label }}
    </label>
    <span
      v-if="showAppendInner"
      class="absolute inset-y-0  flex items-center px-2 bg-essence rounded-r-md"
      :class="{
        'right-0': showAppendInner && !showAppendOuter,
        'right-8': showAppendInnerAndAppendOuter
      }"
    >
      <Icon
        data-test="append-inner-icon"
        :name="appendInnerIcon.name"
        :color="appendInnerIcon.color"
      />
    </span>
    <span
      v-if="showAppendOuter"
      class="flex items-center justify-center"
      :class="{
        'pr-2': !!appendOuterIcon.name && (!!prependOuterIcon.name && !appendOuterIcon.name),
        'ml-2': showPrependOuterAndAppendOuter,
        'ml-0': showPrependInnerAndPrependOuter && showAppendOuter,
        'pl-2': showAppendOuter && !showPrependOuterAndAppendOuter && !showPrependInnerAndAppendOuter
      }"
    >
      <Icon
        data-test="append-outer-icon"
        :name="appendOuterIcon.name"
        :color="appendOuterIcon.color"
      />
    </span>
  </div>
</template>