import type { Session } from "inspector";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const userSessionStore = defineStore( 
	"session", () => {
		const session: Ref<Session | null> = ref(null);

		return {session};
	}
);