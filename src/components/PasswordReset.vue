<template>
    <div class="container">
        <form @submit.prevent="reset">
            <h1>{{ errMsg }}</h1>
          <h1>Password Reset</h1>
          <p>Enter the email address associated with your account and we will send u an e-mail to reset ur password</p>
          <input type="text" placeholder="Enter a valid email address" v-model="email" required/><br/>
          <button type="submit">Send Password Reset Link</button><br/>
          <h4>Remember Your Password? <router-link to="/login">Login</router-link></h4>
        </form>
    </div>

    <div v-if="loader" class="preloader">
                         <div class="loader"></div>    
                   </div>
   
</template>

<script>
import Swal from 'sweetalert2'
import { getAuth,sendPasswordResetEmail } from 'firebase/auth'
import {ref} from 'vue'

export default {
    name:'PasswordReset',
    setup() {

        const email = ref("")
        const auth = getAuth()
        const errMsg = ref ("")
        const loader = ref(false)

        const reset = async () => {
            try {
                loader.value = true;
        await sendPasswordResetEmail(auth, email.value);
        Swal.fire({
        icon: "success",
        title: "Email sent. Check your inbox.",
        });
        loader.value = false;
        email.value = ""
      } catch (error) {
        loader.value = false;
        if(error.code == 'auth/network-request-failed'){
            Swal.fire({
        icon: "error",
        title: "No Internet Connection",
        });

        }else if(error.code == 'auth/invalid-email'){
            Swal.fire({
        icon: "error",
        title: "Invalid Email",
        });

        }else if(error.code == 'auth/user-not-found'){
            Swal.fire({
        icon: "error",
        title: "No User Found",
        });

    }else if(error.code == 'auth/user-disabled'){
            Swal.fire({
        icon: "error",
        title: "This account is disabled",
        });
    }else if(error.code == 'auth/missing-email'){
            Swal.fire({
        icon: "error",
        title: "No Email Found",
        });
    }
        else{
            console.log(error.code)
        }
       
     

      }
    }
        return{
            email,
            reset,
            errMsg,
            loader
        }
        
    }
}
   

</script>

<style scoped>
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow:hidden;
    margin-left:35%;
}
form p{
    width:50%;
}
form h4{
    margin-top:10px;
}
input[type="text"]{
    padding:10px 70px;
    margin-top:20px;
    padding-left:10px;
}
form button{
    padding:10px 30px;
    font-weight:bold;
    background:green;
    border:none;
    border-radius:5px;
    color:white;
    font-size:15px;
    cursor:pointer;
    margin-top:20px;
}
.preloader{
position:absolute;
 top:53%;
 left:47%;
 transform:translate(-53%,-47%);
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

</style>
