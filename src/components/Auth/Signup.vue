<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import { supabase } from '../../supabase';

    const loading: Ref<boolean> = ref(false);
    const email: Ref<string> = ref('');
    const password: Ref<string> = ref('');

    const handleSignup = async () => {
        try {

        loading.value = true
        
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        })

        if (error) throw error
        alert('Check your email for confirmation!')

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
    <form class="flex flex-col gap-5 bg-blurple rounded-b-md drop-shadow-xl h-full w-full justify-center items-center" @submit.prevent="handleSignup">
        <input class="text-3xl py-5 w-5/6 appearance-none focus:outline-none border-b-2 border-purple-700 bg-[#FFFFFF66]" type="email" placeholder="Email" v-model="email" />
        <input class="text-3xl py-5 w-5/6 appearance-none focus:outline-none border-b-2 border-purple-700 bg-[#FFFFFF66]" type="password" placeholder="Password" v-model="password" />
        <div class="flex items-center justify-center w-full">
          <input
            type="submit"
            class="block bg-purple rounded-md text-white p-2 w-5/6 text-lg"
            :value="loading ? 'Loading' : 'Signup'"
            :disabled="loading"
          />
        </div>
    </form>
</template>