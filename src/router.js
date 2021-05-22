import {createRouter, createWebHistory} from 'vue-router'
import Index from './views/Index'
import Projects from './views/Projects'
import Blog from './views/Blog'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            children: [
                {
                    path: ':blogId',
                    component: Index,
                    props: true
                }
            ]
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            children: [
                {
                    path: ':blogId',
                    component: Index,
                    props: true
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: Index,
        },
        {
            path: '/:notFound(.*)',
            redirect: "/"
        }
    ],
    linkActiveClass: 'bg-indigo-100',
    linkExactActiveClass: 'bg-indigo-100',
})

export default router