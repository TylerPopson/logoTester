<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Navbar from "./components/Nav.vue";
  import { storeToRefs } from 'pinia';
  import { supabase } from './supabase';
  import { userSessionStore } from './store/userSession';
  import { onMounted } from 'vue';

  const store = userSessionStore();
  const {session} = storeToRefs(store);

  onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })


  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  })

})

</script>

<template>
  <header>
      <Navbar/>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
