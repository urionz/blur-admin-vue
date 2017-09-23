import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const routerMap = [
    {
        path: '/404',
        name: '404',
        component: _import('errorPage/404')
    },
    {
        path: '/',
        name: 'root',
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                icon: 'ion-android-home',
                collspan: true,
                expanded: false,
                selected: false,
                component: _import('dashboard/index'),
                children: [
                    {
                        path: '/ddd',
                        name: 'ddd'
                    }
                ]
            },
            {
                path: 'edit',
                name: 'Editors',
                icon: 'ion-edit',
                collspan: false,
                expanded: false,
                selected: false,
                component: _import('dashboard/index'),
                children: [
                    {
                        path: '/aaa',
                        name: 'aaa'
                    },
                    {
                        path: '/bbb',
                        name: 'bbb'
                    },
                    {
                        path: '/ccc',
                        name: 'ccc'
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: _import('login/index')
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: routerMap
})
