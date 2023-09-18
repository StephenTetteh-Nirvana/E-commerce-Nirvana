<template>
    <div class="container-box">
        <div class="parent-box">
        <div class="paragraph-box">
            <h1>Learn More About Us</h1>
            <p>Our website provides a convenient platform for online transactions, offering a wide selection of products, secure payment methods, and efficient order processing. <span class="p-hide">With user-friendly navigation, detailed product descriptions, and reliable customer support, we ensure a seamless shopping experience. Through advanced technology and a robust infrastructure, our website facilitates smooth transactions, timely deliveries, and hassle-free returns. Emphasizing user satisfaction, our e-commerce website aims to create a trustworthy and enjoyable shopping environment.</span>
            </p>
            <button class="read">Read More</button>
        </div>
        <div class="image-box">
            <img class="landing-img" src="../images/landing-3.jpg"/>
        </div>
        </div>

</div>
  
    </template>


<script>
import store from '../store.js';
import{computed,ref} from 'vue'
import{getAuth,signOut,onAuthStateChanged} from 'firebase/auth'
import{getDoc,doc,updateDoc} from 'firebase/firestore'
import {db} from '@/main.js'
import {useRouter} from 'vue-router'

export default {
  name: "BottomComp",

    setup(){
            const router = useRouter()
            const auth = getAuth()

             const cartCount = computed(() => store.state.cart.length);
             console.log(cartCount)
             

  const User = ref(true)
    const close = ref(false)
    const showcaseBox = ref(false)

    const openButton = () => {
        close.value = true;
        showcaseBox.value = true;
    }

    const closeButton = () => {
        close.value = false;
        showcaseBox.value = false;
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

             async function LogOut(){
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
                            LogOut,
                            cartCount,
                            userName,
                            User,
                            close,
                            showcaseBox,
                            closeButton,
                            openButton
                            
                        }
        }
    }
</script>

<style scoped>
*{
    margin:0px;
    padding:0px;
}
.container-box{
   margin-top:40px;
}
.p-hide{
    display:none;
}
.paragraph-box{
     margin-top:50px;
     height:400px;
     margin-left:100px;
     width:80%;
}
.paragraph-box button{
    font-family:'Poppins',sans-serif;
    margin-top:30px;
    padding:10px 60px;
    font-size:18px;
    text-align:center;
    /* background:transparent; */
    border-radius:5px;
    border:1px solid #0077b6;
    color:#0077b6;
}
.read:hover{
    color:white;
    border:none;
    background-color:#0077b6;
}
.paragraph-box p{
    font-size:18px;
    font-weight:lighter;
    font-weight:50;
    margin-top:130px;
    line-height:1.8rem;
}
.paragraph-box h1{
    font-weight:lighter;
    font-size:40px;
    position:relative;
    top:28%;
    right:5%;
    margin-left:30px;
}
.parent-box{
    background-color:white;
    display:grid;
    grid-template-columns:1fr 1fr;
}
.landing-img{
    width:80%;
    height:700px;
}





@media screen and (max-width:767px){
  
/* Media queries for main content */
.parent-box{
    display:grid;
    grid-template-columns:1fr 1fr;
    width:100%;
    /* border:1px solid red; */
}
.container-box{
    margin-top:50px;
}
.paragraph-box{
     margin-top:60px;
     margin-left:20px;
     width:100%;
     z-index:20;
}
.paragraph-box p{
    font-size:15px;
    font-weight:lighter;
    font-weight:50;
    margin-top:20px;
    line-height:1.3rem;
}
.p-hide{
    display:none;
}
.paragraph-box h1{
    font-weight:lighter;
    font-size:25px;
    position:relative;
    top:2%;
    right:13%;
}
.landing-img{
    width:90%;
    height:400px;
}
.paragraph-box button{
    font-family:'Poppins',sans-serif;
    margin-top:30px;
    padding:10px 20px;
    font-size:15px;
    text-align:center;
    /* background:transparent; */
    border-radius:5px;
    background-color:#0077b6;
    border:1px solid #0077b6;
    color:white;
}
}

</style>