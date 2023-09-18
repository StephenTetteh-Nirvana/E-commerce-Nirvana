<template>
    <div class="container">
        <div class="grid-box">

            <div class="mother">
              <div class="text-box">
                  <h1>Promotions Ongoing</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, perspiciatis! Delectus minus, maiores quidem consequatur adipisci excepturi id ea quibusdam.</p>
                  <router-link to="/products"><button>Grab A Piece</button></router-link>
              </div>
            </div>

             <div class="image-box">
                <div class="grid-image">
                    
                </div>
             </div>
        </div>
        <div class="hidden">hidden</div>
    </div>
</template>

<script>
    export default {
        name:'LandingImg',   
   }
</script>

<style scoped>
 
.grid-box{
   display:grid;
   grid-template-columns:repeat(2,1fr);
  }
  .hidden{
    opacity:0;
    height:250px;
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
    margin-top:-30px;
    /* margin-left:40px; */
  }
  .grid-image{
    background-image:url(../images/lance-reis-DQnYSjNO_II-unsplash.jpg);
    background-size:cover;
    background-position:center;
    background-repeat:none;
    width:650px;
    height:400px;
  }

  @media screen and (max-width:767px){
    .grid-box{
   display:grid;
   grid-template-columns:repeat(1,1fr);
   margin-left:10px;
  }
  .grid-image{
    order:1;
    width:350px;
    height:250px;
  }
  .image-box{
    margin-top:30px;
    margin-left:20px;
    width:80%;
  }
  .hidden{
    opacity:0;
    height:80px;
  }

  .mother{
 margin-top:50%;
    order:2;
    margin-left: -40px;
  }
  } 
</style>