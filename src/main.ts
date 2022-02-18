import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { initStore } from '@/app/initStore';

import '@purge-icons/generated';
import 'virtual:windi.css';
import '@/assets/styles/_global.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia);

app.mount('#app');

initStore();
