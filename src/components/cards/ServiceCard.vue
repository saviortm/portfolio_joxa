<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  service: {
    type: Object,
    required: true,
    default: () => {},
  },
})
</script>

<template>
  <div
      :style="`background-image: url(${props.service?.img});`"
    class="bg-no-repeat h-[330px] w-[430px] flex items-center justify-center rounded-lg"
  >
      <div class="px-8 pb-8 flex flex-col self-end">
          <div class="font-bold text-4xl mb-4">{{ props.service?.title }}</div>
          <div class="font-semibold text-base text-pale-white"> {{ props.service?.subTitle }}</div>
      </div>
  </div>
</template>
