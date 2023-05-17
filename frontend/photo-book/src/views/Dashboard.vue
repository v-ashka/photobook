<template>
  <div id="dashboard">
    <div class="nav-top">
      <div class="logo">Photobook</div>
      <nav class="navigation-short">
        <div class="menu-short">
          <a href="#settings"><img src="../assets/avatars/avatar9.png" alt="User avatar" class="user-avatar"></a>
        
          <ul class="menu__btns">
            <a href="#add_new" aria-label="Add new content"><span class="material-symbols-outlined">library_add</span></a>
            <a href="#messages" aria-label="Messages"><span class="material-symbols-outlined">chat</span></a>
            <a href="#notifications" aria-label="Notifications"><span class="material-symbols-outlined">notifications</span></a>
          </ul>
        </div>
      </nav>
    </div>
    <div class="desktop-title">
      <span>Home</span>
    </div>
    <p class="highlighted-text">Suggestions for you</p>
    <nav class="desktop-menu">
      <div class="profile-menu">
        <ul>
          <a href="#my-profile" class="user-profile">
            My Profile
           <img src="../assets/avatars/avatar9.png" alt="User avatar" class="user-avatar">
          </a>
          <a href="#home">Home <span class="material-symbols-outlined">
  home
  </span></a>
          <a href="#messages">Messages <span class="material-symbols-outlined">
  chat
  </span></a>
          <a href="#notifications">Notifications <span class="material-symbols-outlined">notifications</span></a>
          <a href="#create_new">Create new <span class="material-symbols-outlined">library_add</span></a>
          <a href="#settings">Settings <span class="material-symbols-outlined">settings</span></a>
        </ul>
        <hr>
      </div>
    </nav>
    <section class="suggestions-carousel box-carousel">
      <!-- static -->
      <button class="carousel-btn prev-btn"><span class="material-symbols-outlined">navigate_before</span></button>
      <button class="carousel-btn next-btn"><span class="material-symbols-outlined">navigate_next</span></button>
      <div class="suggestion-item" draggable="true">
        <a href="#suggestion_user__profile"><img src="../assets/avatars/avatar1.png" alt="Suggestion friend avatar" width="50" class="img__avatar"></a>
        <div class="suggestion__user-info">
          <a href="#suggestion_user__profile" class="item__nickname">alberty33</a>
          <p class="item__friends-count"><span><a href="#show_mutual_friends">3</a></span> mutual friends</p>
          <button class="item__add"> Add <span class="material-symbols-outlined">group_add</span> 
          </button>
        </div>
      </div>
           <div class="suggestion-item" draggable="true">
          <a href="#suggestion_user__profile"><img src="../assets/avatars/avatar1.png" alt="Suggestion friend avatar" width="50" class="img__avatar"></a>
          <div class="suggestion__user-info">
            <a href="#suggestion_user__profile" class="item__nickname">alberty33</a>
            <p class="item__friends-count"><span><a href="#show_mutual_friends">3</a></span> mutual friends</p>
            <button class="item__add"> Add <span class="material-symbols-outlined">group_add</span> 
            </button>
          </div>
        </div>
             <div class="suggestion-item" draggable="true">
          <a href="#suggestion_user__profile"><img src="../assets/avatars/avatar1.png" alt="Suggestion friend avatar" width="50" class="img__avatar"></a>
          <div class="suggestion__user-info">
            <a href="#suggestion_user__profile" class="item__nickname">alberty33</a>
            <p class="item__friends-count"><span><a href="#show_mutual_friends">3</a></span> mutual friends</p>
            <button class="item__add"> Add <span class="material-symbols-outlined">group_add</span> 
            </button>
          </div>
        </div>
             <div class="suggestion-item" draggable="true">
          <a href="#suggestion_user__profile"><img src="../assets/avatars/avatar1.png" alt="Suggestion friend avatar" width="50" class="img__avatar"></a>
          <div class="suggestion__user-info">
            <a href="#suggestion_user__profile" class="item__nickname">alberty33</a>
            <p class="item__friends-count"><span><a href="#show_mutual_friends">3</a></span> mutual friends</p>
            <button class="item__add"> Add <span class="material-symbols-outlined">group_add</span> 
            </button>
          </div>
        </div>
          <!-- static -->
        <div class="suggestion-item" draggable="true">
          <a href="#suggestion_user__profile"><img src="../assets/avatars/avatar2.png" alt="Suggestion friend avatar" width="50" class="img__avatar"></a>
          <div class="suggestion__user-info">
            <a href="#suggestion_user__profile" class="item__nickname">xxx_ooo_xxx_oo</a>
            <p class="item__friends-count"><span><a href="#show_mutual_friends">3</a></span> mutual friends</p>
            <button class="item__add"> Add <span class="material-symbols-outlined">group_add</span> 
            </button>
          </div>
        </div>

              <!-- static -->
        <div class="suggestion-item" draggable="true">
          <a href="#suggestion_user__profile"><img src="../assets/avatars/avatar3.png" alt="Suggestion friend avatar" width="50" class="img__avatar"></a>
          <div class="suggestion__user-info">
            <a href="#suggestion_user__profile" class="item__nickname">zowiee_ami</a>
            <p class="item__friends-count"><span><a href="#show_mutual_friends">3</a></span> mutual friends</p>
            <button class="item__add"> Add <span class="material-symbols-outlined">group_add</span> 
            </button>
          </div>
        </div>

              <!-- static -->
        <div class="suggestion-item" draggable="true">
          <a href="#suggestion_user__profile"><img src="../assets/avatars/avatar4.png" alt="Suggestion friend avatar" width="50" class="img__avatar"></a>
          <div class="suggestion__user-info">
            <a href="#suggestion_user__profile" class="item__nickname">alberty33</a>
            <p class="item__friends-count"><span><a href="#show_mutual_friends">3</a></span> mutual friends</p>
            <button class="item__add"> Add <span class="material-symbols-outlined">group_add</span> 
            </button>
          </div>
        </div>
      </section>
      
    <div class="shorts box-carousel">
       <button class="carousel-btn prev-btn"><span class="material-symbols-outlined">navigate_before</span></button>
       <button class="carousel-btn next-btn"><span class="material-symbols-outlined">navigate_next</span></button>
      <a href="#shorts-item1" class="shorts-section active" draggable="true">
        <!-- static -->
        <img src="../assets/home/shorts.gif" alt="Short image">
        <div class="short__box">
          <div class="short__header">
            <img src="../assets/avatars/avatar11.png" alt="Friend short post avatar" class="img__avatar">
            <p class="short__nickname">
              zigi77711
            </p>
          </div>
          <div class="short__desc">
            <p>Funny red fox :D</p>
          </div>
        </div>
      </a>
        <a href="#shorts-item2" class="shorts-section " draggable="true">
        <!-- static -->
          <img src="../assets/home/shorts.gif" alt="Short image">
          <div class="short__box">
            <div class="short__header">
              <img src="../assets/avatars/avatar11.png" alt="Friend short post avatar" class="img__avatar">
              <p class="short__nickname">
                zigi77711
              </p>
            </div>
            <div class="short__desc">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, repudiandae!</p>
            </div>
          </div>
        </a>
        <a href="#shorts-item3" class="shorts-section " draggable="true">
          <!-- static -->
            <img src="../assets/home/shorts.gif" alt="Short image">
            <div class="short__box">
              <div class="short__header">
                <img src="../assets/avatars/avatar11.png" alt="Friend short post avatar" class="img__avatar">
                <p class="short__nickname">
                  zigi77711
                </p>
              </div>
              <div class="short__desc">
                <p>Funny red fox :D</p>
              </div>
            </div>
          </a>
                <a href="#shorts-item1" class="shorts-section active" draggable="true">
          <!-- static -->
          <img src="../assets/home/shorts.gif" alt="Short image">
          <div class="short__box">
            <div class="short__header">
              <img src="../assets/avatars/avatar11.png" alt="Friend short post avatar" class="img__avatar">
              <p class="short__nickname">
                zigi77711
              </p>
            </div>
            <div class="short__desc">
              <p>Funny red fox :D</p>
            </div>
          </div>
        </a>
    </div>

    <main class="posts">
             <!-- static -->
          <div class="post">
            <a href="#user_post"><img class="image-post" src="../assets/home/post.png" alt="User post"></a>
            <div class="post__info">
              <div class="post__avatar">
                <a href="#user_acc"><img src="../assets/avatar.png" alt="User avatar" class="img__avatar"></a>
              </div>
              <div class="post__header__mobile">
                    <a href="#user_acc"><img src="../assets/avatar.png" alt="User avatar" class="img__avatar"></a>
                    <div class="post__user__mobile">
                      <a href="#user_acc" class="author">zowiee_ami</a>
                      <p class="date_add">11.03.2023</p>
                    </div>
              </div>
              <div class="post__content">
                <div class="post__header">
                  <a href="#user_acc" class="author">zowiee_ami</a>
                  <p class="date_add">11.03.2023</p>
                </div>
                <div class="post__desc">
                  <p>Random landscape of nature lorem ipsum dolot imit. Septa inca la plata dolot imit. Lorem Lorem Lorem!!!</p>
                </div>
              </div>
              <div class="post__socials">
                <a href="#like" class="social-box">
                <!-- like -->
                    <span class="material-symbols-outlined">favorite</span>
                    <div class="social__counter"><span>12.3k</span></div>
                </a>
                <a href="#comment" class="social-box">
                <!-- comment -->
                    <span class="material-symbols-outlined">chat_bubble</span>
                    <div class="social__counter"><span>9210</span></div>
                </a>
                <a href="#share" class="social-box">
                <!-- share -->
                   <span class="material-symbols-outlined">share</span>
                   <div class="social__counter"><span>300</span></div>
                </a>
              </div>
            </div>
          </div>


                  <!-- static -->
          <div class="post">
            <a href="#user_post"><img class="image-post" src="../assets/home/post.png" alt="User post"></a>
            <div class="post__info">
              <div class="post__avatar">
                <a href="#user_acc"><img src="../assets/avatar.png" alt="User avatar" class="img__avatar"></a>
              </div>
              <div class="post__header__mobile">
                    <a href="#user_acc"><img src="../assets/avatar.png" alt="User avatar" class="img__avatar"></a>
                    <div class="post__user__mobile">
                      <a href="#user_acc" class="author">zowiee_ami</a>
                      <p class="date_add">11.03.2023</p>
                    </div>
              </div>
              <div class="post__content">
                <div class="post__header">
                  <a href="#user_acc" class="author">zowiee_ami</a>
                  <p class="date_add">11.03.2023</p>
                </div>
                <div class="post__desc">
                  <p>Random landscape of nature lorem ipsum dolot imit. Septa inca la plata dolot imit. Lorem Lorem Lorem!!!</p>
                </div>
              </div>
              <div class="post__socials">
                <a href="#like" class="social-box">
                <!-- like -->
                    <span class="material-symbols-outlined">favorite</span>
                    <div class="social__counter"><span>12.3k</span></div>
                </a>
                <a href="#comment" class="social-box">
                <!-- comment -->
                    <span class="material-symbols-outlined">chat_bubble</span>
                    <div class="social__counter"><span>9210</span></div>
                </a>
                <a href="#share" class="social-box">
                <!-- share -->
                   <span class="material-symbols-outlined">share</span>
                   <div class="social__counter"><span>300</span></div>
                </a>
              </div>
            </div>
          </div>
            <!-- static -->
        <div class="post">
          <a href="#user_post"><img class="image-post" src="../assets/home/post.png" alt="User post"></a>
          <div class="post__info">
            <div class="post__avatar">
              <a href="#user_acc"><img src="../assets/avatar.png" alt="User avatar" class="img__avatar"></a>
            </div>
            <div class="post__header__mobile">
                  <a href="#user_acc"><img src="../assets/avatar.png" alt="User avatar" class="img__avatar"></a>
                  <div class="post__user__mobile">
                    <a href="#user_acc" class="author">zowiee_ami</a>
                    <p class="date_add">11.03.2023</p>
                  </div>
            </div>
            <div class="post__content">
              <div class="post__header">
                <a href="#user_acc" class="author">zowiee_ami</a>
                <p class="date_add">11.03.2023</p>
              </div>
              <div class="post__desc">
                <p>Random landscape of nature lorem ipsum dolot imit. Septa inca la plata dolot imit. Lorem Lorem Lorem!!!</p>
              </div>
            </div>
            <div class="post__socials">
              <a href="#like" class="social-box">
              <!-- like -->
                  <span class="material-symbols-outlined">favorite</span>
                  <div class="social__counter"><span>12.3k</span></div>
              </a>
              <a href="#comment" class="social-box">
              <!-- comment -->
                  <span class="material-symbols-outlined">chat_bubble</span>
                  <div class="social__counter"><span>9210</span></div>
              </a>
              <a href="#share" class="social-box">
              <!-- share -->
                 <span class="material-symbols-outlined">share</span>
                 <div class="social__counter"><span>300</span></div>
              </a>
            </div>
          </div>
        </div>
    </main>


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
      loadCarousel()  
    })
    onUpdated(() => {
      console.log(name.value, title.value);
    })

  

    const loadCarousel = () => {
      const newSuggestions =[...document.querySelectorAll('.box-carousel')];
      const suggestionItemDim = document.querySelector('.suggestion-item').getBoundingClientRect();
      // let containerWidth = suggestionItemDim.width;
      // let containerHeight = suggestionItemDim.height;


      const nextBtn =[...document.querySelectorAll('.next-btn')]
      const prevBtn = [...document.querySelectorAll('.prev-btn')]

      newSuggestions.forEach((item, i) => {
        const itemDim = item.children[2].getBoundingClientRect();
        let containerWidth = itemDim.width;
        let containerHeight = itemDim.height;
        nextBtn[i].addEventListener('click', (e) => {
          e.preventDefault();
        if (window.innerWidth < 1024) {
            item.scrollLeft += containerWidth;
          } else {
            item.scrollTop += containerHeight + 15;
          }  
        })


        prevBtn[i].addEventListener('click', (e) => {
          e.preventDefault();
          if (window.innerWidth < 1024) {
            item.scrollLeft -= containerWidth;
          } else {
            item.scrollTop -= containerHeight + 15;
          }
        })
      })

      // console.log(nextBtn, prevBtn);
      // nextBtn.addEventListener('click', e => {
      //   e.preventDefault();
      //   if (window.innerWidth < 1024) {
      //     newSuggestions.scrollLeft += containerWidth;
      //    } else {
      //     newSuggestions.scrollTop += containerHeight + 15;  
      //   }
          
        
      // })

      // prevBtn.addEventListener('click', e => {
      //   e.preventDefault();
      //   if (window.innerWidth < 1024) {
      //     newSuggestions.scrollLeft -= containerWidth;
      //   } else {
      //     newSuggestions.scrollTop -= containerHeight + 15;
      //   }
        
      // })
      
    }

    return { name, title, file, handleFileUpload, sendFileToServer, images, URL_img};
  }
}
</script>

<style>

</style>