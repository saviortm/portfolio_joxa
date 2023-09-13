<script setup>
import { TitleSection } from '../blocks'
import aboutImg from '../../../src/assets/images/about-me.png'

const name = 'About me'
</script>

<template>
  <div class="grid-container">
    <TitleSection :img="aboutImg" :title="name" />
  </div>
  <div class="flex">
    <div>
      <img src="../../assets/images/joxa.png" alt="joxa" />
    </div>
    <div>
      <h3>Hi. My fullname is Jahongir Mardonov</h3>
      <p>
        Men 2003-yil 19-sentabrda Qashqadaryo viloyatida tug‘ilganman.
        2020-yilda Toshkent Axborot Texnologiyalari Universiteti “Kompyuter
        Injinering: Multimedia” fakultetigao‘qishga qabul qilinganman.
        2021-yildan boshlab Game Developer bo‘lib ishlab kelayapman.
      </p>
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped></style>
