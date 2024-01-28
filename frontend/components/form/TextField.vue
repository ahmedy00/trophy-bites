<script setup lang="ts">
export type IconType = {
  name: string,
  color: string,
}

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

const show = computed(() => {
  return {
    prependInner: !!props.prependInnerIcon.name,
    prependOuter: !!props.prependOuterIcon.name,
    appendInner: !!props.appendInnerIcon.name,
    appendOuter: !!props.appendOuterIcon.name,
    prependInnerAndPrependOuter: !!props.prependInnerIcon.name && !!props.prependOuterIcon.name,
    prependInnerAndAppendInner: !!props.prependInnerIcon.name && !!props.appendInnerIcon.name,
    prependInnerAndAppendOuter: !!props.prependInnerIcon.name && !!props.appendInnerIcon.name,
    prependOuterAndAppendInner: !!props.prependOuterIcon.name && !!props.appendInnerIcon.name,
    prependOuterAndAppendOuter: !!props.prependOuterIcon.name && !!props.appendOuterIcon.name,
    appendInnerAndAppendOuter: !!props.appendInnerIcon.name && !!props.appendOuterIcon.name,
  }
})

</script>

<template>
  <div class="relative h-10 w-full min-w-[200px] mb-4 flex flex-row">
    <span
      v-if="show.prependOuter"
      class="flex items-center justify-center"
    >
      <Icon
        :name="prependOuterIcon.name"
        :color="prependOuterIcon.color"
      />
    </span>
    <span
      v-if="show.prependInner"
      class="absolute inset-y-0 flex items-center px-2 bg-essence rounded-l-md"
      :class="{
        'left-8': show.prependInnerAndPrependOuter,
        'left-0': show.prependInnerAndPrependOuter
      }"
    >
      <Icon
        :name="prependInnerIcon.name"
        :color="prependInnerIcon.color"
      />
    </span>
    <input
      @input="$emit('update:model-value', $event.target.value)"
      :type="inputType"
      :value="modelValue"
      class="peer h-full w-full rounded-[7px] border border-essence bg-transparent px-3 py-2.5 text-sm text-light-text dark:text-dark-text transition-all
      placeholder-shown:border-essence-200 placeholder-shown:border-t-essence focus:border-1 border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-essence"
      :class="{
        'focus:border-error': showError,
        'pl-14': show.prependInner,
        'ml-2': show.prependInnerAndPrependOuter || show.prependOuter,
        'mr-2': show.prependInnerAndPrependOuter || show.appendInnerAndAppendOuter
      }"
      placeholder=""
      :required="required"
    >
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[11px] leading-tight transition-all before:mt-[6px]
      before:mr-1 before:w-2.5 before:rounded-tl-md after:mt-[6px] after:rounded-tr-md after:border-t after:border-t-essence after:flex-grow peer-placeholder-shown:text-sm
      peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] before:border-t text-light-text dark:text-dark-text"
      :class="{
        'peer-focus:after:border-error': showError,
        'peer-focus:before:border-error': showError,
        'peer-focus:text-error': showError,
        'peer-focus:text-secondary': !showError,
        'ml-8 after:mr-8': show.prependOuter,
        'after:mr-8': show.appendOuter && !show.prependOuter,
        'after:mr-24 peer-focus:after:mr-16': show.prependOuterAndAppendOuter,
        'before:pl-12': show.prependInner,
        'after:mr-16': show.prependOuterAndAppendOuter,
        'after:mr-10': show.prependInnerAndAppendOuter,
        'after:mr-[4.5rem]': show.prependInnerAndPrependOuter && show.appendOuter
      }"
    >
      {{ $t(label) }}
    </label>
    <span
      v-if="show.appendInner"
      class="absolute inset-y-0  flex items-center px-2 bg-essence rounded-r-md"
      :class="{
        'right-0': show.appendInner && !show.appendOuter,
        'right-8': show.appendInnerAndAppendOuter
      }"
    >
      <Icon
        :name="appendInnerIcon.name"
        :color="appendInnerIcon.color"
      />
    </span>
    <span
      v-if="show.appendOuter"
      class="flex items-center justify-center"
      :class="{
        'pr-2': !!appendOuterIcon.name && (!!prependOuterIcon.name && !appendOuterIcon.name),
        'ml-2': show.prependOuterAndAppendOuter,
        'ml-0': show.prependInnerAndPrependOuter && show.appendOuter,
        'pl-2': show.appendOuter && !show.prependOuterAndAppendOuter && !show.prependInnerAndAppendOuter
      }"
    >
      <Icon
        :name="appendOuterIcon.name"
        :color="appendOuterIcon.color"
      />
    </span>
  </div>
</template>