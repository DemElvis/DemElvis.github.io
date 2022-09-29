import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

import VueGridLayout from "vue-grid-layout";
// import 'vue-grid-layout/dist/style.css';

import NavbarPlugin3 from "bootstrap-vue-3";
import BootstrapVue3 from "bootstrap-vue-3";
import IconsPlugin3 from "bootstrap-vue-3";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);

app.use(router);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(VueGridLayout);
// Make BootstrapVue available throughout your project
app.use(BootstrapVue3);
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin3);
app.use(NavbarPlugin3);

app.mount("#app");
