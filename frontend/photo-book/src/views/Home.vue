<template>
  <div id="home">
    <div class="box image-box">
      <div class="image-body">
        <img :src="require('@/assets/home/slide1.png')" alt="First image slide" />
        <img :src="require('@/assets/home/slide2.png')" alt="Second image slide">
      </div>
      <div class="image-heading">
        <h1>Lorem ipsum</h1>
      </div>
    </div>
    <div class="box form-box">
      <form id="login-form" @submit.prevent="loginUser(email, pass)" v-if="active">
        <label>Login</label>
          <input type="text" name="login" v-model="email">
        <label>Password</label>
          <input type="password" name="password" v-model="pass">

          <button type="submit">Log in</button>
        </form>
        <form v-else>
          <label>Hello {{ loggedUser }} </label>
          <button>Go to the dashboard</button>
          <button>Log out</button>
        </form>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import VueJwtDecode from 'vue-jwt-decode';

import { computed, reactive, ref, onMounted, onUpdated } from 'vue';
import NavBar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: 
   {
   NavBar 
  },
  props: {
    active: {
      type: Boolean,
      default: true
    }
  },
  setup() {

          

    onUpdated(() => {
          let loggedUser = ref(null);

          let loginForm = ref(true);
          fetch('http://localhost:3000/api/v1/user/auth', {credentials: 'include', method: 'GET', headers: {'Content-Type': 'application/json'}})
           .then((res) => {
          console.log(res)
             if (!res.ok) {
            loginForm = true;
            throw new Error('HTTP Status: ' + res.status);
          }
          return res.json();
        })
            .then(data => {

              // console.log(data.userAutshorized);
              if (!data.userAuthorized) {
                 loginForm = true; 
              }

            try {
                let decoded = VueJwtDecode.decode(data.token);
              loggedUser = decoded.email;
                console.log('email user: '+ loggedUser)
                loginForm = false;
            } catch (error) {
               loginForm = true;
              // throw new Error('Authentication Error!: ' + error)
            }
              
              console.log('Login form should be shown? ' + loginForm + ' and userlogin: ' + loggedUser);
              return {loginForm, loggedUser}
            })
            .catch(err => console.log(err))
    })
    const email = ref(null);
    const pass = ref(null);


    //     const search = ref('')
    // const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const loginUser = async (login, password) => {

      console.log(login, password);
      const query = {
        email: login,
        password: password
      }

      fetch('http://localhost:3000/api/v1/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query)
      })
        .then((res) => {
          console.log(res)
          if (!res.ok) {
            throw new Error('HTTP Status: ' + res.status);
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          router.push('/dashboard');
        })
        .catch(err => console.log(err));
    }




    return { email, pass, loginUser};
  }
}

// onMounted(() => {
//   const loginForm = ref(null);
//     fetch('http://localhost:3000/api/v1/user/auth')
//       .then((res) => {
//         console.log(res)
//       })
//       .then((data) => {
//         console.log(data);
//         loginForm = data;
//       })
//       .catch(err => console.log(err))

//       return { loginForm}
// });
</script>

<style>
  #home{
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: #f3f3f3;
  }



  .box{
    padding: 2em;
  }
</style>
