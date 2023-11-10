<template>
    <div class="container">
           <div class="head">
              <h1>Laptops</h1>
             </div>

             <div class="mother-box">
                <div v-for="laptop in laptops" :key="laptop.id">
                <div class="product-box">
                    <img :src="require('../images/' + laptop.image)" alt="Product Image" />
                    <div class="box-one">
                        <h3>{{ laptop.name }}</h3>
                        <h2>${{ laptop.price }}.00</h2>
                        <button class="btn-one" @click="addToCart(laptop)">Add To Cart</button>
                    </div>
                 
                </div>
         
         </div>
             </div>

             <div class="hidden">
                hidden
             </div>

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
import Swal from 'sweetalert2'
import {ref,onMounted} from 'vue'
import{collection,getDocs,updateDoc,getDoc,doc} from 'firebase/firestore'
import{getAuth,onAuthStateChanged} from 'firebase/auth'
import {db} from '@/main.js'
import store from '../store.js'

export default {
    name:'LaptopComp',

    setup() {

        const laptops = ref([])
        const auth = getAuth()
        const updateCart = ref(false)
        const updateDone = ref(false)
        const updateFail = ref(false)
       


            const loadProducts = async () => {
                try {
                    const productsCollection = collection(db, 'Laptops');[]
                    const snapshot = await getDocs(productsCollection);
                    laptops.value = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name:doc.data().Name,
                    price:doc.data().Price,
                    image:doc.data().Image,


                    }));
                } catch (error) {
                    console.error('Error loading products:', error);
                }
                };

              

                const addToCart= async(laptop)=>{
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
                    const user = auth.currentUser;
                    const userId = user.uid;
                    const userCollection = collection(db, 'authenticated')
                    const userDoc = doc(userCollection, userId);

                    const docSnapshot = await getDoc(userDoc);
                    const userData = docSnapshot.data();
                    const cartArray = userData.cart || [];

               

                    const lap = {
                        id:laptop.id,
                        name: laptop.name,
                        price: laptop.price,
                        image: laptop.image,
                        quantity:1
                    }

                   cartArray.push(lap);

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


  }catch (error) {
    updateCart.value = false;
    updateFail.value = true;
    setTimeout(()=>{
         updateFail.value = false;
    },2000)
    console.error('Error adding data to the cart array:', error);
  }
                 
    }

    const itemAdded = async(laptop) =>{

        try{
            const user =  auth.currentUser;
            const userId = user.uid;
         
        const userCollection = collection(db,'authenticated')
        const userDoc = doc(userCollection,userId)
        const snapshot = await getDoc(userDoc)
        const data = snapshot.data();
        const userData = data.cart;

       // Check if the product with the same ID already exists in the cart
                const isProductAlreadyInCart = userData.some(product => product.id === laptop.id);

                if (isProductAlreadyInCart) {
                console.log('Product with the same ID already exists in the cart. Cannot add duplicate.');
                return; // Exit the function if the product already exists
                }

        }catch(error){
            console.log('Error fetching user data',error)
        }
       
    }

    onMounted(()=>{
                    loadProducts(),
                    itemAdded()
                  
                })


        return{
            laptops,
            loadProducts,
            itemAdded,
            addToCart,
            updateCart,
            updateDone,
            updateFail,
           
        }
        
    }
}
</script>

<style scoped>
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
    row-gap:40px;
    margin-top:70px;
    place-items:center;
    width:90%;
    margin-left:100px;
    /* border:1px solid black; */
}
img{
    background-repeat:no-repeat;
   background-size: contain;
   background-position:center;
   width:100%;
   height:100%;
}
.product-box{
    display:grid;
    width:90%;
    height:400px;
    grid-template-rows:2fr 1fr;
}
.box-one{
    display:grid;
    background-color:white;
    grid-template-rows:1fr 1fr 1fr;
    text-align:center;
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
    width:35%;
    font-weight:bolder;
    border:2px solid black;
    text-align:center;
    border-radius:25px;
    margin-left:120px;
    font-size:15px;
    padding:10px;
}
.btn-one:hover{
    background-color:black;
    color:white;
}
@media screen and (max-width:767px){
    .mother-box{
      grid-template-columns:repeat(2,1fr);
      margin-left:15px;
      margin-top:30px;
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
    opacity:0;
    animation-name:animate;
    animation-duration:0.5s;
    animation-delay:0.5s;
}
.update-done button{
    background-color:#191919;
    color:white;
    border-radius:10px;
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
.btn-one{
    background:transparent;
    width:70%;
    font-weight:bolder;
    text-align:center;
    border-radius:0px;
    margin-left:5px;
    font-size:13px;
    padding:10px;
    border:orangered;
    background-color:orangered;
    color:white;
}
.product-box{
    display:grid;
    border:none;
    width:150px;
    max-height:200px;
    grid-template-rows:2fr 1fr;
    margin-left:10px;
}
.box-one{
    display:block;
    margin-bottom:10px;
}
.box-one h2{
    color:orangered;
    font-size:15px;
}
.box-one h3{
    font-size:18px;
}
}
</style>
