import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('../views/HomePage/HeadView.vue'),
    children: [
      {
        path: '/index',
        name: 'IndexPage',
        component: () => import('../views/HomePage/IndexView.vue'), //逼格界面
      },
      {
        path: '/PersonalHomePage',
        name: 'PersonalHomePage',
        component: () => import('../views/PersonalHomePage/PHP.vue'),
      },
      {
        path: '/PersonalInfromation',
        name: 'PersonalInformation',
        component: () => import('../views/PersonalHomePage/PIFM.vue'),
      },
      {
        path: '/search',
        name: 'SearchPage',
        component: () => import('../views/HomePage/SearchView.vue')
      },
      //在这里填写的路由都将获得不透明header
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/account/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('../views/account/RegisterView.vue'),
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: () => import('../views/HomePage/HomeView.vue'), //视频主页
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
