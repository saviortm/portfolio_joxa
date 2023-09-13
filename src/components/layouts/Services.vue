<script setup>
import { reactive } from 'vue'
import { TitleSection } from '../blocks'
import { ServiceCard } from '../cards'
import serviceImg from '../../../src/assets/images/services.png'
import twoGames from '../../../src/assets/images/2d-games.png'
import threeGames from '../../../src/assets/images/3d-games.png'
import eduGames from '../../../src/assets/images/edu-games.png'
import arGames from '../../../src/assets/images/ar.png'
import vrGames from '../../../src/assets/images/vr.png'
import designGames from '../../../src/assets/images/game-design.png'


const name = 'Services'

const data = reactive({
  serviceData: [
    {
      title: '2D Games',
      subTitle: 'Har xil turdagi mobile va vedio 2D o‘yinlar',
      img: twoGames,
    },
    {
      title: '3D Games',
      subTitle: 'Har xil turdagi mobile va vedio 2D o‘yinlar',
      img: threeGames,
    },
    {
      title: 'Educational Games',
      subTitle: 'Har xil turdagi mobile va vedio 2D o‘yinlar',
      img: eduGames,
    },
    {
      title: 'AR',
      subTitle: 'Har xil turdagi mobile va vedio 2D o‘yinlar',
      img: arGames,
    },
    {
      title: 'VR',
      subTitle: 'Har xil turdagi mobile va vedio 2D o‘yinlar',
      img: vrGames,
    },
    {
      title: 'Game Design',
      subTitle: 'Har xil turdagi mobile va vedio 2D o‘yinlar',
      img: designGames,
    },
  ],
})
</script>

<template>
  <div class="grid-container">
    <TitleSection :img="serviceImg" :title="name" />
      <div class="grid grid-cols-3 gap-x-5 gap-y-16 text-white">
          <div
              v-for="(service, index) in data.serviceData"
              :key="index"
          >
              <ServiceCard :service="service" />
          </div>
      </div>
  </div>
</template>

<style scoped></style>
