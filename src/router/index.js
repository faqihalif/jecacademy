import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
    {   
        name: 'Home',
        path: '/',
        component: () => import('@/pages/home/index.vue')
    },
    {   
        name: 'About',
        path: '/about',
        component: () => import('@/pages/about/index.vue')
    },
    {   
        name: 'News',
        path: '/news',
        component: () => import('@/pages/news/index.vue')
    },

    // Programs
    {   
        name: 'FellowshipAndObservership',
        path: '/fellowship-and-observership-programs',
        component: () => import('@/pages/programs/fellowship-and-observership-programs/index.vue')
    },
    {   
        name: 'FellowshipAndObservershipService',
        path: '/fellowship-and-observership-programs/:serviceSlug',
        component: () => import('@/pages/programs/fellowship-and-observership-programs/detail.vue'),
        beforeEnter: (to, from, next) => {
            let services = store.state.FellowshipAndObservershipPrograms.services
            let exist = services.find(service => {
                return service.slug === to.params.serviceSlug  
            })

            if(exist) {
                next()
            } else {
                next({
                    name: '404'
                })
            }
        }
    },
    {   
        name: 'OphthalmicNursingPrograms',
        path: '/ophthalmic-nursing-programs',
        component: () => import('@/pages/programs/ophthalmic-nursing-programs/index.vue')
    },
    {   
        name: 'OphthalmicNursingProgramsCourse',
        path: '/ophthalmic-nursing-programs/:courseSlug',
        component: () => import('@/pages/programs/ophthalmic-nursing-programs/detail.vue'),
        beforeEnter: (to, from, next) => {
            let courses = store.state.OphthalmicNursingPrograms.courses
            let exist = courses.find(course => {
                return course.slug === to.params.courseSlug  
            })

            if(exist) {
                next()
            } else {
                next({
                    name: '404'
                })
            }
        }
    },
    {   
        name: 'Alumni',
        path: '/alumni',
        component: () => import('@/pages/alumni/index.vue')
    },
    {
        name: '404',
        alias: '*',
        path: '/404',
        component: () => import('@/pages/404')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
})

export default router
