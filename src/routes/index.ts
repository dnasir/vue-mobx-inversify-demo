import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/routes/HomePage.vue')
    }
  ]
})

export default router;
