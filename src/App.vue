<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from "./components/Nav.vue";
</script>

<template>
  <header>
      <Navbar/>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
