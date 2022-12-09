import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { CoGhost, CoGithub, CoArrowThickToRight, CoArrowThickFromRight, CoClearAll, CoMenu, CoX, CoPlus, CoTrash, CoHome, CoPencil } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(CoGhost, CoGithub, CoArrowThickToRight, CoArrowThickFromRight, CoClearAll, CoMenu, CoX, CoPlus, CoTrash, CoHome, CoPencil);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");
