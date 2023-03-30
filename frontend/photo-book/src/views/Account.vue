<template>
  <div id="row">
    <!-- <div class="circullar-background"></div> -->
    <main>
      <div class="box left-box">
        <LeftBox />
      </div>
      <div class="box right-box">
        <div class="form__container">
          <header>
            <p class="logo">PhotoBook</p>
          </header>
          <router-view />
        </div>
      </div>
    </main>
    <footer>
      <ul>
        <li>Privacy</li>
        <li>Help</li>
        <li>Locations</li>
        <li>Jobs</li>
        <li>Terms</li>
        <li>API</li>
        <li>About</li>
        <li>&copy; 2023 Photobook</li>
      </ul>
    </footer>
  </div>
</template>

<script>

import LeftBox from '../components/LeftBox.vue'

export default {
    components: {LeftBox}
}
</script>