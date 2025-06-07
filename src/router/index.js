import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '../components/TodoList.vue';
import DotPattern from "../components/DotPattern.vue";
import Fibonacci from "../components/Fibonacci.vue";

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
    {
        path: '/Fibonacci',
        name: 'Fibonacci',
        component: Fibonacci
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
