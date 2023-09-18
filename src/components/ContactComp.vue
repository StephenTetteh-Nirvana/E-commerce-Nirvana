<template>
<div class="container-box">
    
    <div class="container-1">
            <div class="img">
                <div class="image-text">
                <h1 class="center-text">Let's Talk</h1>
                <h2>Ask us anything,and we will respond immediately</h2>
               </div>
           </div>
    </div>
 
</div>
    </template>
    

<script>


export default {
  name: "ContactComp",

   
    }
</script>

<style scoped>
.container-1{
    height:70vh;
    font-weight:lighter;
}
.image-text{
    position:absolute;
    top:50%;
    left:50%;
    text-align:center;
    transform:translate(-50%,-50%);
color:white;
}
.center-text{
color:white;
    font-size:70px;
}
.image-text h2{
    font-size:18px;
    font-weight:lighter;
}
.img{
    background-image:linear-gradient(rgba(48, 47, 47, 0.75),rgba(7, 3, 3, 0.75)),url(../images/busy-woman-doing-many-things-same-time.jpg);
    background-repeat:no-repeat;
    background-size: cover;
    width:100%;
    height:100%;
}




@media screen and (max-width:767px){
  
    .container-1{
        height:90vh;
    }
    .img{
    background-image:linear-gradient(rgba(48, 47, 47, 0.75),rgba(7, 3, 3, 0.75)),url(../images/busy-woman-doing-many-things-same-time.jpg);
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center;
    width:100%;
    height:100%;
}







}
</style>