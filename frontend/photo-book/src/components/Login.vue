<template>

   <div class="form__row">
        <div class="header__text">
            
            <p v-if="loginForm"><span class="highlighted">Sign in</span> to <span>your</span> account.</p>
            <p v-else><span>Welcome</span> back <span class="highlighted">{{ loggedUser }}.</span></p>
        </div>
       <div v-if="loginForm">
              <form id="login-form" @submit.prevent="loginUser(email, pass)">
                <div class="form__input">
                      <input type="text" name="login" v-model="email" required>
                      <label>Email</label>
                </div>
                <div class="form__input">
                    <input type="password" name="password" v-model="pass" required>
                    <label>Password</label>
                </div>
                    <a href="#" class="form__link">Forgot <span>password?</span></a>
                    <div class="form__btn">
                        <button type="submit" class="btn-link">Sign in</button>
                        <router-link :to="{ name: 'Register'}" class="btn-link">Sign up</router-link>
                    </div>
                  </form>
                </div>
                <div v-else id="login-form" class="logged__form">
                        <div class="form__btn">
                            <router-link :to="{name: 'Dashboard'}" class="btn-link">Back to Dashboard</router-link>
                            <button @click="logoutUser()" class="btn-link">Log out</button>
                </div>
        </div>
   </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import router from '../router'
import { computed, reactive, ref, onMounted, onUpdated, onBeforeMount } from 'vue';

export default {
    name: 'Login',
      setup() {

        onMounted(() => {
            authUser();
        })
        let loggedUser = ref(null);
        let loginForm = ref(true);

        const logoutUser = async () => {
            console.log('clicked');
            fetch('http://localhost:3000/api/v1/user/logout',
                {
                    credentials: 'include',
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                .then((res) => {
                    console.log(res);
                })
                .then(() => {
                    loginForm.value = true;
                })
                .catch(err => console.log(err))
        }


        const authUser = async () => {
            fetch('http://localhost:3000/api/v1/user/auth',
                {
                    credentials: 'include',
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                .then((res) => {
                    if (!res.ok) {
                        loginForm.value = true;
                        throw new Error('HTTP Status: ' + res.status);
                    }
                    return res.json();
                })
                .then(data => {

                    // console.log(data.userAutshorized);
                    if (!data.userAuthorized) {
                        loginForm.value = true;
                    }

                    try {
                        let decoded = VueJwtDecode.decode(data.token);
                        loggedUser.value = decoded.email;
                        // console.log('email user: ' + loggedUser.value)
                        // console.log(loggedUser.value)
                        loginForm.value = false;
                    } catch (error) {
                        loginForm.value = true;
                        // throw new Error('Authentication Error!: ' + error)
                    }

                    console.log('Login form should be shown? ' + loginForm.value + ' and userlogin: ' + loggedUser.value);

                })
                .catch(err => console.log(err))
        }


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
                    // console.log(res)
                    if (!res.ok) {
                        throw new Error('HTTP Status: ' + res.status);
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    router.push('/dashboard');
                })
                .catch(err => console.log(err));
        }



        // console.log('login form logged user')
        // console.log(loginForm.value, loggedUser.value)
        console.log(loginForm)
        return { email, pass, loginUser, loggedUser, loginForm, logoutUser };
    }
}
</script>

<style>

</style>