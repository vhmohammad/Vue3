import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '../components/TodoList.vue';
import DotPattern from "../components/DotPattern.vue";

const routes = [
    {
        path: '/TodoList',
        name: 'TodoList',
        component: TodoList
    },

    {
        path: '/DotPattern',
        name: 'DotPattern',
        component: DotPattern
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
