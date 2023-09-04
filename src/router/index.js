import { createRouter, createWebHistory } from 'vue-router';

import { Home } from '../views';

const routes = [
    { path: '/', name: 'home', component: Home }
];

export const router = createRouter({
    history: createWebHistory(), routes
});
