import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homepage',
    component: () => import('../views/HomePage/HeadView.vue'),
    children: [
      {
        path: '/PersonalHomePage',
        name: 'PersonalHomePage',
        component: () => import('../views/PersonalHomePage/PHP.vue'),
        children: [{
          path: '/PersonalHomePage/Main',
          name: 'PersonalHomePage/Main',
          component: () => import('../components/PHP/PHPMain.vue'),
          hidden: true,
        }, {
          path: '/PersonalHomePage/Star',
          name: 'PersonalHomePage/Star',
          component: () => import('../components/PHP/PHPStar.vue'),
          hidden: true,
        }, {
          path: '/PersonalHomePage/fans',
          name: 'FollowerPage',
          component: () => import('../views/PersonalHomePage/PHP/FollowersPage.vue'),
        },
        {
          path: '/PersonalHomePage/followings',
          name: 'FollowerPage',
          component: () => import('../views/PersonalHomePage/PHP/FollowingPage.vue'),
        }
        ]
      },
      {
        path: '/PersonalInformation',
        name: 'PersonalInformation',
        component: () => import('../views/PersonalHomePage/PIFM.vue'),
      },
      {
        path: '/PersonalContribution',
        name: 'PersonalContribution',
        component: () => import('../views/PersonalHomePage/PC.vue'),
        children: [{
          path: '/PChome',
          name: 'PersonalContributionHome',
          component: () => import('../components/PC/PChome.vue'),
          hidden: true
        }, {
          path: '/PCmanageVideo',
          name: 'PersonalContributionManageVideo',
          component: () => import('../components/PC/PCmanageVideo.vue'),
          hidden: true
        }, {
          path: '/PCmanageComplaint',
          name: 'PersonalContributionManageComplaint',
          component: () => import('../components/PC/PCmanageComplaint.vue'),
          hidden: true
        }, {
          path: '/PCMessage',
          name: 'PersonalContributionMessage',
          component: () => import('../components/PC/PCMessage.vue'),
          hidden: true
        }]
      },
      //在这里填写的路由都将获得不透明header
    ]
  },
  // {
  //   path: '/index',
  //   name: 'IndexPage',
  //   component: () => import('../views/HomePage/IndexView.vue'), //逼格界面
  // },
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
  {
    path: '/search',
    name: 'SearchPage',
    component: () => import('../views/HomePage/SearchView.vue')
  },
  {
    path: '/block/:blockid',
    name: 'BlockPage',
    component: () => import('../views/HomePage/SingleBlockView.vue')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
