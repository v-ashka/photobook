<template>
     <div class="form__row">
            <div class="header__text">
                <p>Create <span class="highlighted">your</span> account <span>for free</span>.</p>
            </div>
            <div>
            <form id="login-form" @submit.prevent="registerUser(login, email, pass, secPass)">
            <div class="form__input register">
                    <input type="text" name="login" v-model="login" required>
                    <label>Login</label>
            </div>
            <div class="form__input register">
                        <input type="email" name="email" v-model="email" required>
                        <label>Email</label>
            </div>
            <div class="form__input register">
                <input type="password" name="password" v-model="pass" required>
                <label>Password</label>
            </div>
            <div class="form__input register">
                    <input type="password" name="secPassword" v-model="secPass" required>
                    <label>Repeat password</label>
            </div>
                <router-link :to="{name: 'Login'}" class="form__link">Already have <span>account?</span></router-link>
                <div class="form__btn">
                    <button type="submit" class="btn-link register">Sign up</button>
                    
                </div>
                </form>
            </div>
       </div>
</template>

<script>

import { ref } from 'vue';
import router from '../router'

export default {
    name: 'Register',
    setup() {
        const login = ref(null);
        const email = ref(null); 
        const pass = ref(null);
        const secPass = ref(null);
        console.log(login.value, email.value);


     const registerUser = async (login, email, pass, secPass) => {

        if (pass != secPass) {
            return new Error('Passwords are not the same!');
        }
        
            console.log(login, email, pass, secPass);
            const query = {
                    login: login,
                    email: email,
                    password: pass,
            }

            fetch('http://localhost:3000/api/v1/user/register', {
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
                .then(() => {
                    // console.log(data);
                    router.push('/account/login');
                })
                .catch(err => console.log(err));
        }

        return { login, email, pass, secPass, registerUser };
    }
}

</script>