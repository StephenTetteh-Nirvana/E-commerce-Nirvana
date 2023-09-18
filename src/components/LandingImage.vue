<template>
     <div class="container">
        <div class="grid-box">

          <div class="mother">
              <div class="text-box">
                  <h1> Our Men & Women</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, perspiciatis! Delectus minus, maiores quidem consequatur adipisci excepturi id ea quibusdam.</p>
                  <router-link to="/products"><button>Explore</button></router-link>
              </div>
            </div>

          <div class="image-box">
                <div class="grid-image">
                  <img :src="currentImage"/>
                </div>
             </div>

            

        </div>
        <div class="hidden">hidden</div>
     </div>
</template>

<script>
   import {ref,onMounted,computed} from 'vue'
    export default {
        name:'LandingImage',

        setup(){
            const images = [
        require('../images/cap-new.png'),
        require('../images/hoddies-new.png'),
        require('../images/women-jeans.png'),
        require('../images/watch-new.png'),
         require('../images/jordan-1.png'),  
         require('../images/white-jordan.png') 
    ];
    const currentIndex = ref(0);

    const currentImage = computed(() => images[currentIndex.value]);

    const startImageSlider = () => {
      setInterval(() => {
        currentIndex.value++;
        if (currentIndex.value === images.length) {
          currentIndex.value = 0;
        }
      }, 2000);
    };

    onMounted(startImageSlider);

    return{
        currentImage
    }
    }
        }
</script>

<style scoped>
.hidden{
  opacity:0;
  height: 100px;
}
 .grid-box{
   display:grid;
   grid-template-columns:repeat(2,1fr);
   height:60vh;
  }
  .mother{
   display:flex;
   justify-content: center;
   align-items:center;
  }
  .text-box{
    width:70%;
  }
  .text-box p{
    margin-top:20px;
  }
  .text-box button{
    padding:15px 40px;
    background-color:red;
    color:white;
    border:none;
    font-size:15px;
    font-weight:bolder;
    border-radius:25px;
    cursor:pointer;
    margin-top:20px;
  }
  .image-box{
    height:80px;
    width:200px;
    transform:translateY(30px);
    /* margin-left:90px; */
  }
  @media screen and (max-width:767px){
    .grid-box{
   display:grid;
   grid-template-columns:repeat(1,1fr);
   height:90vh;
  }
  .image-box{
    height:40px;
    width:50px;
    margin-top:-40px;
    transform:translateY(30%);
    margin-left:0px;
  }
  .grid-image img{
      width:400px;
  }
  }
</style>