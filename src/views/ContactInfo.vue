<template>
   <div class="container">
            <div class="parent-box">
                    <div class="image-container">
                        <img src="../images/3945014.jpg"/>
                        <h1>Thank You For Contacting Us</h1>
                        <p>We have received your messege</p>
                        <p>We'll reach out to you shortly!</p>
                    </div>
                    <div class="button-box">
                        <router-link class="route-1" to="/"><button class="button-1">Back To HomePage</button></router-link>
                       <router-link class="route-2" to="about"> <button class="button-2">Read More About Us</button></router-link>
                    </div>

                    <!-- <div class="image-box">
                        <h1>Follow Our Socials</h1>
                        <img src="../images/facebook-1.png"/>
                        <img src="../images/twitter-2.png"/>
                        <img src="../images/instagram-1.png"/>
                    </div> -->
            </div>
   </div>
</template>

<script>

export default {
    name:'ContactInfo'
}
</script>

<style scoped>
.parent-box{
    /* border:1px solid black; */
    border-radius:16px;
   position:absolute;
   top: 50%;
   left:50%;
   box-shadow:10px 10px 10px 10px rgb(211, 201, 201);
   transform: translate(-50%,-50%);
   height:60%;
}
.image-container{
    text-align:center;
}
.image-container p{
    font-weight:lighter;
    font-size:18px;
}
.image-container h1{
    font-weight:bolder;
}
.button-box{
    text-align:center;
    margin-top:10px;
}
.button-1{
     padding:10px 10px;
     border-radius:10px;
     color:black;
     background:transparent;
     border:1px solid black;
}
.button-1:hover{
     background-color:#0077b6;
     color:white;
     cursor:pointer;
     border:none;
}
.button-2:hover{
     background-color:orangered;
     color:white;
     cursor:pointer;
     border:none;
}
.button-2{
     padding:10px 10px;
     margin-left:20px;
     border-radius:10px;
     color:black;
     background:transparent;
     border:1px solid black;
}
.route-1,.route-2{
    /* color:white; */
    text-decoration:none;
}
.route-1:hover{
       color:white;
}
.route-2:hover{
       color:white;
}
.image-box{
    text-align:center;
    margin-top:10px;
}
.image-box img{
   width:30px;
   margin-top:10px;
   margin-left:10px;
}
.image-box p{
    font-size:16px;
    font-weight:bold;
    margin-top:10px;
}
.image-box img:hover{
    cursor:pointer;
}
img{
    width:60%;
    height:100%;
}
@media screen and (max-width:767px){
    .parent-box{
        width:90%;
    }
    .image-container h1{
        font-size:20px;
    font-weight:bolder;
}
}
</style>
