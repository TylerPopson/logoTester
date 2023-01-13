<script setup lang="ts">
    import { userSessionStore } from '@/store/userSession';
    import { storeToRefs } from 'pinia';
    import { supabase } from '@/supabase';
    import { ref, type Ref } from 'vue';

    const sessionStore = userSessionStore();
    const { session } = storeToRefs(sessionStore);

    const title = ref("");
    const description = ref("");
    const img_url = ref("");

    async function postProject() {
        try{
            let {data, error} = await supabase
            .from("projects")
            .insert([{
                user_id: session?.value,
                title: title.value,
                description: description.value,
                ing_url: img_url.value,
            }])
        }catch(error){
            if (error instanceof Error)
                alert(error.message);
        }
    }

</script>
<template>
    <div class="w-1/2 h-5/6 bg-slate-600">
        <form>
            <input type="text" v-model="title"/>
            <input type="text" v-model="description"/>
            <input type="text" v-model="img_url"/>
        </form>
    </div>
</template>
<style scoped></style>