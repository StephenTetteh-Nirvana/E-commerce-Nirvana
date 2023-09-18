<template>
    <div class="container">
        <div class="mother-grid">
            <div class="image-grid-area">
               <div class="image-content">
                <router-link to="/products">
                    <button class="back">
                        Go Shopping
                    </button>
                </router-link>
               </div>
            </div>
                   
                <div class="flex">
                    <h1>Account Information</h1>

                    <div v-if="noUser" class="no-user-box">
                    <img class="user-icon" src="../images/icons8-user-50.png"/>
                    <ul class="no-user-ul">
                    <router-link to="/login"><li class="no-user-log">Login/</li></router-link>
                    <router-link to="/register"><li class="no-user-reg">Register</li></router-link>
                    </ul>
                   </div>

                    <div v-if="User" class="content-grid-area">
                        <img class="user-icon" src="../images/icons8-user-50.png"/>
                            <ul class="user-ul">
                            <li class="user-log">Name:</li>
                            <li class="user-reg">Email:</li>
                            </ul>
                    </div>

                    
                </div>
                   
         </div>
         
    </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import { onAuthStateChanged,getAuth } from 'firebase/auth'
    export default {
          name:"UserComp",
          setup(){
              const User = ref(false)
              const noUser = ref(false)
              const auth = getAuth();

               onMounted(()=>{
                onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        noUser.value = true;
                    }
                    else{
                        User.value = true;
                    }

                })
               })

              return{
                User,
                noUser
              }
          }
    }
</script>

<style scoped>

.container{
    height:100vh;
}
.footer{
   display:none;
}
.mother-grid{
    display:grid;
    grid-template-columns:2fr 1fr;
}
.image-content{
    background-image:url(../images/lance-reis-DQnYSjNO_II-unsplash.jpg);
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    height:100vh;
}
button{
    background:transparent;
    border:none;
    color:white;
    margin-left:30px;
    margin-top:20px;
    font-size:30px;
    letter-spacing:1px;
    text-decoration:underline;
}
button:hover{
    text-decoration:none;
    cursor:pointer;
}

.flex{
    background-color:#ffffff;
    margin-top:70%;
    margin-left:60px;

}
.user-icon{
    width:50px;
    text-align:center;
}
.no-user-ul{
    margin-top:10px;
    margin-left:10px;
}
.no-user-log,.no-user-reg{
    display:inline-block;
    font-size:18px;
}
.user-ul{
    margin-top:10px;
    margin-left:10px;
}
.user-log,.user-reg{
    display:block;
    font-size:18px;
}
.content-grid-area{
    display:flex;
    margin-top:10px;
}
.no-user-box{
    display:flex;
    margin-top:20px;
}


@media screen and (max-width:767px){
    .mother-grid{
    display:grid;
    grid-template-columns:1fr;
}

.image-content{
    height:80vh;
}
.flex{
    background-color:#ffffff;
    margin-top:10px;
    margin-left:40px;
    border-radius:20px 20px;

}
button{
    font-size:17px;
    text-decoration:none;
}
}


</style>