<template>
     <div class="form__row">
            <div class="header__text">
                <p>Create <span class="highlighted">your</span> account <span>for free</span>.</p>
            </div>
            <div>
            <form id="login-form" @submit.prevent="loginUser(email, pass)">
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
                <a href="#" class="form__link">Forgot <span>password?</span></a>
                <div class="form__btn">
                    <button type="submit" class="btn-link">Sign in</button>
                    <router-link :to="{ name: 'Register' }" class="btn-link">Sign up</router-link>
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
                console.log(login.value, email.value)

        return { login, email, pass, secPass };
    }
}

</script>