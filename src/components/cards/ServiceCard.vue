<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: () => '',
    },
    subTitle: {
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
        :style="`background-image: url(${props.img});`"
        class="bg-no-repeat h-[320px] w-[420px] flex items-center justify-center my-16"
    >
        <h1 class="font-semibold text-color-title text-5xl text-shadow">
            {{ props.title }}
        </h1>
        <p class="font-semibold text-color-title text-5xl text-shadow">
            {{ props.title }}
        </p>
    </div>
</template>
