import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';
import Account from '../views/Account.vue';
import Register from '../components/Register.vue'
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        name: "Settings",
        path: "settings",
        component: '',
      },
      {
        name: "Messages",
        path: "msg",
        component: 'm',
      },
      {
        name: "Add new",
        path: "add_new",
        component: 'crt',
      },
      {
        name: "Notifications",
        path: "notifications",
        component: '',
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
       children: [
        {
            name: "Register",
            path: "register",
            component: Register,
            
         },
         {
            name: "Login",
            path: "login",
            component: Login,
            
        },
       
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes

})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name}`);
  next();
});

export default router
