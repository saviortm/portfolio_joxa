<script setup>
import { TitleSection } from '../blocks';

const name = 'Services'
const image = 'service-texture'
</script>

<template>
  <div class="grid-container">
      <TitleSection :img="image" :title="name"/>
    <div class="grid grid-cols-3 gap-x-5 gap-y-16">
    </div>
  </div>
</template>

<style scoped></style>
