import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import Home from "./views/Home.vue";
import Manga from "./views/Manga.vue";
import MangaChapter from "./views/MangaChapter.vue";
import SignUpPage from "./views/SignUpPage.vue";
import ProfilePage from "./views/ProfilePage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/manga/:mangaId",
      name: "manga",
      component: Manga
    },
    {
      path: "/manga/:mangaId/chapter/:chapterId",
      name: "MangaChapter",
      component: MangaChapter
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpPage
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters["auth/loggedIn"]) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
