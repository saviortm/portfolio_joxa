<script setup>
</script>

<template>
  <div class="grid-container mt-8 bg-transparent flex justify-between">
    <div>
      <img src="../../assets/icons/logo.svg" alt="" />
    </div>
    <div class="flex space-x-16 self-center text-pale-white font-medium text-xl">
      <router-link to="/">Home</router-link>
      <router-link to="/">Projects</router-link>
      <router-link to="/">Contact</router-link>
    </div>
    <div class="flex space-x-3">
      <div class="self-center pr-3 border-r-2 border-pale-gold h-full flex items-center font-medium text-xs text-pale-gold">language</div>
      <div class="flex flex-col space-y-3 font-medium text-xs text-pale-gold">
        <div class="flex space-x-1.5">
            <img src="../../assets/icons/phone-icon.svg" alt="phone">
            <p>+ 998 91 452 01 72</p>
        </div>
          <div class="flex space-x-1.5">
              <img src="../../assets/icons/phone-icon.svg" alt="phone">
              <p>+ 998 91 452 01 72</p>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
