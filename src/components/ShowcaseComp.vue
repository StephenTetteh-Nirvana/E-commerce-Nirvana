<template>
<div class="container-box">
     <div class="showcase">
      <div class="text-box">
        <h1>Creamy Shirt</h1>
        <h2>50% OFF</h2>
        <button>Grab Now</button>
      </div>
      <div class="image-box">
        <!-- <select>
            <option>laptops</option>
            <option>sneakers</option>
            <option>women clothes</option>
        </select> -->
      </div>
    </div>
</div>
         
<!-- </div> -->



</template>

<script>
 export default{
      name:'ShowcaseComp'
 }
</script>

<style scoped>
.showcase{
    height:80vh;
    display:grid;
    margin-top:80px;
    grid-template-columns:1fr 1fr;
   
}
.image-box{
  background-image:url(../images/black-shirt.png);
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
  height: 80vh;
  position:relative;
  right:-100%;
     animation-name: slidein;
    animation-duration:2s;
    animation-fill-mode:forwards;
    transition:all 0.5s ease-in-out;
}
.text-box{
  position:relative;
  top:40%;
  left:15%;
  opacity:0;
    animation-name:fade;
    animation-duration:2s;
    animation-delay:2s;
    animation-fill-mode:forwards;
    transition:all 0.5s ease-in-out;
}
.text-box h1{
  font-size:60px;
  font-weight:bolder;
}
.text-box button{
  padding:1rem 2.5rem;
  font-size:25px;
  margin-top:20px;
  letter-spacing:2px;
  color:white;
  background-color:orangered;
  border:1px solid orangered;
  border-radius: 10px;
}

@keyframes slidein{
    0%{right:-100%}
    100%{right:3%}
}
@keyframes fade{
  0%{opacity:0}
  100%{opacity:1}
}



@media screen and (max-width:767px){
  .showcase{
    height:85vh;
  }
  .text-box{
  position:relative;
  top:40%;
  left:10%;
  opacity:0;
  z-index:10;
    animation-name:fade;
    animation-duration:1s;
    animation-delay:1s;
    animation-fill-mode:forwards;
    transition:all 0.5s ease-in-out;
}
.text-box h2{
  font-size:18px;
}
.text-box h1{
  font-size:25px;
  font-weight:bolder;
}
.text-box button{
  padding:10px 20px;
  font-size:15px;
  margin-top:20px;
  /* margin-left:20px; */
  letter-spacing:2px;
  color:white;
  background-color:orangered;
  border:1px solid orangered;
  border-radius: 10px;
}
    
}

</style>