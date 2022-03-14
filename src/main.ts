import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// init pinia
import { initStore } from '@/app/initStore';

// global styles import
import '@/styles/global';
import '@purge-icons/generated';

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia);

app.mount('#app');

initStore();
