import Vue from 'vue'
import VueRouter, {NavigationGuardNext, Route, RouteConfig} from 'vue-router'
import HomePage from "@/pages/main/HomePage.vue";
import LiveUploadPage from "@/pages/main/LiveUploadPage.vue";
import MyPage from "@/pages/main/MyPage.vue";
import {AppStatusModule} from "@/store/modules/AppStatusModule";
import MainLayout from "@/pages/MainLayout.vue";
import SignInPage from "@/pages/SignInPage.vue";
import InterestSet from "@/pages/InterestSet.vue";
import PopupGuide from "@/pages/Popup.vue";
import HtmlGuide from "@/pages/Guide.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: MainLayout.name,
    components: {
      root: MainLayout
    },
    redirect: {
      name: HomePage.name
    },
    children: [
      {
        path: 'home',
        name: HomePage.name,
        components: {
          main: HomePage
        }
      },
      {
        path: 'live-upload',
        name: LiveUploadPage.name,
        components: {
          main: LiveUploadPage
        }
      },
      {
        path: 'my',
        name: MyPage.name,
        components: {
          main: MyPage
        }
      }
    ]
  },
  {
    path: '/sign-in',
    name: SignInPage.name,
    components: {
      root: SignInPage
    },
    meta: {
      anonymousCallable: true
    }
  },
  {
    path: '/interest',
    name: InterestSet.name,
    components: {
      root: InterestSet
    },
    meta: {
      anonymousCallable: true
    }
  },
  {
    path: '/popup',
    name: PopupGuide.name,
    components: {
      root: PopupGuide
    },
    meta: {
      anonymousCallable: true
    }
  },
  {
    path: '/guide',
    name: HtmlGuide.name,
    components: {
      root: HtmlGuide
    },
    meta: {
      anonymousCallable: true
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
  if (to.matched.some(record => record.meta.anonymousCallable === true)) {
    if (AppStatusModule.isSignIn) {
      router.push({
        name: MainLayout.name
      }).catch(err => err);
    } else {
      next();
    }
  } else {
    if (AppStatusModule.isSignIn) {
      next();
    } else {
      router.push({
        name: SignInPage.name
      }).catch(err => err);
    }
  }
});

export default router
