<script setup lang="ts">

  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { supabase } from '../supabase';

  const loading: Ref<boolean> = ref(false);
  const email: Ref<string> = ref('');
  const password: Ref<string> = ref('');

  const handleLogin = async () => {
    try {

      loading.value = true
      
      const { error } = await supabase.auth.signInWithOtp({
        email: email.value,
      })

      if (error) throw error
      alert('Check your email for the login link!')

    } catch (error) {

      if (error instanceof Error) {
        alert(error.message)
      }

    } finally {

      loading.value = false

    }
  }
</script>

<template>
  <div class="flex w-screen h-screen items-center justify-center bg-slate-200">
    <form class="grid grid-cols-1 bg-slate-400 rounded-md drop-shadow-xl h-2/3 w-1/4 justify-items-center" @submit.prevent="handleLogin">
      <div class="flex flex-col gap-4 bg-slate-300 w-full rounded-md items-center justify-center">
        <h1 class="text-5xl font-extrabold">Login</h1>
        <h5 class="text-lg font-bold">login with email and password below</h5>
      </div>
        <div class="flex flex-col w-full h-full text-3xl gap-3 items-center justify-center">
          <input class="h-1/3 w-5/6 rounded-md" type="email" placeholder="Email" v-model="email" />
          <input class="h-1/3 w-5/6 rounded-md" type="password" placeholder="Password" v-model="password" />
        </div>
        <div class="flex items-center justify-center w-full">
          <input
            type="submit"
            class="block bg-slate-600 rounded-md text-white p-2 w-5/6 text-lg"
            :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
          />
        </div>
    </form>
  </div>
</template>