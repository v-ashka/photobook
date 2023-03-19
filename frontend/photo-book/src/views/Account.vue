<template>
   <div id="row">
        <header><p class="logo">PhotoBook</p></header>
        <div class="left-box">
          <LeftBox />
        </div>
        <div class="right-box">
          <router-view/>
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

<script>

import LeftBox from '../components/LeftBox.vue'

export default {
    components: {LeftBox}
}
</script>