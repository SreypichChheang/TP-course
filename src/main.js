// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);

// Make sure Pinia is added
app.use(createPinia());

app.mount('#app');
