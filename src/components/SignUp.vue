<template>
    <div class="container">
        <div class="ready-box">
            <h1>Let's Get Started</h1>
            <router-link to="/register">
                <button class="sign-up">Sign Up</button>
            </router-link>
        </div>
        <div class="hidden">hidd</div>
    </div>
</template>

<script>
    export default {
        name:'SignUp'
    }
</script>

<style scoped>
.hidden{
    opacity:0;
    height:50px;
}
.container{
    height:70vh;
    background-color:black;
    background-image:linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(../images/cover-photo.jpg);
    background-repeat:none;
    background-position:center;
    background-size:cover;
    display:flex;
    justify-content: center;
    align-items:center;
}
.ready-box{
    color:white;
    text-align:center;
    transition:all 0.5s ease;
}

.sign-up{
    padding:10px 50px;
    border-radius:25px;
    background-color:orangered;
    color:white;
    border:none;
    font-size:20px;
    cursor:pointer;
    letter-spacing:1px;
    font-weight:bolder;
}
.ready-box h1{
    font-size:70px;
}
.sign-up:active{
    transform:scale(0.9);

}
@media screen and (max-width:767px){
    .ready-box h1{
    font-size:35px;
}
.ready-box{
    color:white;
    text-align:center;
    transition:all 0.5s ease;
}
.sign-up{
    font-size:17px;
}
}
</style>