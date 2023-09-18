<template>
      <div class="container">
        <div class="image">
            <div class="head">
              <h1>Sneakers</h1>
             </div>
                <div class="mother-box">
                    <div class="first-box">
                                <div class="first-image">
                                    </div>
                                    <div class="text-box">
                                        <div class="box-one">
                                                <h3>Nike Runner</h3>
                                                <h2>$300.00</h2>
                                                <button class="btn-one" @click="add">Add To Cart</button>
                                        </div>
                                    
                                </div>
                     </div>
                                
                     <div class="second-box">
                                <div class="second-image">
                                    </div>
                                    <div class="text-box">
                                        <div class="box-two">
                                                <h3>Nike AirForce</h3>
                                                <h2>$700.00</h2>
                                                <button class="btn-two" @click="combine">Add To Cart</button>
                                        </div>
                                    
                                </div>
                     </div>


                        <div class="third-box">
                                <div class="third-image">
                                    </div>
                                    <div class="text-box">
                                        <div class="box-three">
                                                <h3>Jordan Air</h3>
                                                <h2>$500.00</h2>
                                                <button class="btn-three" @click="join">Add To Cart</button>
                                        </div>
                                    
                                </div>
                        </div>

                        <div class="fourth-box">
                                <div class="fourth-image">
                                    </div>
                                    <div class="text-box">
                                        <div class="box-four">
                                                <h3>Yeezzy Pro</h3>
                                                <h2>$600.00</h2>
                                                <button class="btn-four" @click="onAdd">Add To Cart</button>
                                        </div>
                                    
                                </div>
                        </div>

                        <div class="fifth-box">
                                <div class="fifth-image">
                                    </div>
                                    <div class="text-box">
                                        <div class="box-five">
                                                <h3>New Balance</h3>
                                                <h2>$700.00</h2>
                                                <button class="btn-five" @click="onCombine">Add To Cart</button>
                                        </div>
                                    
                                </div>
                        </div>

                        <div class="sixth-box">
                                <div class="sixth-image">
                                    </div>
                                    <div class="text-box">
                                        <div class="box-six">
                                                <h3>Jordan Retro</h3>
                                                <h2>$300.00</h2>
                                                <button class="btn-six" @click="onJoin">Add To Cart</button>
                                        </div>
                                    
                                </div>
                        </div>
            </div>
     </div>
     <div class="hidden">Hello</div>

     <div v-if="updateCart" class="update">
      <div class="adding-loader ">
        <img src="../images/icons8-worldwide-delivery-50.png">
      </div>
   </div>
   
   <div v-if="updateDone" class="update-done">
     <button>Added To Cart</button>
   </div>

   <div v-if="updateFail" class="update-done">
     <button>Operation Failed</button>
   </div>

  </div>
</template>

<script>
import store from '../store.js'
import Swal from 'sweetalert2'
import {ref} from 'vue'
import {getDoc,updateDoc,collection,doc} from 'firebase/firestore'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import {db} from '@/main.js'
    export default {
        name:'PhoneComp',

        setup(){
            const auth = getAuth()
            const updateCart = ref(false)
            const updateDone = ref(false)
            const updateFail = ref(false)


            async function add(){
                onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please create an account first!'
                        })
                    }else{
                        updateCart.value = true;
                    }
                    })
   

                try {
    const userCollection = collection(db, 'authenticated',);
    const user = auth.currentUser;
    const userId = user.uid;
    const userDoc = doc(userCollection, userId); // Replace 'userId' with the appropriate identifier for the document

    const docSnapshot = await getDoc(userDoc);
    const userData = docSnapshot.data();
    const cartArray = userData.cart || [];

    const newCartItem = {
    name: 'Nike Runner',
                        price: 300,
                        quantity: 1,
                        serial: 224,
                        imagePath: require('../images/jordan-1.png') 
};
    cartArray.push(newCartItem);

    await updateDoc(userDoc, { cart: cartArray });

    console.log('Data added to the cart array successfully.');
    store.commit('setCart', cartArray);
    console.log('Data added to the cart state successfully.');
    store.dispatch('saveCartToLocalStorage');

    updateCart.value = false;
    updateDone.value=true;
                    setTimeout(()=>{
                        updateDone.value = false;
                       
                    },1500)

  } catch (error) {
    updateCart.value = false;
    updateFail.value = true;
    setTimeout(()=>{
         updateFail.value = false;
    },2000)
    console.error('Error adding data to the cart array:', error);
  }
                
        }


            
            async function combine(){
                onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please create an account first!'
                        })
                    }else{
                        updateCart.value = true;
                    }
                    })
    

                try {
    const userCollection = collection(db, 'authenticated',);
    const user = auth.currentUser;
    const userId = user.uid;
    const userDoc = doc(userCollection, userId); // Replace 'userId' with the appropriate identifier for the document

    const docSnapshot = await getDoc(userDoc);
    const userData = docSnapshot.data();
    const cartArray = userData.cart || [];

    const newCartItem = {
    name:'Nike AirForce',
                 price:700,
                 quantity:1,
                 serial:574,
                 imagePath: require('../images/jordan-2.png'), 
};
    cartArray.push(newCartItem);

    await updateDoc(userDoc, { cart: cartArray });

    console.log('Data added to the cart array successfully.');
    store.commit('setCart', cartArray);
    console.log('Data added to the cart state successfully.');
    store.dispatch('saveCartToLocalStorage');
    updateCart.value = false;
    updateDone.value=true;
                    setTimeout(()=>{
                        updateDone.value = false;
                       
                    },1500)
  } catch (error) {
    updateCart.value = false;
    updateFail.value = true;
    setTimeout(()=>{
         updateFail.value = false;
    },2000)
    console.error('Error adding data to the cart array:', error);
  }
                
            }
            
            async function join(){
                onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please create an account first!'
                        })
                    }else{
                        updateCart.value = true;
                    }
                    })
   

                try {
    const userCollection = collection(db, 'authenticated',);
    const user = auth.currentUser;
    const userId = user.uid;
    const userDoc = doc(userCollection, userId); // Replace 'userId' with the appropriate identifier for the document

    const docSnapshot = await getDoc(userDoc);
    const userData = docSnapshot.data();
    const cartArray = userData.cart || [];

    const newCartItem = {
        name:'Jordan Air',
                 price:500,
                 quantity:1,
                 serial:974,
                 imagePath: require('../images/white-jordan.png'), 
};
    cartArray.push(newCartItem);

    await updateDoc(userDoc, { cart: cartArray });

    console.log('Data added to the cart array successfully.');
    store.commit('setCart', cartArray);
    console.log('Data added to the cart state successfully.');
    store.dispatch('saveCartToLocalStorage');
    
    updateCart.value = false;
    updateDone.value=true;
                    setTimeout(()=>{
                        updateDone.value = false;
                       
                    },1500)
  } catch (error) {
    updateCart.value = false;
    updateFail.value = true;
    setTimeout(()=>{
         updateFail.value = false;
    },2000)
    console.error('Error adding data to the cart array:', error);
  }
            }

            async function onAdd(){
                onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please create an account first!'
                        })
                    }else{
                        updateCart.value = true;
                    }
                    })
  

                try {
    const userCollection = collection(db, 'authenticated',);
    const user = auth.currentUser;
    const userId = user.uid;
    const userDoc = doc(userCollection, userId); // Replace 'userId' with the appropriate identifier for the document

    const docSnapshot = await getDoc(userDoc);
    const userData = docSnapshot.data();
    const cartArray = userData.cart || [];

    const newCartItem = {
        name:'Yeezzy Pro',
                 price:600,
                 quantity:1,
                 serial:314,
                 imagePath: require('../images/shoe-new-1.jpg'), 
};
    cartArray.push(newCartItem);

    await updateDoc(userDoc, { cart: cartArray });

    console.log('Data added to the cart array successfully.');
    store.commit('setCart', cartArray);
    console.log('Data added to the cart state successfully.');
    store.dispatch('saveCartToLocalStorage');
    
    updateCart.value = false;
    updateDone.value=true;
                    setTimeout(()=>{
                        updateDone.value = false;
                       
                    },1500)
  } catch (error) {
    updateCart.value = false;
    updateFail.value = true;
    setTimeout(()=>{
         updateFail.value = false;
    },2000)
    console.error('Error adding data to the cart array:', error);
  }
            }

            async function onCombine(){
                onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please create an account first!'
                        })
                    }else{
                        updateCart.value = true;
                    }
                    })
    

                try {
    const userCollection = collection(db, 'authenticated',);
    const user = auth.currentUser;
    const userId = user.uid;
    const userDoc = doc(userCollection, userId); // Replace 'userId' with the appropriate identifier for the document

    const docSnapshot = await getDoc(userDoc);
    const userData = docSnapshot.data();
    const cartArray = userData.cart || [];

    const newCartItem = {
        name:'New Balance',
                 price:700,
                 quantity:1,
                 serial:244,
                 imagePath: require('../images/shoe-new-2.png'), 
};
    cartArray.push(newCartItem);

    await updateDoc(userDoc, { cart: cartArray });

    console.log('Data added to the cart array successfully.');
    store.commit('setCart', cartArray);
    console.log('Data added to the cart state successfully.');
    store.dispatch('saveCartToLocalStorage');
    
    updateCart.value = false;
    updateDone.value=true;
                    setTimeout(()=>{
                        updateDone.value = false;
                       
                    },1500)
  } catch (error) {
    updateCart.value = false;
    updateFail.value = true;
    setTimeout(()=>{
         updateFail.value = false;
    },2000)
    console.error('Error adding data to the cart array:', error);
  }
            }
            async function onJoin(){
                onAuthStateChanged(auth,(user)=>{
                    if(!user){
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please create an account first!'
                        })
                    }else{
                        updateCart.value = true;
                    }
                    })
  

                try {
    const userCollection = collection(db, 'authenticated',);
    const user = auth.currentUser;
    const userId = user.uid;
    const userDoc = doc(userCollection, userId); // Replace 'userId' with the appropriate identifier for the document

    const docSnapshot = await getDoc(userDoc);
    const userData = docSnapshot.data();
    const cartArray = userData.cart || [];

    const newCartItem = {
        name:'Jordan Retro',
                 price:300,
                 quantity:1,
                 serial:124,
                 imagePath: require('../images/shoe-new-3.png'), 
};
    cartArray.push(newCartItem);

    await updateDoc(userDoc, { cart: cartArray });

    console.log('Data added to the cart array successfully.');
    store.commit('setCart', cartArray);
    console.log('Data added to the cart state successfully.');
    store.dispatch('saveCartToLocalStorage');
    
    updateCart.value = false;
    updateDone.value=true;
                    setTimeout(()=>{
                        updateDone.value = false;
                       
                    },1500)
  } catch (error) {
    updateCart.value = false;
    updateFail.value = true;
    setTimeout(()=>{
         updateFail.value = false;
    },2000)
    console.error('Error adding data to the cart array:', error);
  }
            }
            



            return{
                  add,
                  combine,
                  join,
                  onAdd,
                  onCombine,
                  onJoin,
                  updateCart,
                  updateDone,
                  updateFail

            }
        }
    }
</script>

<style scoped>
/* Procuducts Styling */
.container{
    /* height:70vh; */
    background-color:#ffffff;
}
.hidden{
    height:50px;
    opacity:0;
}
.update{
    text-align:center;
    background-color:black;
    color:white;
    opacity:0.8;
    height:100vh;
    width:100%;
    z-index:2000;
    padding:10px;
    position:fixed;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    
}
.adding-loader{
    animation:rotate 2s linear infinite;
}

@keyframes rotate{
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(360deg)
    }
}

@keyframes animate{
    0%{
        opacity:0
    }
    100%{
        opacity:1;
    }
}

.update-done{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    position:fixed;
    animation-name:animate;
    animation-duration:0.5s;
    animation-delay:0.5s;
    animation-fill-mode:forwards;
}
.update-done button{
    background-color:#191919;
    color:white;
    border-radius:10px;
}
button{
    padding:10px 30px;
}
.head{
    background-color:#e1e1e1;
    text-align:center;
    height:100px;
    font-weight:bolder;
    color:black;
}
.head h1{
    font-size:40px;
    position:relative;
    top:20%;
}
.mother-box{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    row-gap:20px;
    margin-top:70px;
    /* margin-left:80px; */
    place-items:center;
    width:100%;
}

   /* FIRST PRODUCT BOX */
   .first-image{
   background-image: url(../images/jordan-1.png);
   background-repeat:no-repeat;
   background-size: contain;
   background-position:center;
   width:100%;
   height:100%;
}
.first-box{
    margin-left:100px;
  /* border:1px solid grey; */
    /* border:1px solid black; */
    display:grid;
    /* border:3px solid #e1e1e1; */
    width:70%;
    height:400px;
    grid-template-rows:2fr 1fr;
}
.text-box{
    text-align:center;
}
.box-one{
    display:grid;
    background-color:white;
    grid-template-rows:1fr 1fr 1fr;
}
.box-one h2{
    color:orangered;
    font-size:20px;
    /* margin-top:10px; */
}
.box-one h3{
    font-size:20px;
}
.btn-one{
    background:transparent;
    width:40%;
    font-weight:bolder;
    border:2px solid black;
    text-align:center;
    border-radius:25px;
    margin-left:100px;
    font-size:15px;
    padding:10px;
}
.btn-one:hover{
    background-color:black;
    color:white;
}


  /* SECOND PRODUCT BOX */
  .second-image{
   background-image: url(../images/jordan-2.png);
   background-repeat:no-repeat;
   background-size: cover;
   background-position:center;
   border-bottom:1px solid red;
   width:100%;
   height:100%;
}
  .second-box{
    display:grid;
    /* border:3px solid #e1e1e1; */
    width:70%;
    height:400px;
    grid-template-rows:2fr 1fr;
}
.text-box{
    text-align:center;
}
.box-two{
    display:grid;
    background-color:white;
    grid-template-rows:1fr 1fr 1fr;
}
.box-two h2{
    color:orangered;
    font-size:20px;
    /* margin-top:10px; */
}
.box-two h3{
    font-size:20px;
}
.btn-two{
    background:transparent;
    width:40%;
    font-weight:bolder;
    border:2px solid black;
    text-align:center;
    border-radius:25px;
    margin-left:100px;
    font-size:15px;
    padding:10px;
}
.btn-two:hover{
    background-color:black;
    color:white;
}


 /* THIRD PRODUCT BOX */
 .third-image{
   background-image: url(../images/white-jordan.png);
   background-repeat:no-repeat;
   background-size: cover;
   background-position:center;
   width:100%;
   height:100%;
}
  .third-box{
    /* margin-left:100px; */
    margin-left:-100px;
    display:grid;
    width:70%;
    height:400px;
    /* border:3px solid #e1e1e1; */
    grid-template-rows:2fr 1fr;
}
.text-box{
    text-align:center;
}
.box-three{
    display:grid;
    background-color:white;
    grid-template-rows:1fr 1fr 1fr;
}
.box-three h2{
    color:orangered;
    font-size:20px;
    /* margin-top:10px; */
}
.box-three h3{
    font-size:20px;
}
.btn-three{
    background:transparent;
    width:40%;
    font-weight:bolder;
    border:2px solid black;
    text-align:center;
    border-radius:25px;
    margin-left:100px;
    font-size:15px;
    padding:10px;
}
.btn-three:hover{
    background-color:black;
    color:white;
}
.fourth-image{
   background-image: url(../images/shoe-new-1.jpg);
   background-repeat:no-repeat;
   background-size: cover;
   background-position:center;
   border-bottom:1px solid red;
   width:100%;
   height:100%;
}
  .fourth-box{
    margin-left:100px;
  /* border:1px solid grey; */
    /* border:1px solid black; */
    display:grid;
    /* border:3px solid #e1e1e1; */
    width:70%;
    height:400px;
    grid-template-rows:2fr 1fr;
}
.box-four{
    display:grid;
    background-color:white;
    grid-template-rows:1fr 1fr 1fr;
}
.box-four h2{
    color:orangered;
    font-size:20px;
    /* margin-top:10px; */
}
.box-four h3{
    font-size:20px;
}
.btn-four{
    background:transparent;
    width:40%;
    font-weight:bolder;
    border:2px solid black;
    text-align:center;
    border-radius:25px;
    margin-left:100px;
    font-size:15px;
    padding:10px;
}
.btn-four:hover{
    background-color:black;
    color:white;
}
.fifth-image{
   background-image: url(../images/shoe-new-2.png);
   background-repeat:no-repeat;
   background-size: cover;
   background-position:center;
   border-bottom:1px solid red;
   width:100%;
   height:100%;
}
  .fifth-box{
  /* border:1px solid grey; */
    /* border:1px solid black; */
    display:grid;
    /* border:3px solid #e1e1e1; */
    width:70%;
    height:400px;
    grid-template-rows:2fr 1fr;
}
.box-five{
    display:grid;
    background-color:white;
    grid-template-rows:1fr 1fr 1fr;
}
.box-five h2{
    color:orangered;
    font-size:20px;
    /* margin-top:10px; */
}
.box-five h3{
    font-size:20px;
}
.btn-five{
    background:transparent;
    width:40%;
    font-weight:bolder;
    border:2px solid black;
    text-align:center;
    border-radius:25px;
    margin-left:100px;
    font-size:15px;
    padding:10px;
}
.btn-five:hover{
    background-color:black;
    color:white;
}
.sixth-image{
   background-image: url(../images/shoe-new-3.png);
   background-repeat:no-repeat;
   background-size: cover;
   background-position:center;
   border-bottom:1px solid red;
   width:100%;
   height:100%;
}
  .sixth-box{
    margin-left:-100px;
    display:grid;
    /* border:3px solid #e1e1e1; */
    width:70%;
    height:400px;
    grid-template-rows:2fr 1fr;
}
.box-six{
    display:grid;
    background-color:white;
    grid-template-rows:1fr 1fr 1fr;
}
.box-six h2{
    color:orangered;
    font-size:20px;
    /* margin-top:10px; */
}
.box-six h3{
    font-size:20px;
}
.btn-six{
    background:transparent;
    width:40%;
    font-weight:bolder;
    border:2px solid black;
    text-align:center;
    border-radius:25px;
    margin-left:100px;
    font-size:15px;
    padding:10px;
}
.btn-six:hover{
    background-color:black;
    color:white;
}

@media (max-width:767px){
    .mother-box{
      grid-template-columns:repeat(2,1fr);
      margin-left:20px;
      margin-top:30px;
   }

   .update h1{
    font-size:16px;
    letter-spacing:2px;
   }
   .update-done h1{
    font-size:16px;
    letter-spacing:1px;
   }
  
   .head{
    text-align:center;
    font-weight:bolder;
    position:relative;
    top:3%;
    font-size:40px;
    color:black;
}

.first-box{
    margin-left:10px;
    display:grid;
    border:none;
    width:150px;
    max-height:200px;
    grid-template-rows:2fr 1fr;
}
.box-one{
    display:block;
    margin-bottom:10px;
}
.box-one h2{
    color:orangered;
    font-size:15px;
    /* margin-top:10px; */
}
.box-one h3{
    font-size:18px;
}
.btn-one{
    background:transparent;
    width:70%;
    font-weight:bolder;
    border:1px solid orangered;
    text-align:center;
    border-radius:0px;
    margin-left:5px;
    font-size:13px;
    padding:10px;
    background-color:orangered;
    color:white;
}

.second-box{
    display:grid;
    border:none;
    width:150px;
    max-height:200px;
    margin-left:-10px;
    grid-template-rows:2fr 1fr;
}
.box-two{
    display:block;
    margin-bottom:10px;
}
.box-two h2{
    color:orangered;
    font-size:15px;
    /* margin-top:10px; */
}
.box-two h3{
    font-size:18px;
}
.btn-two{
    background:transparent;
    width:70%;
    font-weight:bolder;
    border:orangered;
    text-align:center;
    border-radius:0px;
    margin-left:5px;
    font-size:13px;
    padding:10px;
    background-color:orangered;
    color:white;
}
.third-box{
    display:grid;
    border:none;
    width:150px;
    margin-left:10px;
    max-height:200px;
    grid-template-rows:2fr 1fr;
}
.box-three{
    display:block;
    margin-bottom:10px;
}
.box-three h2{
    color:orangered;
    font-size:15px;
    /* margin-top:10px; */
}
.box-three h3{
    font-size:18px;
}
.btn-three{
    background:transparent;
    width:70%;
    font-weight:bolder;
    border:orangered;
    text-align:center;
    border-radius:0px;
    margin-left:5px;
    font-size:13px;
    padding:10px;
    background-color:orangered;
    color:white;
}
.fourth-box{
    display:grid;
    border:none;
    width:150px;
    max-height:200px;
    margin-left:-10px;
    grid-template-rows:2fr 1fr;
}
.box-four{
    display:block;
    margin-bottom:10px;
}
.box-four h2{
    color:orangered;
    font-size:15px;
    /* margin-top:10px; */
}
.box-four h3{
    font-size:18px;
}
.btn-four{
    background:transparent;
    width:70%;
    font-weight:bolder;
    border:orangered;
    text-align:center;
    border-radius:0px;
    margin-left:5px;
    font-size:13px;
    padding:10px;
    background-color:orangered;
    color:white;
}
.fifth-box{
    display:grid;
    border:none;
    width:150px;
    max-height:200px;
    margin-left:10px;
    grid-template-rows:2fr 1fr;
}
.box-five{
    display:block;
    margin-bottom:10px;
}
.box-five h2{
    color:orangered;
    font-size:15px;
    /* margin-top:10px; */
}
.box-five h3{
    font-size:18px;
}
.btn-five{
    background:transparent;
    width:70%;
    font-weight:bolder;
    border:orangered;
    text-align:center;
    border-radius:0px;
    margin-left:5px;
    font-size:13px;
    padding:10px;
    background-color:orangered;
    color:white;
}
.sixth-box{
    display:grid;
    border:none;
    width:150px;
    max-height:200px;
    margin-left:-10px;
    grid-template-rows:2fr 1fr;
}
.box-six{
    display:block;
    margin-bottom:10px;
}
.box-six h2{
    color:orangered;
    font-size:15px;
    /* margin-top:10px; */
}
.box-six h3{
    font-size:18px;
}
.btn-six{
    background:transparent;
    width:70%;
    font-weight:bolder;
    border:orangered;
    text-align:center;
    border-radius:0px;
    margin-left:5px;
    font-size:13px;
    padding:10px;
    background-color:orangered;
    color:white;
}
   
}

</style>