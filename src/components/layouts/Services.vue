<script setup>
import { TitleSection } from '../blocks';
import serviceImg from '../../../public/images/services.png'

const name = 'Services'
</script>

<template>
  <div class="grid-container">
      <TitleSection :img="serviceImg" :title="name"/>
    <div class="grid grid-cols-3 gap-x-5 gap-y-16">
    </div>
  </div>
</template>

<style scoped></style>
