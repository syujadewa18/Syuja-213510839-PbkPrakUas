import { createRouter, createWebHistory } from 'vue-router';

import Cuaca from '../components/Cuaca.vue';
import Game from '../components/Game.vue';
import Foto from '../components/Foto.vue';
import Stopwatch from '../components/Stopwatch.vue';

const routes = [
  { path: '/cuaca', component: Cuaca },
  { path: '/', component: Stopwatch},
  { path: '/game', component: Game},
  { path: '/foto', component: Foto },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;