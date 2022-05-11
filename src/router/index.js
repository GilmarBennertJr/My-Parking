import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './../views/Home.vue';
import Template from './../views/dashboard/Template.vue';
import ListarReservas from './../views/dashboard/ListarReservas.vue';
import NovaReserva from './../views/dashboard/NovaReserva.vue';

const reserva = [
    { path: 'nova', component: NovaReserva },
    { path: 'lista', component: ListarReservas }
];

const routes = [
    { path: '/', component: Home },
    { path: '/reserva', component: Template, children: reserva, redirect: '/reserva/lista' }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;