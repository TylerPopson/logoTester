<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import Navbar from "./components/Nav.vue";
  import { defineStore } from 'pinia';

  

</script>

<template>
  <header>
      <Navbar/>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
