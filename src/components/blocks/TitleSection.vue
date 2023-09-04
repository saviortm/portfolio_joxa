<script setup>
import { defineProps, computed } from 'vue'

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

const background_image = computed(() => `bg-${props.img}`)

console.log('title: ', props.title)
console.log('comp: ', background_image)
</script>

<template>
  <div
    class="bg-no-repeat h-16 w-[342px] flex items-center justify-center my-16"
    :class="background_image"
  >
    <h1 class="font-semibold text-color-title text-5xl text-shadow">
      {{ title }}
    </h1>
  </div>
</template>
