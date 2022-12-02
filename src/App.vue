<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import Navbar from "./components/Nav.vue";
  import { defineStore } from 'pinia';
  import { supabase } from './supabase';
  import { userSessionStore } from './store/userSessionStore';
  import { onMounted, ref, type Ref } from 'vue';
  import type { Session } from '@supabase/gotrue-js';

  const session: Ref<Session | null> = ref(null);

  onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })


  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
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
