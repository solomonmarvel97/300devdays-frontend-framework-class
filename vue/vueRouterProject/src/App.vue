<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <main>
            <Navigation/>
            <!-- All routing happens in the router view -->
            <RouterView />
            <Footer/>
    </main>
</template>

<style scoped>

</style>
