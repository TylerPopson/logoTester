<script setup lang="ts">

    import { onMounted, ref, shallowRef } from 'vue';
    import type { Ref } from 'vue';
    import {supabase} from '../supabase';
    import router from '../router';
    import Open from "./NavIconOpen.vue";
    import Close from "./NavIconClose.vue";
    import Auth from './Auth/Auth.vue';

    const Icon = shallowRef(Close)

    const collapsed: Ref<boolean> = ref(true);
    const loggedIn: Ref<boolean> = ref(false);

    const authActive: Ref<boolean> = ref(false);

    let modal = document.getElementById("auth-modal")

    function enableModal(){
        console.log("nav click");
        modal = document.getElementById("auth-modal")
        if(modal){
            console.log("displayed?")
            modal.style.display = "flex";
        }
    }

    window.onclick= (event)=>{
        if(event.target == modal && modal)
            modal.style.display = "none";
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
        try {
            const { error } = await supabase.auth.signOut()
            if(error) throw error
            else router.push('/');
        } catch(error){
            if(error instanceof Error)
            alert(error.message)
        }
    }

    onMounted(()=>{
        //router.push('/');
    });

</script>

<template>
    <nav class="fixed flex flex-col ml-1 w-20 z-40">
        <button @click="toggle" class="bg-light-blue rounded-full mt-2">
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
            <button v-if="!collapsed && !loggedIn" @click="enableModal" class="nav-button">
                <v-icon name="co-arrow-thick-to-right" scale="2"></v-icon>
            </button>
        </Transition>
        <Transition name="slide-fade-login">
            <RouterLink v-if="!collapsed && loggedIn" to="/auth" class="nav-button">
                <v-icon name="co-arrow-thick-from-right" scale="2"></v-icon>
            </RouterLink>
        </Transition>
    </nav>


    <div id="auth-modal" class=" modal absolute top-0 left-0 w-screen h-screen bg-transparent items-center justify-center z-50">
        <Auth/>
    </div>
</template>

<style scoped>

    .modal{
        display: none;
    }
    
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