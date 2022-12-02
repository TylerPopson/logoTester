<script setup lang="ts">

  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { supabase } from '../../supabase';
  import Login from './Login.vue';
  import Signup from './Signup.vue';

  const loginTab: Ref<boolean>= ref(true);

</script>

<template>
  <div class=" flex flex-col w-full md:w-1/3 h-2/3 md:h-3/4 rounded-lg">
    <div class="flex w-full h-1/6 space-x-3 justify-center">
      <button autofocus class="w-5/12 bg-light-pink rounded-full transition-all" :class="{'rounded-b-none': loginTab}" @click="()=>{loginTab = true}">Login</button>
      <button class="w-5/12 bg-blurple rounded-full transition-all" :class="{'rounded-b-none': !loginTab}" @click="()=>{loginTab = false}">Signup</button>
    </div>
    <Login v-show="loginTab"/>
    <Signup v-show="!loginTab"/>
  </div>
</template>