<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: () => '',
  },
  img: {
    type: String,
    required: true,
    default: () => '',
  },
})
</script>

<template>
  <div
    :style="`background-image: url(${props?.img});`"
    class="bg-no-repeat h-16 w-[342px] flex items-center justify-center my-16"
  >
    <h1 class="font-semibold text-color-title text-5xl text-shadow">
      {{ props.title }}
    </h1>
  </div>
</template>
