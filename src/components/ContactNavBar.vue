<template>
    <div class="container">
                     <div class="image-container">
                         <img src="../images/icons8-worldwide-delivery-50.png">
                         <h4 class="urban">TrendyEra</h4>
                     </div>
 
                     <div class="hamburger-box"> 
                         <button @click="onClick">
                            <img class="menu" src="../images/icons8-menu-30.png"/>
                        </button>
                     </div>
 
                     <transition name="slide">
                     <div v-if="showSidebar" class="sidebar">
                         <div>
                             <button class="close" @click="close">
                                 <img  src="../images/icons8-close-24.png"/>
                             </button>
                         </div>
 
                         <div v-if="logIn" class="user-account-2">
                            <img class="sidebar-user" src="../images/icons8-user-32.png"/>
                            <br/>
                            <h2 class="sidebar-username">Hi,{{ userName }}</h2>

                            <div class="sidebar-account-section">
                                <div class="sidebar-gridbox1">
                                    <img class="account-section-img1" src="../images/icons8-about-50.png"/>
                                   <router-link class="sidebar-route" to="/about"><h3>About</h3></router-link>
                                </div>
                                <div class="sidebar-gridbox2">
                                    <img class="account-section-img1" src="../images/icons8-order-64.png"/>
                                    <router-link class="sidebar-route" to="/orders"><h3>Orders</h3></router-link>
                                </div>
                            </div>
                            <button class="logout" @click="logout">Sign Out</button>
                            <footer>
                        <h4>CopyRight &copy; 2023</h4>
                       </footer>
                       </div>
 
 
                       <div v-if="logOut" class="no-user-acc">
                        <div class="no-user-navs">
                                    <div class="no-user-grid1">
                                        <router-link to="/login">
                                            <button class="nav-button">Sign In</button>
                                        </router-link>
                                    </div>
                                
                                    <div class="no-user-grid2">
                                        <router-link to="/register">
                                            <button class="no-user-login">Sign Up</button>
                                        </router-link>
                                    </div>
                               </div>

                            <div class="no-user-danger">
                                <img class="sidebar-danger" src="../images/icons8-danger-64.png"/>
                                <p>You need to login or register with an account to display user information.</p>
                                <footer class="no-user-footer">
                                <h4>CopyRight &copy; 2023</h4>
                                </footer>

                            </div> 
                       </div>
 
                     </div>
                     </transition>
 
 
                 <div v-if="logOut" class="search-section">
                 <div class="nav-area">
                     <router-link class="route-1" to="/register"><button class="nav-button">Sign Up</button></router-link>
                 <router-link class="route-2" to="/login"> <button class="login">Log In</button></router-link>
                 <router-link class="route-2" to="/contact">
                     <h4>Need Help?</h4></router-link>
                 </div>
                 <div class="account-section">
                     <img class="no-user-account" src="../images/icons8-user-32.png"/>
                     <img class="no-user-cart" src="../images/icons8-cart-64.png"/>
 
                         <span class="hidden">There is no account yet! <router-link class="no-account-register" to="/register">Sign Up</router-link></span>
                  </div>
                 </div>
 
                 <div v-if="logIn" class="search-section-2">
                     <div class="links">

                        <div class="home-hover">
                            <img class="user-home-icon" src="../images/icons8-sort-down-50.png"/>
                            <span class="user-home-text">Help Center</span>
                        </div>
                         
                             <ul class="navs">
                                 <router-link class="routes" to="/">
                                     <li>
                                         <!-- <img class="user-home-icon" src="../images/icons8-home-32.png"> -->
                                         <span>Home</span>
                                     </li>
                                 </router-link>
                                 <router-link class="routes" to="/about">
                                     <li>
                                         <!-- <img class="cart" src="../images/icons8-about-50.png"/> -->
                                         <span>About</span>
                                     </li>
                                 </router-link>
                                 <router-link class="routes" to="/products">
                                     <li>
                                         <!-- <img class="cart" src="../images/icons8-categories-64.png"/> -->
                                         <span>Products</span>
                                     </li>
                                 </router-link>
                                 <router-link class="routes" to="/orders">
                                     <li>
                                         <!-- <img class="cart" src="../images/icons8-order-64.png"/> -->
                                         <span>Orders</span>
                                     </li>
                                 </router-link>
                             </ul>
                     </div>
 
                    
                     <div v-if="check" class="loding-to-check">
                         <h3>Checking</h3>
                         </div>
                     <div class="user-account">
                         <router-link to="/checkout">
                             <button class="cart-button">
                             <img class="user-cart" src="../images/icons8-cart-64.png"/>
                            <span class="cart-count">{{ cartCount }}</span> 
                             </button>
                         </router-link>
                     
                             <button class="user-button">
                             <img class="user" src="../images/icons8-user-32.png"/>
                             <span class="userName">Hi,{{ userName}}</span>
                             </button>
                
                         <button @click="logout" class="logout">Sign Out</button>
                     </div>
 
 
                 </div>
 
                     <div  class="section-4">
                         <router-link to="/checkout">
                             <button class="cart-button">
                             <img class="user-cart" src="../images/icons8-cart-64.png"/>
                            <span class="cart-count">{{ cartCount }}</span> 
                             </button>
                         </router-link>
                     </div>
                         
                 </div>
                 
                 <div class="bottom-container">
             <div class="bottom-child">
                 <div class="home-bottom">
                 <router-link to="/">
                     <button class="bottom-home-button">
                     <img class="cart" src="../images/icons8-home-32.png"/><br/>
                     <h5>Home</h5>
                    </button>
                 </router-link>
                 </div>
 
                 <div class="categories-bottom">
                 <router-link to="/products">
                     <button class="bottom-categories-button">
                     <img class="cart-home" src="../images/icons8-categories-64.png"/><br/>
                     <h5>Products</h5>
                 </button>
                 </router-link>
                 </div>
 
                 <div class="contact-bottom">
                 <router-link to="/contact">
                     <button class="bottom-contact-button">
                     <img class="cart" src="../images/red-contact.png"/><br/>
                     <h5>Help Center</h5>
                 </button>
                 </router-link>
                 </div>
 
                 <div class="account-bottom">
                     <button @click="onClick" class="bottom-account-button">
                     <img class="cart" src="../images/icons8-user-32.png"/><br/>
                     <h5>Account</h5>
                 </button>
                 </div>
             </div>
     </div>
 
 </template>
 
 <script>
     import store from '../store.js';
 import{computed,ref,onMounted} from 'vue'
 import{getAuth,signOut,onAuthStateChanged} from 'firebase/auth'
 import{getDoc,doc,updateDoc} from 'firebase/firestore'
 import {db} from '@/main.js'
 import {useRouter} from 'vue-router'
 
 export default {
   name: "ContactNavBar",
 
  
     setup(){
             const router = useRouter()
             const auth = getAuth()
 
              const cartCount = computed(() => store.state.cart.length);
              console.log(cartCount)
              
 
 
   const logIn = ref (false)
   const logOut = ref (false)
   const check = ref(false)
     const showSidebar = ref (false)
 
     onMounted(()=>{
            checking();
       })
 
     const checking = () => {
         check.value = true;
            onAuthStateChanged(auth,(user)=>{
          if(user){
             check.value =false;
             logIn.value = true
            
         }else{ 
             check.value =false;
             logOut.value = true
            
         }
             })
 
     }
 
     const onClick = () =>{
         showSidebar.value = !showSidebar.value;
     }
     const close = () =>{
         showSidebar.value = false;
     }
                          
 
              
               //Function That displays the name of the authenticated user
                const userName = ref('');
     
     async function fetchDisplayName(uid){
       try {
         const userDocRef = doc(db, 'users', uid);
         const userDoc = await getDoc(userDocRef);
         if (userDoc.exists()) {
           const user = userDoc.data();
           userName.value = user.displayName;
         }
       } catch (error) {
         console.log('Error fetching display name:', error.message);
       }
     }
      onAuthStateChanged(auth, (user) => {
       if (user) {
         const uid = user.uid;
         fetchDisplayName(uid);
       } else {
         userName.value = '';
         console.log('no user')
       }
    
     });
 
                // FUNCTION THAT LOGS OUT THE USER
 
              async function logout(){
                 const user = auth.currentUser
     const userId = user.uid
     const userRef = doc(db, 'authenticated', userId);
     await updateDoc(userRef, {
   cart: []
     })
                             signOut(auth)
                             .then(()=>{
                                 store.commit('setCart',[])
                                 console.log('User Logged Out')
                                 router.replace('/login')
                             })
                             .catch((err)=>{
                                 alert(err)
                             })
                         }
 
                         return{
                             logout,
                             logIn,
                             logOut,
                             cartCount,
                             check,
                             userName,
                             showSidebar,
                             close,
                             onClick
                            
                             
                         }
         }
     }
 </script>
 
 <style scoped>
 *{    margin:0;
     padding:0;
 }
 .urban{
     font-family: 'ADLaM Display', sans-serif;
     font-size:40px;
     color:red;
     transform:translateY(10px);
     margin-left:10px;
 }
 .search-section{
     margin-top:30px;
     margin-right:8%;
     display:flex;
     height:40px;
     text-align:center;
 }
 .no-user-cart{
     width:30px;
     margin-left:15px;
     cursor:pointer;
 }
 .account-section{
  transform:translateX(40px);
 }
 .no-user-account{
     width:35px;
 }
 
 .nav-area{
     display:flex;
     align-items:center;
 }
 .hidden{
     padding:10px;
     background-color:#ffffff;
     visibility:hidden;
     border:1px solid black;
     position:absolute;
     top:0px;
     z-index:1;
     opacity:0;
     left:-150px;
     border-radius:18px;
     color:black;
     width:300px;
     transition:0.5s all ease;
 }
 .account-section:hover .hidden{
     opacity:1;
     top:70px;
    visibility:visible;
 }
 .no-account-register{
     color:red;
     text-decoration:none;
 }
 .nav-area h4{
     margin-left:20px;
 }
 .user{
     width:35px;
     margin-left:20px;
 }
 .user-cart{
     width:35px;
 }
 .cart{
     width:25px;
 }
 .userName{
     color:#191919;
     font-weight:bold;
     font-size:15px;
     letter-spacing:2px;
 
 }
 .user-home-icon{
    width:20px;
     transform:translateY(5px);
}

.user-home-text{
    margin-left:5px;
    font-weight:bold;
    font-size:20px;
    /* border:1px solid black; */
    cursor:pointer;
  
}
 .links{
    border-right:1px solid grey;
    width:170px;
    transition:all 0.5s ease-in-out;
    position:relative;
}
.links:hover .navs{
    visibility:visible;
    opacity:1;
    top:40px;
}
.links:hover .user-home-icon{
    transform:rotate(180deg);
    transition:transform 300ms ease-in-out;
}
.turn-leave-to{
    transform:rotate(0deg);
}
.navs{
    visibility:hidden;
    opacity:0;
    background-color:#ffffff;
   padding:10px;
   position:absolute;
   top:-80px;
    width:120px;
    transition: top 500ms,opacity 500ms;
}
.navs li{
    text-decoration:none;
    /* border-bottom:1px solid grey; */
    margin-top:10px;
    color:black;
    list-style:none;
    width:100%;
}
.navs li:hover{
     color:red;
}
.navs span{
    margin-left:10px;
}
 .routes{
     text-decoration:none;
 }
 .user-account{
    margin-left:10px;
    display:inline-block;
    position:relative;
}
.cart-button{
   background:transparent;
    border:none;
    position:relative;
}
.cart-count{
    position:absolute;
    top:0;
    right:0;
    border-radius:50%;
    font-size:12px;
    background-color:red;
    padding:2px 6px;
    color:white;
    margin-left:5px;
}
 .search-section-2{
     margin-top:30px;
     /* border:1px solid black; */
     margin-right:8%;
     display:flex;
     height:40px;
 }
 .cart-button{
    background:transparent;
     border:none;
 }
 .user-button{
     border:none;
    background:transparent;
   
 }
 .container{
     display:flex;
     justify-content: space-between;
     height:90px;
     background-color:#ffffff;  
     border-bottom:1px solid grey;
     position:fixed;
     top:0;
     width:100%;
     z-index:100;
 
 }
 .image-container{
     margin-top:10px;
     display:flex;
     margin-left:10%;
 }
 .image-container img{
     margin-top:10px;
     width:50px;
     height:50px;
 }
 img:hover{
     cursor:pointer;
 }
 
 .nav-button{
     background:transparent;
     font-size:16px;
     color:#191919;
     font-weight:bolder;
     margin-left:10px;
     border:none;
     border-radius:5px;
     letter-spacing:2px;
 }
 .nav-button:hover{
     cursor:pointer;
     opacity:0.5;
 }
 .route-1{
     text-decoration:none;
     color:#191919;
 }
 .route-1:hover{
     color:#191919;
 }
 .route-2{
     text-decoration:none;
     color:#191919;
 }
 .route-2:hover{
     color:#191919;
 }
 .login{
     /* background-color:#0077b6; */
     color:#191919;
     padding:10px 15px;
     font-size:16px;
     text-decoration:none;
     font-weight:bolder;
     margin-left:20px;
     border:none;
     letter-spacing:2px;
      border:none;
     border-radius:15px;
     letter-spacing:2px;
 }
 .logout{
     /* background-color:#0077b6; */
     color:#191919;
     padding:10px 15px;
     font-size:16px;
     text-decoration:none;
     font-weight:bolder;
     margin-left:30px;
     margin-top:-10px;
     border:none;
     letter-spacing:2px;
      border:none;
     border-radius:15px;
     letter-spacing:2px;
     cursor:pointer;
 }
 .login:hover{
     cursor:pointer;
     opacity:0.5;
 }
 .hamburger-box{
     visibility: hidden;
 }
 .sidebar{
     visibility: hidden;
 }
 .bottom-container{
     display:none;
 }
 
 .section-4{
     display:none;
 }
 @keyframes slide{
     0%{left:-100%}
     100%{left:0%}
 }
 
 @media screen and (max-width:767px){
    .urban{
    font-family: 'ADLaM Display', sans-serif;
    font-size:25px;
    color:red;
    transform:translateY(20px);
    margin-left:10px;
}
.container{
   height:70px;
}
.bottom-container{
    display:block;
    background-color:#ffffff;
    height:60px;
    border-top:1px solid grey;
    width:100%;
    position:fixed;
    bottom:0;
    z-index:100;
}
h5{
    color:black;
    font-size:13px;
}
.bottom-home-button{
    background:transparent;
   border-right:10px solid grey;
    border:none;
}
.bottom-contact-button h5{
    font-size:13px;
    color:red;
}
.bottom-categories-button{
    background:transparent;
   
    border:none;
    margin-left:-10px;
}
.bottom-contact-button{
    background:transparent;
    border:none;
}
.bottom-account-button{
    background:transparent;
    border:none;
}
.bottom-child{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:10px;
   transform:translateY(10px);
    margin-left:20px;
} 
.hamburger-box{
    visibility:visible;
    position:absolute;
    top:30px;
    left:20px;
}
.hamburger-box button{
    background:transparent;
    border:none;
}
.close{
    background:transparent;
    border:none;
    margin-left:30px;
    margin-top:50px;
}
.sidebar{
    visibility:visible;
    background-color:#ffffff;
    z-index:1000;
    position:absolute;
    left:-100%;
    width:100%;
    animation-name:slide;
    animation-duration:0.5s;
    animation-delay:0.3s;
    animation-fill-mode:forwards;
    height:100vh;
}
.slide-leave-active{
     transition:transform 0.5s;
}
.slide-leave-to{
   transform:translateX(-100%);
}
.sidebar-user{
     width:50px;
     text-align:center;
     margin-left:60px;
}
.sidebar-username{
    font-size:25px;
    margin-left:30px;

}
.user-account-2{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
.no-user-acc{
    width:100%;
}
.no-user-danger{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      width:70%;
}
.sidebar-danger{
  transform:translate(100px,-20px);
}
.no-user-navs{
    display:flex;
    position:absolute;
    left:40%;
    top:20px;
    margin-top:20px;
}
.no-user-grid1{
    margin-top:10px;
}

.no-user-login{
    color:#191919;
    padding:10px 15px;
    font-size:16px;
    text-decoration:none;
    font-weight:bolder;
    margin-left:20px;
    border:none;
    letter-spacing:2px;
     border:none;
    border-radius:15px;
    letter-spacing:2px;
}
footer{
     transform:translateY(20px);
     font-size:20px;
}
.no-user-footer{
    transform:translateY(20px);
     font-size:20px;
     text-align:center;
}
.cart-home{
     width:25px;
 }
 .sidebar-account-section{
    display:grid;
    grid-template-columns:1fr 1fr;
    /* border:1px solid black; */
    margin-top:20px;
    width:100%;
 }
 .account-section-img1{
    width:30px;
      
 }
 .sidebar-gridbox1{
    height:30px;
    display:flex;
    width:100px;
    border-right:1px solid black;
 }
 .sidebar-gridbox1 h3{
      margin-left:5px;
 }
 .sidebar-gridbox2{
    height:30px;
    display:flex;
    width:100px;
    margin-left:10px;
 }
 .sidebar-route{
    color:#191919;
    text-decoration:none;
 }



.search-section{
        display:none;
     }
        .search-section-2{
        display:none;
            }

            .section-3{
                display:block;
                border:1px solid black;
                margin-top:30px;
                background-color:red;
                margin-right:8%;
                display:flex;
                height:40px;
                text-align:center;
            }
            .section-4{
                margin-top:30px;
                margin-right:8%;
                display:flex;
                height:40px;
                display:block;
                /* border:1px solid black; */

            }
            .user-cart{
                width:30px;
            }

            .cart-count{
    position:absolute;
    top:0;
    right:0;
    border-radius:50%;
    font-size:10px;
    background-color:red;
    padding:2px 5px;
    color:white;
    margin-left:5px;
}

            .logout{
                background-color:red;
    color:white;
    padding:10px 25px;
    font-size:16px;
    text-decoration:none;
    font-weight:bold;
    margin-left:25px;
    margin-top:20px;
    border:none;
    letter-spacing:2px;
     border:none;
    border-radius:20px;
    letter-spacing:2px;
    cursor:pointer;
}
     .image-container{
        margin-top:0px;
        margin-left:100px;
     }
     .image-container img{
        width:50px;
     }
 }
 
 </style>