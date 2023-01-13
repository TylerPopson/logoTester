<script setup lang="ts">

    import { ref, shallowRef } from 'vue';
    import type { Ref } from 'vue';
    import {supabase} from '../supabase';
    import router from '../router';
    import Open from "./NavIconOpen.vue";
    import Close from "./NavIconClose.vue";
    import Auth from './Auth/Auth.vue';
    import { userSessionStore } from '../store/userSession';
    import { storeToRefs } from 'pinia';

    const sessionStore  = userSessionStore();
    const {session} = storeToRefs(sessionStore);
    const Icon = shallowRef(Close);
    const collapsed: Ref<boolean> = ref(true);
    const authActive: Ref<boolean> = ref(false);
    let modal = document.getElementById("auth-modal");

    function enableModal(){
        if (router.currentRoute.value.path != "/auth") {
            authActive.value = !authActive.value;
            toggle();
        }
    }

    window.onclick= (event)=>{
        modal = document.getElementById("auth-modal")
        if(event.target == modal && modal)
            authActive.value = !authActive.value;
    }

    function toggle(){
        collapsed.value = !collapsed.value;
        if(collapsed.value){
            Icon.value = Close;
        }else{
            Icon.value = Open;
        }
    }

    async function logout(){
        toggle();
        try {
            const { error } = await supabase.auth.signOut()
            if(error) throw error
            else router.push('/');
        } catch(error){
            if(error instanceof Error)
            alert(error.message);
        }
    }

</script>

<template>

    <nav class="fixed flex flex-col ml-1 w-20 z-40">
        <button @click="toggle" class="bg-emerald-700 aspect-square rounded-full mt-2">
            <Transition name="toggle-icon" mode="out-in">
                    <component :is="Icon"></component>
            </Transition>
        </button>
        
        <Transition name="slide-fade-home">
            <RouterLink v-if="!collapsed" to="/" class="nav-button">
                <v-icon name="co-home" scale="2"></v-icon>
            </RouterLink>
        </Transition>
        <Transition name="slide-fade-dashboard">
            <RouterLink v-if="!collapsed"  to="/Dashboard" class="nav-button">
                <v-icon name="co-ghost" scale="2"></v-icon>
            </RouterLink>
        </Transition>
        <Transition name="slide-fade-login">
            <button v-if="(!collapsed && !session)" @click="enableModal" class="nav-button">
                <v-icon name="co-arrow-thick-to-right" scale="2"></v-icon>
            </button>
            <button v-else-if="(!collapsed)" @click="logout" class="nav-button">
                <v-icon name="co-arrow-thick-from-right" scale="2"></v-icon>
            </button>
        </Transition>
        
    </nav>

    <div v-if="authActive" id="auth-modal" class=" modal flex absolute top-0 left-0 w-screen h-screen bg-transparent items-center justify-center z-50">
        <Auth/>
    </div>

</template>

<style scoped>
    
    .slide-fade-home-enter-active,
    .slide-fade-home-leave-active{
        transition: all 0.55s ease;
    }

    .slide-fade-home-enter-from,
    .slide-fade-home-leave-to{
        transform: translateY(-20px);
        opacity: 0;
    }


    .slide-fade-dashboard-enter-active,
    .slide-fade-dashboard-leave-active{
        transition: all 0.55s ease;
        transition-delay: 100ms;
    }

    .slide-fade-dashboard-enter-from,
    .slide-fade-dashboard-leave-to{
        transform: translateY(-20px);
        opacity: 0;
    }


    .slide-fade-login-enter-active,
    .slide-fade-login-leave-active{
        transition: all 0.55s ease;
        transition-delay: 200ms;
    }

    .slide-fade-login-enter-from,
    .slide-fade-login-leave-to{
        transform: translateY(-20px);
        opacity: 0;
    }


    .toggle-icon-enter-active,
    .toggle-icon-leave-active {
        transition: opacity 0.2s ease;
    }

    .toggle-icon-enter-from,
    .toggle-icon-leave-to {
        opacity: 0;
    }
</style>