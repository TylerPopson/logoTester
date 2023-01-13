<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import { supabase } from '../../supabase';
    import router from '../../router';

    const loading: Ref<boolean> = ref(false);
    const email: Ref<string> = ref('');
    const password: Ref<string> = ref('');

    const handleLogin = async () => {
        try {

        loading.value = true
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })

        if (error) throw error
        alert('You are signed in!')

        } catch (error) {

        if (error instanceof Error) {
            alert(error.message)
        }

        } finally {

        loading.value = false
        router.push("/");

        }
    }

</script>

<template>
    <form class="flex flex-col gap-5 bg-emerald-200 rounded-b-md drop-shadow-xl h-full w-full justify-center items-center" @submit.prevent="handleLogin">
        <input autofocus class="text-3xl py-5 w-5/6 appearance-none focus:outline-none border-b-2 border-purple-700 bg-[#FFFFFF66]" type="email" placeholder="Email" v-model="email" />
        <input class="text-3xl py-5 w-5/6 appearance-none focus:outline-none border-b-2 border-purple-700 bg-[#FFFFFF66]" type="password" placeholder="Password" v-model="password" />
        <div class="flex items-center justify-center w-full">
          <input
            type="submit"
            class="block bg-emerald-600 rounded-md text-white p-2 w-5/6 text-lg"
            :value="loading ? 'Loading' : 'Login'"
            :disabled="loading"
          />
        </div>
    </form>
</template>