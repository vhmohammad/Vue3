import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '../components/TodoList.vue';
import DotPattern from "../components/DotPattern.vue";
import Fibonacci from "../components/Fibonacci.vue";
import ListNamber from "../components/ListNamber.vue";
import ProductList from "../components/ProductList.vue";

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
    {
        path: '/ListNamber',
        name: 'ListNamber',
        component: ListNamber
    },
    {
        path: '/ProductList',
        name: 'ProductList',
        component: ProductList
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
