
<template>
<div class="login-container">
                    <div class="background">
                      
                        <div class="image-container">
                                <router-link to="/"><img src="../images/icons8-worldwide-delivery-50.png"/></router-link> 
                                <span class="tooltip">Back To Home</span>
                                </div>
                        <div class="trendy-head">
                                          <h2>Welcome To <span class="urban">TrendyEra</span></h2>

                                          <div class="form-submit">
                                          <p>Submit the form below to create an account<br/>
                                            <span>Or</span>
                                        </p>
                                           <p class="hit-to-reg">Hit <router-link class="to-register" to="/login">Sign In</router-link> to login your  account</p>
                                         
                                        </div>
                                        </div>
                            <form class="input-content" @submit.prevent novalidate>
                                <div class="top-hidden">hidden</div>
                                    <div class="input-box">
                                        <input class="input-one" type="text"  v-model="name" required/><br/>
                                            <label for="email" class="label-one">Name</label>
                                            <br/>

                                            <input class="input-two" type="text"  v-model="email" required/><br/>
                                            <label for="email" class="label-two">Email</label>
                                            <br/>

                                            <input class="input-three" :type="inputType" v-model="password" required />
                                            <label for="password" class="label-three">Password</label>
                                            <button class="showButton" @click="togglePasswordVisibility">
                                               <img src="../images/icons8-eye-30.png"/>
                                            </button>
                                            <br/>

                                            <input class="input-four" :type="inputConfirm" v-model="confirmPassword" required/>
                                            <label for="passwordConfirm" class="label-four">Confirm Password</label>
                                            <button class="showButton" @click="togglePasswordConfirm">
                                               <img src="../images/icons8-eye-30.png"/>
                                            </button>
                                        </div>

                                        <div class="bottom-box">
                                            <!-- <div class="bottom-hidden">hidden</div> -->
                                            <button @click="Register" class="login">Sign Up</button>
                                        </div>
                            </form> 
                   </div>

                
                   <div v-if="loader" class="preloader">
                         <div class="loader"></div>    
                   </div>
 
                    <div v-if="showError"  class="error-display">
                                 <div class="error">
                                    <div class="message-box">
                                        <img class="danger" src="../images/icons8-danger-64.png"/>
                                        <button class="close" @click="close">
                                            <img src="../images/icons8-close-24.png"/>
                                        </button>
                                    <h1>{{ errMsg }}</h1>
                                    </div>
                                </div>
                   </div>
                
    </div>
</template>


<script>
import Swal from "sweetalert2"
import store from '../store.js'
import {ref,watch} from 'vue'
import{getAuth,createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {useRouter} from 'vue-router'
import{doc,setDoc,collection} from 'firebase/firestore'
import {db} from '@/main.js'
export default {
    name:'RegisterComp',
    setup(){
        const name = ref('')
        const email = ref('')
        const password = ref('')
        const confirmPassword = ref('')
        const showError = ref(false)
        const auth=getAuth()
          const errMsg=ref("")
          const loader = ref(false)
          

        const router = useRouter()


            const showPassword = ref(false);
            const passwordConfirm = ref(false);

            const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
            };

            const inputType = ref('password');
            watch(showPassword, (newValue) => {
            inputType.value = newValue ? 'text' : 'password';
            });

            const togglePasswordConfirm = () => {
            passwordConfirm.value = !passwordConfirm.value;
            };

            const inputConfirm = ref('password');
            watch(passwordConfirm, (newValue) => {
            inputConfirm.value = newValue ? 'text' : 'password';
            });

            const close = ()=>{
                showError.value = false;
            }
        
         const Register = async () =>{

            if(name.value === "" && email.value === "" || password.value === "" && confirmPassword.value === ""){
               Swal.fire("Please Complete The Form")
            }
            else{
                if(confirmPassword.value === password.value){
                    loader.value = true;
                    try {
                    const { user } = await createUserWithEmailAndPassword(auth, email.value, password.value);
                    const createUserCollection = async (user) => {
                                try {
                                    const usersCollection = (collection(db, 'authenticated'));
                                    const userDoc = doc(usersCollection, user.uid);
                                    // Create the user collection document
                                    await setDoc(userDoc, { cart: [], order: [] });
                                    console.log(`User collection created for ${user.uid}`);
                                } catch (error) {
                                    console.error('Error creating user collection:', error);
                                }
                                };

                           
                            
                        onAuthStateChanged(auth,(user) => {
                        if (user) {
                            createUserCollection(user);
                            console.log('collection created')
                            console.log(user)
                            store.commit('setCart',[])
                            router.replace('/products')
                        }else{
                          console.log('failed')
                        }
                        });
                        const userDocRef = doc(db, 'users', user.uid);
                        await setDoc(userDocRef, {
                                    displayName: name.value,
                                    })

                        }
                        
                        
                        catch(error){
    console.log(error.code)
    if (error.code === 'auth/invalid-email') {
        Swal.fire({
        icon: "error",
        title: "Invalid Email",
        });
        } else if (error.code === 'auth/wrong-password') {
            Swal.fire({
        icon: "error",
        title: "Please check your password",
        });
        } else if (error.code === 'auth/user-not-found') {
            Swal.fire({
        icon: "error",
        title: "No User Was Found",
        });
        } else if (error.code === 'auth/email-already-in-use') {
            Swal.fire({
        icon: "error",
        title: "Email Already Exists",
        });
        }
        else if (error.code === 'auth/weak-password') {
            Swal.fire({
        icon: "error",
        title: "Password should be 6 characters or more",
        });
        }
        else {
          (error.code==='auth/network-request-failed')
          showError.value = true;
        errMsg.value='Please check your internet connection'
        }


        setTimeout(()=>{
            loader.value = false
        },1000)

    }
              }else{
                Swal.fire("Passwords don't match");
              }

            }
                 
}                               

       return{
        name,
        email,
        password,
        errMsg,
        showError,
        Register,
        loader,
        passwordConfirm,
        inputType,
        inputConfirm,
        close,
        confirmPassword,
        togglePasswordConfirm,
      togglePasswordVisibility,
       }
}
}
</script>

<style  scoped>
*{
    margin:0px;
    padding:0px;
}
.error-display{
    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100%;
    background:linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75));
    transform:translateY(-100%);
    overflow:hidden;
    transition:opacity 300ms;
    animation-name:errorDisplay;
    animation-fill-mode:forwards;
    animation-duration:0.5s;
    animation-delay:0.5s;
    z-index:1000;
}
@keyframes errorDisplay{
    0%{
       transform:translateY(-100%);
    }
    100%{
        transform:translateY(0px);
    }
}
.bottom-hidden{
    height:50px;
    opacity:0;
}
.top-hidden{
    height:50px;
    opacity:0;
}
.preloader{
position:absolute;
 top:60%;
 left:50%;
 transform:translate(-50%,-50%);
 border-radius:10px;
 height:50px;
 width:50px;
 background:linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75));
}

.loader {
  /* Add styles for your loading animation */
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  position:absolute;
    top:20%;
   left:20%;
 transform:translate(-50%,-50%);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.background{
    background-color:#ffffff;
    color:black;
    height:100vh;
    width:100%;
}
.tooltip {
    visibility: hidden;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    font-size:10px;
    z-index: 1;
    bottom: 100%;
    left: 52%;
    transform: translateX(-50%);
    transition: 0.5s ease-in;
    white-space: nowrap;
  }
  .tooltip::before{
    content:"";
    position:absolute;
    left:40%;
    top:90%;
    transform:translateX(-50%);
     border:13px solid;
     border-color:#000 #0000 #0000 #0000;
}

  .image-container:hover .tooltip {
    visibility: visible;
    bottom: 110%;
  }

  .image-container{
    position:absolute;
    top:10%;
    left:50%;
    width:90px;
    transform:translate(-50%,-50%);
}
.urban{
    color:red;
}
.trendy-head{
    position:absolute;
    top:25%;
    left:50%;
    transform:translate(-50%,-50%);
}
.trendy-head h2{
    font-size:40px;
}

.hit-to-reg{
    margin-left:80px;
}
.to-register{
    text-decoration:underline;
    color:black;
    font-weight:bolder;
}
.to-register:hover{
    text-decoration:none;
}
.form-submit{
    /* border:1px solid black; */
    font-size:18px;
    margin-top:20px;
}
.form-submit span{
    display:flex;
    justify-content:center;
    align-items:center;
}

.image-container img{
    width:70px;
    /* z-index:4; */
}
.image-container img:hover{
    cursor:pointer;
}
.error{
    background:#ffffff;
    padding:20px;
   margin-top:10px;
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   border-radius:5px;
}
.close{
    background:transparent;
    border:none;
    position:absolute;
    left:90%;
    top:10%;
}
.close img{
    width:20px;
}
.danger{
    width:30px;
}


.message-box{
    /* border:1px solid black; */
    width:100%;
    text-align:center;
    padding:10px;
    border-radius:10px;
    margin-top:10px;
    background:transparent;
   
}
.message-box h1{
    /* text-align:center; */
    color:black;
    font-weight:bolder;
    font-size:17px;
    /* border:1px solid black; */
}
.route{
    text-decoration:none;
    color:#0077b6;
    font-size:18px;
}
.route:hover{
    text-decoration:underline;
}
.head{
    /* border:1px solid black; */
    position:relative;
    margin-top:30px;
    top:16%;
}
h1{
    text-align:center;
    color:black;
}
.reg{
    text-decoration:underline;
    color:black;
    margin-left:10px;
}
h2{
    color:black;
    font-size:18px;
    margin-top:20px;
}
.login{
    padding:10px;
    background-color:red;
    font-size:18px;
    text-align:center;
    border-radius:8px;
    /* background:transparent; */
    /* border-radius:5px; */
    border:none;
    color:white;
    font-weight:bold;
    width:86%;
    margin-top:-30px;
  
}
.login:hover{
    cursor:pointer;
}
.input-box{
    /* border:1px solid black; */
    position:relative;
    top:16%;
}
.label-one{
    letter-spacing:2px;
    color:black;
    position:absolute;
    top:5%;
    left:8%;
    font-size:16px;
    /* pointer-events:none; */
    transition: 0.6s ease;
}
.label-two{
    letter-spacing:2px;
    color:black;
    position:absolute;
    top:30%;
    left:8%;
    font-size:16px;
    /* pointer-events:none; */
    transition: 0.6s ease;
}
.label-three{
    letter-spacing:2px;
    color:black;
    position:absolute;
    top:60%;
    left:8%;
    font-size:16px;
    /* pointer-events:none; */
    transition: 0.6s ease;
}
.label-four{
    letter-spacing:2px;
    color:black;
    position:absolute;
    top:90%;
    left:8%;
    font-size:16px;
    /* pointer-events:none; */
    transition: 0.6s ease;
}
.input-one:focus~.label-one,
.input-one:valid~.label-one{
    top:-20px;
    font-size:13px;
}
.input-two:focus~.label-two,
.input-two:valid~.label-two{
    top:40px;
    font-size:13px;
}
.input-three:focus~.label-three,
.input-three:valid~.label-three{
    top:110px;
    font-size:13px;
}
.input-four:focus~.label-four,
.input-four:valid~.label-four{
    top:175px;
    font-size:13px;
}

.showButton{
    background:transparent;
    cursor:pointer;
    border:none;
}
.showButton img{
    width:20px;
}
.showButton:active{
    transform:scale(0.9);
}
.bottom-box{
      margin-top:30px;
}
input[type="text"]{
    padding:10px;
    color:black;
    background:transparent;
    border:none;
    outline:none;
    appearance: none;
    border-bottom:1px solid #e1e1e1;
    width:80%;
}
input::placeholder{
    color:black;
    font-size:15px;
    opacity:1;
}
.input-three{
    margin-top:10px;
    color:black;
    background:transparent;
    border:none;
    outline:none;
    appearance: none;
    border-bottom:1px solid #e1e1e1;
    padding:10px;
    width:80%;
}
.input-four{
    margin-top:30px;
    color:black;
    background:transparent;
    border:none;
    outline:none;
    appearance: none;
    border-bottom:1px solid #e1e1e1;
    padding:10px;
    width:80%;
}
.input-content{
    font-family:'Poppins',sans-serif;
    /* border:1px solid black; */
    position:absolute;
    top:52%;
    left:50%;
    transform:translate(-50%,-50%);
    background:transparent;
    text-align:center;
    width: 400px;
    font-weight:bolder;
    overflow: hidden;
    margin-top:100px;
}

@media screen and (max-width:767px){
    .trendy-head{
    position:absolute;
    top:30%;
    left:50%;
    transform:translate(-50%,-50%);
    /* border:1px solid black; */
    width:100%;
    text-align:center;
}
    .trendy-head h2{
        font-size:30px;
        text-align:center;
        
    }
    h2{
    margin-top:10px;
}
.hit-to-reg{
    margin-left:10px;
}
    .input-content{
        font-family:'Poppins',sans-serif;
    border:1px solid white;
    position:absolute;
    top:50%;
    left:39%;
    transform:translate(-50%,-50%);
    background:transparent;
    text-align:center;
    width: 330px;
    font-weight:bolder;
    margin-left:40px;
    overflow: hidden;
    margin-top:135px;
    }
    input[type="text"]{
    outline:none;
    appearance: none;

}

input[type="password"]{
    outline:none;
    appearance: none;
}
    .image-container{
        position:absolute;
    top:10%;
    left:47%;
    width:60px;
    /* z-index:5; */
    display: inline-block;
}
    .label-one{
    letter-spacing:2px;
    color:black;
    position:absolute;
    top:6%;
    left:10%;
    font-size:16px;
    /* pointer-events:none; */
    transition: 0.6s ease;
}
.label-two{
    letter-spacing:2px;
    color:black;
    position:absolute;
    top:30%;
    left:10%;
    font-size:16px;
    /* pointer-events:none; */
    transition: 0.6s ease;
}
.label-three{
    letter-spacing:2px;
    color:black;
    position:absolute;
    top:60%;
    left:10%;
    font-size:16px;
    /* pointer-events:none; */
    transition: 0.6s ease;
}
.error{
    position:absolute;
    top:93%;
    left:50%;
    z-index:100;
    width:100%;
}
.preloader{
    position:absolute;
 top:60%;
 left:50%;
 transform:translate(-50%,-50%);
 height:50px;
 width:50px;

    }
.message-box{
    width:100%;
    background:transparent;
    transform:translate(-50%,-50%);
    z-index:100;
}
.message-box h1{
    color:red;
    font-weight:bolder;
    font-size:17px;
}
    
}


</style>
