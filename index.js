import Vue from 'vue'
import VueRouter from 'vue-router'

const formA = () => import('../src/components/formA.vue')
const formEdit = () => import('../src/components/formEdit.vue')


Vue.use(VueRouter)
const routes = [
	{ path: '/', name: 'auth', component: formA},
  { path: '/users/create', name: 'auth', component: formEdit}
	{ path: '/users/:id/form_edit', name: 'auth', component: formEdit}
]
const router = new VueRouter({
    mode: 'history',
    routes
  })

  router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next
        // store
    }

    return middleware[0]({
        ...context
        // next: middlewarePipeline(context, middleware, 1)
    })
})