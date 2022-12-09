<script setup lang="ts">
import { supabase } from "../../supabase";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { userSessionStore } from "@/store/userSession";
import ProjectTile from './ProjectTile.vue';

const sessionStore = userSessionStore();
const { session } = storeToRefs(sessionStore);

const loading = ref(true);
const username = ref("");
const website = ref("");
const avatar_url = ref("");
const full_name = ref("");
const bio = ref("");

onMounted(() => {
	 getProfile()
});

async function getProfile() {
	try {
		loading.value = true;
		const { user } = session?.value;

		let { data, error, status } = await supabase
			.from("profiles")
			.select("username, website, avatar_url, full_name, bio")
			.eq("id", user.id)
			.single();

		if (error && status !== 406) throw error;

		if (data) {
			username.value = data.username;
			website.value = data.website;
			avatar_url.value = data.avatar_url;
			full_name.value = data.full_name;
			bio.value = data.bio;

			console.log(username.value);
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
    <div class="flex w-screen h-[100dvh] items-center justify-center bg-emerald-100">
		<div class="flex flex-col items-center w-1/4 h-full bg-emerald-200 p-9 gap-5">
			<div class="w-full">
				<img class="aspect-square w-full rounded-full" src="https://via.placeholder.com/150" alt="profile photo"/>
			</div>
			<h1 class="text-4xl font-bold">@<a href="">{{username}}</a></h1>
			<h1 class="text-2xl font-thin">{{full_name}}</h1>
			<h1 class="text-2xl ">{{bio}}</h1>
			<div class="flex flex-row w-full items-center justify-center gap-5">
				<button class="w-4/5 bg-emerald-400 hover:bg-emerald-500 text-xl rounded-lg">Edit</button>
				<button class="w-1/5 bg-red-400 hover:bg-red-500 text-xl rounded-lg">
					<v-icon name="co-arrow-thick-from-right" scale="2"></v-icon>
				</button>
			</div>
		</div>

		<div class="flex flex-col w-3/4 h-full overflow-y-scroll p-5 gap-5">
			<div class="flex flex-row w-full justify-center">
				<input class="flex appearance-none border-b-2 bg-transparent border-b-emerald-500 w-10/12 h-10 outline-none" type="search" name="project-search" id="project-search" placeholder="Search">
				<button class="border-b-2 border-b-emerald-500 px-4 outline-none">sort</button>
			</div>
			<div class="grid grid-cols-2 items-start justify-start w-full h-full bg-emerald-100 p-5 gap-5">
				<ProjectTile title="Title 1" description="this is the description for 1"/>
				<ProjectTile title="Title 2" description="this is the description for 2"/>
				<ProjectTile title="Title 3" description="this is the description for 3"/>
				<ProjectTile title="Title 4" description="this is the description for 4"/>

			</div>
		</div>
        
    </div>
	<button class="aspect-square rounded-full bg-emerald-700 fixed bottom-5 right-5 z-50">
		<v-icon name="co-plus" scale="3"></v-icon>
	</button>
</template>
