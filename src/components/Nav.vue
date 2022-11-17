<script setup lang="ts">

    import { ref, shallowRef } from 'vue';
    import type { Ref } from 'vue';

    import Open from "./NavIconOpen.vue";
    import Close from "./NavIconClose.vue";

    const Icon = shallowRef(Close)

    const collapsed: Ref<boolean> = ref(true);

    function toggle(){
        collapsed.value = !collapsed.value;
        if(collapsed.value){
            Icon.value = Close;
        }else{
            Icon.value = Open;
        }
    }

</script>

<template>
    <nav class="fixed flex flex-col ml-1 w-20 z-50">
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
            <RouterLink v-if="!collapsed"  to="/" class="nav-button">
                <v-icon name="co-ghost" scale="2"></v-icon>
            </RouterLink>
        </Transition>
        <Transition name="slide-fade-login">
            <RouterLink v-if="!collapsed" to="/" class="nav-button">
                <v-icon name="co-arrow-thick-to-right" scale="2"></v-icon>
            </RouterLink>
        </Transition>
    </nav>
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