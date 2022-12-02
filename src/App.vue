<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import Navbar from "./components/Nav.vue";
  import { defineStore, storeToRefs } from 'pinia';
  import { supabase } from './supabase';
  import { userSessionStore } from './store/userSession';
  import { onMounted, ref, type Ref } from 'vue';
  import type { Session } from '@supabase/gotrue-js';

  const store = userSessionStore();
  const {session} = storeToRefs(store);

  onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })


  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
    console.log(session.value);
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
