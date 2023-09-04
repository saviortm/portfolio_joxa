<script setup>
import { Navbar } from '../src/components/layouts';
</script>
<template>
    <div>
        <Navbar/>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<style>
@import url("./assets/main.css");
</style>
