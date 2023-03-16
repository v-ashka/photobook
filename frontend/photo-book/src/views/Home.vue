

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
      <LoginUser />
    </div>
  </div>
</template>

<script setup>
// import VueJwtDecode from 'vue-jwt-decode';

// import { computed, reactive, ref, onMounted, onUpdated, onBeforeMount } from 'vue';
import NavBar from '../components/Navbar.vue';
import LoginUser from '../components/Login.vue'
// import Login from '../components/Login.vue'


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
