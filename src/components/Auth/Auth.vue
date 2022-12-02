<script setup lang="ts">

  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { supabase } from '../../supabase';
  import Login from './Login.vue';
  import Signup from './Signup.vue';

  const loginTab: Ref<boolean>= ref(true);

</script>

<template>
  <div class=" flex flex-col w-full md:w-1/3 h-2/3 md:h-3/4 bg-slate-600 rounded-lg">
    <div class="flex w-full h-1/6 bg-slate-700">
      <button class="w-1/2" @click="()=>{loginTab = true}">Login</button>
      <button class="w-1/2" @click="()=>{loginTab = false}">Signup</button>
    </div>
    <Login v-if="loginTab"/>
    <Signup v-else/>
  </div>
</template>