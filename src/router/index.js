import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ProductPage from "../views/ProductPage.vue";
import ContactView from "../views/ContactView.vue";
import OrderView from "../views/OrderView.vue";
import PaymentView from "../views/PaymentView.vue";
import ContactInfo from "../views/ContactInfo.vue";
import UserView from "../views/UserView.vue";
import PasswordReset from "../components/PasswordReset.vue";




// import { getAuth } from "firebase/auth";

// const auth = getAuth();

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "userInfo",
    component: UserView,
  },
  {
    path: "/about",
    name: "about",
   component:AboutView,
  },
  {
    path: "/register",
    name: "register",
    component:RegisterPage,
  },
  {
    path: "/login",
    name: "login",
   component:LoginPage,
  },
  {
    path: "/products",
    name: "products",
   component:ProductPage,
  },
  {
    path: "/checkout",
    name: "checkout",
   component:CheckoutView,
  },
  {
    path: "/contact",
    name: "contact",
   component:ContactView,
  },
  {
    path: "/orders",
    name: "order",
   component:OrderView,
  },
  {
    path: "/info",
    name:"contactinfo",
   component:ContactInfo,
  },
  {
    path: "/payment",
    name:"payment",
   component:PaymentView,
  },
  {
    path: "/reset",
    name:"PasswordReset",
   component:PasswordReset,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to,from,next)=>{
//   const requiresAuth = to.matched.some(x => x.meta.requireAuth)
//   const currentUser = auth().currentUser

//   if(requiresAuth && !currentUser) {
//     next('/login')
//   } else if (requiresAuth && currentUser){
//     next()
//   } else{
//     next()
//   }
// })
export default router;
