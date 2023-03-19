<template>
  <div id="row">
    <header><p class="logo">PhotoBook</p></header>
    <div class="left-box">
      <LeftBox />
    </div>
    <div class="right-box">
      <LoginUser />
    </div>
    <footer>
      <ul>
        <li>Privacy</li>
        <li>Help</li>
        <li>Locations</li>
        <li>Josbs</li>
        <li>Terms</li>
        <li>API</li>
        <li>About</li>
        <li>&copy; 2023 Photobook</li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
// import VueJwtDecode from 'vue-jwt-decode';

// import { computed, reactive, ref, onMounted, onUpdated, onBeforeMount } from 'vue';
// import NavBar from '../components/Navbar.vue';
import LoginUser from '../components/Login.vue'
import LeftBox from '../components/LeftBox.vue'
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
  .row{
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: #f3f3f3;
  }
  .box{
    padding: 2em;
  }
</style>
