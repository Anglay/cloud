import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
    routes: [{
        path: '/',
        redirect: '/calendar',
    }, {
        path: '/team',
        name: 'team'
    }, {
        path: '/calendar',
        name: 'calendar',
        component(resolve) {
            require(["@/views/calendar.vue"], resolve)
        }
    }, {
        path: '/message',
        name: 'message',
        component(resolve) {
            require(["@/views/message.vue"], resolve)
        }
    }]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router