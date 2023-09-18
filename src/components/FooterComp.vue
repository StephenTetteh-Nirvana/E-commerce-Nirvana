<template>
    <div class="button-container">
           <div v-if="noSubscribe" class="button-content">
            <h1>Subscribe</h1>
            <p>Get The Latest News On Product Releases, Availabilty, And Events</p>
            <input type="text" placeholder="Please enter your email here" v-model="email"/>
            <button @click="subscribe">Subscribe</button>
           </div>
           <div v-if="noUser" class="noUser">
            <router-link class="router" to="/register"><h3>Create One</h3></router-link>
           </div>

           <div v-if="Subscribe" class="button-content-subscribe">
                    <!-- <div class="sub-1">
                        <h2>Thank You! 
                            <span>
                                <img class="love" src="../images/icons8-love-48.png"/>
                            </span>
                        </h2>
                    </div> -->

                <div class="sub-2">
                    <h2>Thank You!</h2>
                        <h2>You Are Officially A Subscriber</h2>
                    <img class="thumbs-up" src="../images/icons8-thumbs-up-48.png"/>
                    <p>Get The Latest News On Product Releases, Availabilty, And Events</p>
                </div>

            </div>
           <div v-if="noUser" class="noUser">
            <router-link class="router" to="/register"><h3>Create One</h3></router-link>
           </div>


           <div class="hidden">hidden</div>
        </div>
</template>

<script>
import Swal from 'sweetalert2'
import { onAuthStateChanged,getAuth } from 'firebase/auth'
import {ref} from 'vue'
    export default {
        name:'FooterComp',

        setup(){
            const noUser = ref(false)
            const email = ref('')
            const noSubscribe = ref(true)
            const Subscribe = ref(false)
            const auth = getAuth()
            const subscribe = () => {
                  onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        Swal.fire({
                        icon: 'error',
                        title: 'Sorry...',
                        text: 'You need an account for this!'
                        })
                        .then(()=>{
                            noUser.value=true;
                            email.value = "";
                            setTimeout(()=>{
                                noUser.value=false;
                            },2000)
                        })
                    }else if(email.value === ''){
                        Swal.fire(
                            'Oops..!',
                            'Please enter your email address!',
                            'error'
                            )
                  }
                    else if(email.value != ''){
                        Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thanks for your subscription',
                        showConfirmButton: false,
                        timer: 1000
                        })
                        .then(()=>{
                            Subscribe.value = true;
                            noSubscribe.value = false;
                             email.value = " ";
                        })
                    
                    }
                })
            }

            return{
                subscribe,
                email,
                noUser,
                noSubscribe,
                Subscribe
            }
        }
    }
</script>

<style scoped>
.button-container{
    background-color:#1d1d1d;
    color:white;
}
.hidden{
    opacity:0;
    height:40px;
}
.love{
    width:30px;
}
.noUser{
    text-align:center;
    transform:translateY(20px);
    font-size:12px;
    font-weight:lighter;
}
.router{
    color:white;
    text-decoration:underline;

}
.button-content{
    text-align:center;
}
.button-content-subscribe{
    text-align:center;
} 
.sub-2{
    font-style:italic; 
    margin-top:30px;
}
.thumbs-up{
    width:50px;
}
input[type="text"]{
    padding-left:5px;
    width:25%;
    padding:10px;
    border-radius:7px;
    border:none;
    text-align:left;
    font-weight:bolder;
    color:black;
    margin-top:10px;
    margin-left:40px;
}
input:focus{
  border:none;
  outline:none;
  appearance:none;
}
input::placeholder{
  font-weight:bolder;
  left:10px;
}
button{
    background-color:red;
    color:white;
    border:none;
    font-weight:bolder;
    padding:10px 20px;
    border-radius:8px;
    margin-left:10px;
    cursor:pointer;
}
.button-content h1{
    font-size:20px;
    font-family:Poppins,"sans-serif";
    margin-left:30px;
}
.button-content p{
    font-size:12px;
    margin-top:10px;
    letter-spacing:1px;
}

@media screen and (max-width:768px){
    .button-container{
        margin-top:0px;
    }
    .button-content p{
        font-size:10px;
        margin-top:10px;
        letter-spacing:1px;
    }
    input[type="text"]{
        padding-left:5px;
        width:40%;
        padding:10px;
        border-radius:7px;
        border:none;
        text-align:left;
        font-weight:bolder;
        color:black;
        margin-top:15px;
        margin-left:10px;
    }
    input::placeholder{
  font-weight:bolder;
  font-size:12px;
  left:10px;
}
}

</style>