<script setup>
import {reactive} from "vue";
import { TitleSection } from '../blocks'
import { ServiceCard } from '../cards'
import serviceImg from '../../../public/images/services.png'


const name = 'Services'

const data = reactive({
    serviceData: [
        {
            title: '',
            subTitle: '',
            img: ''
        },
    ]
})
</script>

<template>
  <div class="grid-container">
    <TitleSection :img="serviceImg" :title="name" />
    <div class="grid grid-cols-3 gap-x-5 gap-y-16">
      <ServiceCard />
    </div>
  </div>
</template>

<style scoped></style>
