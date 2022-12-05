<script setup lang="ts">
import { supabase } from "../supabase";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { userSessionStore } from "@/store/userSession";

const sessionStore = userSessionStore();
const { session } = storeToRefs(sessionStore);

const loading = ref(true);
const username = ref("");
const website = ref("");
const avatar_url = ref("");

onMounted(() => {
	 getProfile()
});

async function getProfile() {
	try {
		loading.value = true;
		const { user } = session?.value;

		let { data, error, status } = await supabase
			.from("profiles")
			.select("username, website, avatar_url")
			.eq("id", user.id)
			.single();

		if (error && status !== 406) throw error;

		if (data) {
			username.value = data.username;
			website.value = data.website;
			avatar_url.value = data.avatar_url;

			console.log(username.value)
		}
	} catch (error) {
		if(error instanceof Error)
			alert(error.message);
	} finally {
		loading.value = false;
	}
}
</script>

<template>
    <div class="w-screen h-[100dvh] items-center justify-center bg-tan">
		<div class="flex justify-center items-center w-2/3 h-5/6 bg-light-blue">
			<h1>user Dashboard</h1>
		</div>
        
    </div>
  
</template>
