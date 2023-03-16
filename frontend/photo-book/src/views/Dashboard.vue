<template>
  <div id="dashboard">
    <h1>Dashboard</h1>
    <div class="form-image-upload-box">
      <form id="upload-form" @submit.prevent="sendFileToServer()">
        <div>
          <label>Name</label>
            <input type="text" placeholder="name" v-model="name">
        </div>
        <div>
          <label>Title</label>
          <input type="text" placeholder="title" v-model="title">
        </div>
        <div>
          <label>Image</label>
          <input ref="file" v-on:change="handleFileUpload()" type="file" id="images" accept="image/*" />
        </div>
        
        <button>Send file</button>
      </form>
    </div>
    <div class="images">
      <div class="box" v-for="item in images" :key="item.id">
        <img :src="URL_img + item.author_id + '/' + item.img_uri" alt="" width="200" height="200">
        <div class="img-description">
          <p> {{ item.author_id}}</p>
          <p> {{ item.created_at}}</p>
          <p> {{ item.name }}</p>
          <p> {{ item.title }}</p>
          <p> {{ item.views }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref } from 'vue';


export default {
  name: 'Dashboard',
  setup() {
    const name = ref(null);
    const title = ref(null);
    const file = ref(null);

    const URL_img = 'http://localhost:3000/img/';

    const handleFileUpload = async () => {
      console.log("selected file: " + file.value.files);
      console.log(file.value.files[0])
    }
    
    const sendFileToServer = async () => {
      // console.log(name.value, title.value, file.value.files.length);
      if ((name.value === null) || (title.value === null) || (file.value.files.length === 0)) {
        return console.error('form error');
      }
      

      let formData = new FormData();
      formData.append('image', file.value.files[0])

      const fileResponse = await fetch('http://localhost:3000/api/v1/file/upload', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })
      if (!fileResponse.ok) {
        return console.error('Fetching error!');
      }

      const json = await fileResponse.json()
      const query = {
        author_id: json.user_id,
        name: name.value,
        title: title.value,
        img_uri: json.fileName,
      }

      const itemResponse = await fetch('http://localhost:3000/api/v1/items/', {
        method: 'POST',
        credentials: 'include',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(query)
      })

      if (!itemResponse.ok) {
        console.log(itemResponse);
        return console.error('Fetching items add error');
      }

      const result = await itemResponse.json();
      console.log(result);
    }

    const images = ref(null);
    const loadImages = async () => {
      const res = await fetch('http://localhost:3000/api/v1/items');

      if (!res.ok) {
        return console.error('Fetching method GET error!');
      }

      const result = await res.json();
      console.log(result.items);

      return images.value = result.items;
    }    
    onMounted(() => {
      loadImages();
    })
    onUpdated(() => {
      console.log(name.value, title.value);
    })
    return { name, title, file, handleFileUpload, sendFileToServer, images, URL_img};
  }
}
</script>

<style>

</style>