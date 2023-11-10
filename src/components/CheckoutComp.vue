<template>
        <div class="header-div">
            <h1>Shopping Cart</h1>
            <p><span class="count"><em>{{cartCount}}</em></span> items in your cart</p>
        </div>
        <div v-if="ShowCart"  class="table-container">
                        <div class="table-header">
                            <h1 class="head-1">Product</h1>
                            <h1 class="head-2">Price</h1>
                            <h1 class="head-3">Quantity</h1>
                        </div>

      
                    <div class="tr-head" v-for= "product in cartArray" :key="product.serial">
                        <div class="product-box">
                                <div class="image-box" >
                                    <img :src="require('../images/' + product.image)" alt="Product Image" />

                                        <div class="brand-box">
                                           <div class="mother-left">

                                            <div class="name-parent">
                                            <h1 class="name">{{ product.name }} </h1>
                                            </div>

                                            <div class="price-parent">
                                               <h3 class="price"> ${{ product.price }}.00 </h3>
                                            </div>
                                            </div>

                                            <!-- <h2>{{ product.price }}</h2>
                                            <h2>{{ product.quantity }}</h2> -->
                                            
                                        </div>
                                </div>
                                <div class="price-div">
                                <h1 class="price">${{product.price}}</h1>
                                </div>

                                
                                <div class="quantity-box">
                                    
                                        <td><button @click="subtract(product.id)" class="subtract">-</button></td>
                                        <div>
                                        <td><button class="quantity">{{product.quantity}}</button></td>
                                        </div>
                                        <td><button @click="add(product.id)" class="add">+</button></td>
                                    <div class="delete-box"><button class="button-delete" @click="deleteFromCart(product.id)">
                                        <img class="delete" src="../images/remove.png"/>
                                        </button>
                                        </div>
                                </div>

                                
                </div>
                <hr/>
               
            </div>
        <div class="bottom-div">
            <div class="back">
                <div class="arrow-box">
                <img class="arrow" src="../images/arrow(1).png"/>
                <router-link class="route" to="/products">Back To Shopping</router-link>
                </div>
             </div>
                <div class="checkout-div">
                    Total Fee:
                        <h1>${{totalPrice}}.00</h1>
                        <button  class="checkout-button">
                            <router-link class="route-1" to="/payment"> Checkout</router-link>
                        </button>
                </div>
        </div>
    </div>
    <div v-if="HideCart" class="Showcart">
             <img src="../images/grocery-cart.png"/>
             <h1>Your cart is empty!</h1>
            <router-link to='/products'><button>Start Shopping</button></router-link>
            </div>
</template>
             

<script>
// import Swal from 'sweetalert2'
import store from '../store.js'
import{ref,onMounted,computed,onUnmounted} from 'vue'
import{collection,doc,updateDoc,onSnapshot,getDoc} from 'firebase/firestore'
import{getAuth,onAuthStateChanged} from 'firebase/auth'
import{db} from '@/main.js'
export default {
    setup() {
        const ShowCart = ref(false)
        const HideCart = ref(false)
       
        const cartArray = ref([])
        const auth = getAuth()
        const count = ref(0)

        

             const cart = ref([]);

             const cartCount = computed(() => cart.value.length);

             const totalPrice = ref(0);
        


const add = async (id) => {
    try {
        const user = auth.currentUser
        const userId = user.uid
      const userRef = doc(db, 'authenticated',userId);

      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();
      const cartData = userData.cart || [];

      const productIndex = cartData.findIndex((product) => product.id === id);
      if (productIndex > -1) {
        const product = cartData[productIndex];
        product.quantity +=1;
        await updateDoc(userRef, {
          cart: cartData
        });
        console.log('Quantity increased successfully');
      }
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const subtract = async (id) => {
    try {
        const user = auth.currentUser
        const userId = user.uid
      const userRef = doc(db, 'authenticated',userId);

      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();
      const cartData = userData.cart || [];

      const productIndex = cartData.findIndex((product) => product.id === id);
      if (productIndex > -1) {
        const product = cartData[productIndex];
        product.quantity -=1 ;
        await updateDoc(userRef, {
          cart: cartData
        });

        console.log('Quantity decreased successfully');
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

            //Function that deletesfrom the cart arrat based on the index of the product adn then updates the cartArray
    const deleteFromCart = async (id) => {
      try {
        const user = auth.currentUser
        const userId = user.uid
        const userDocRef = doc(db, 'authenticated', userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const cartArray = userDoc.data().cart;

          const indexToRemove = cartArray.findIndex(product => product.id === id); // Find the index of the object to be removed based on id
    
          if (indexToRemove !== -1) {
        // Create a copy of the cart array and remove the object from the copy
        const updatedCart = [...cartArray];
        updatedCart.splice(indexToRemove, 1);

        await updateDoc(userDocRef, { cart: updatedCart });
        console.log(updatedCart);

        // Update the cart state in the Vuex store
        store.commit('setCart', updatedCart);
        store.dispatch('saveCartToLocalStorage');
          }
        }
      

      console.log('Data deleted from the cart state in Vuex store successfully.');
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    };

    onAuthStateChanged(auth,(user)=>{
                if(!user){
                    HideCart.value = true;
                }
                else{
                    ShowCart.value = true;
                }
            })


onMounted(() => {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const userCollection = collection(db, 'authenticated');
        const userDocRef = doc(userCollection, uid);

        const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.data();
            const cartData = userData.cart || [];

            let sum = 0;
            cartData.forEach((product) => {
              const price = product.price;
              const quantity = product.quantity;
              const itemTotal = price * quantity;
              sum += itemTotal;
            });

            cartArray.value = cartData;
            cart.value = cartArray.value
            totalPrice.value = sum;
            // store.commit('setCart',cartArray.value)
            store.commit('TotalPrice',totalPrice.value)
            console.log('Cart Array:', cartArray.value);
          }
          if(cartArray.value.length === 0 ){
                HideCart.value = true;
                console.log('empty')
            }if(cartArray.value.length === 0){
                ShowCart.value = false;
            }
            else{
                ShowCart.value = true;
                console.log('full')
            }
           
        });

        onUnmounted(unsubscribe);
      }
     
   
    });










    // onMounted(() => {
    //       const productQuery = query(collection(db, 'checkout'));

    //       onSnapshot(productQuery, (querySnapshot) => {
    //        let p_data = [];
    //         let sum = 0;

    //         querySnapshot.forEach((doc) => {
    //           const { price, quantity } = doc.data(); //Extracts the price and quantity property from each doc
    //           const itemTotal = price * quantity;
    //           sum += itemTotal;
             
    //           const product = {
    //             id: doc.id,
    //             name: doc.data().name,
    //             price: doc.data().price,
    //             quantity: doc.data().quantity,
    //             serial:doc.data().serial,
    //            imagePath: doc.data().imagePath,
    //           };

    //           p_data.push(product)
    //         });
    //         products.value = p_data;
    //       cart.value = p_data;
    //       totalPrice.value = sum;
    //      store.commit('TotalPrice', totalPrice.value);
    //       store.commit('setCart', p_data);
    //          console.log(products.value); //listens for changes in the store file

    //          if(p_data.length === 0 ){
    //             HideCart.value = true;
    //             console.log('empty')
    //         }if(p_data.length === 0){
    //             ShowCart.value = false;
    //         }
    //         else{
    //             ShowCart.value = true;
    //             console.log('full')
    //         }
    //       });
          
          
    //   });  
    //  const subtract = async (product) => {
            //     if (product.quantity > 0) {
            //         product.quantity -= 1;
            //          await updateDoc(doc(productCollection, product.id), { quantity: product.quantity });
            //     }
                
            //     };
            //     const add = async (product) => {
            //        product.quantity += 1;
            //          await updateDoc(doc(productCollection, product.id), { quantity: product.quantity });
            //     };
 
                        ///Function that deletes document from firestore 

                    //     async function deleteStudent(product) {
                    // try {
                    //     const productDocRef = doc(productCollection, product.id);
                    //     await deleteDoc(productDocRef);
                    //     console.log('Product Id:',product.id);
                    // } catch (error) {
                    //     console.log(error);
                    // }
                    // }    

                    return{
                        // deleteStudent,
                        cartCount,
                        cart,
                        add,
                        subtract,
                        count,
                        totalPrice,
                        cartArray,
                        deleteFromCart,
                        ShowCart,
                        HideCart
                    }
    },
}
</script>

<style scoped>
.bottom-div{
    /* border:1px solid black; */
    width:80%;
    margin-left:130px;
    display:flex;
    justify-content: space-between;
}
.Showcart{
    position:absolute;
    top:15%;
    left:50%;
    transform:translateX(-50%)
}
.Showcart img {
    margin-left:40px;
    width:200px;
    height:300px;
}
.Showcart button{
    padding:10px;
    font-size:18px;
    font-weight:lighter;
    margin-top:15px;
    margin-left:90px;
    background-color:#0079bb;
    opacity:0.5;
    border:none;
    color:white;
    cursor:pointer;
}
.Showcart button:hover{
    opacity:1;
}
.arrow-box{
    /* width:20px; */
    margin-right:50px;
    display:grid;
    grid-template-columns:1fr 4fr;
    /* margin-top:10px; */
}
.arrow{
     position:relative;
    right:6%;
    width:15px;
    height:20px;
  /* border:1px solid black; */

}
.table-container{
    height:100vh;
}
.back{
  margin-top:90px;
  margin-left:50px;
  opacity:0.5;
}
.back:hover{
    opacity:1;
}
.route{
    color:#0079bb;
    text-decoration:none;
}
.checkout-div{
    /* border:1px solid black; */
    height:300px;
}
.checkout-button{
    padding:10px;
    font-size:18px;
    font-weight:lighter;
    margin-top:10px;
    margin-right:30px;
    background-color:#0079bb;
    opacity:0.5;
    border:none;
    color:white;
    cursor:pointer;
}
.checkout-button:hover{
    opacity:1;
}
.route-1{
    color:white;
    text-decoration:none;
}
hr{
    width:80%;
    margin-left:130px;
    margin-top:20px;
}
.header-div{
    text-align:center;
    font-weight:lighter;
    font-family:italic;
    margin-top:30px;
}
.table-header{
   display:grid;
   grid-template-columns:2fr 1fr 1fr;
   margin-top:40px;
   margin-left:130px;
   border-top:1px solid black;
   border-bottom:1px solid black;
   width:80%;
}
.price-div{
    width:100px;
    /* border:1px solid black; */
}
.name{
    font-size:35px;
    font-weight:lighter;
}
.brand-box{
    /* text-align:center; */
    margin-top:30px;
    margin-left:10px;
}
.quantity-box{
    margin-left:20px;
    /* border:1px solid black; */
    width:200px;
    display:flex;
    justify-content: space-around;
}
.price{
    margin-top:20px;
    font-weight:lighter;
    font-size:20px;
}
.product-box{
    display:grid;
    grid-template-columns:2fr 1fr 1fr;
    width:80%;
    margin-left:130px;
    margin-top:10px;
    /* box-shadow:5px 5px 5px 5px #e1e1e1; */
    /* margin-left:10px; */
}
.head-1{
    font-weight:bold;
    margin-left:100px;
}
.head-2{
    font-weight:bold;
    margin-right:50px;
}
.head-3{
    font-weight:bold;
}
.count{
    color:blue;
    font-size:20px;
    font-family:bolder;
}
.image-box{
    /* border:1px solid black; */
    display:flex;
    width:55%;
  justify-content: space-between;
}
img{
   background-repeat:no-repeat;
   background-size: cover;
    background-position:center;
     height:110px;
    margin-left:10px;
}
.quantity{
    padding:10px 20px;
    background:transparent;
    border:1px solid #e1e1e1;
    border-radius: 25px;
}
.button-delete{
    border:none;
    background:transparent;
}
.delete-box{
    margin-left:60px;
}
.delete{
    height:30px;
    opacity:0.5;
    width:30px;
}
.delete:hover{
    opacity:1;
}
.add{
    background:transparent;
    border:none;
    font-size:25px;
    margin-top:4px;
    margin-left:10px;
    opacity:0.5;
}
.subtract{
    background:transparent;
    border:none;
    font-size:25px;
    margin-top:4px;
    margin-right:10px;
    opacity:0.5;
}
.add:hover,.subtract:hover{
    opacity:1;
}
.price-parent,.delete-parent{
display:none;
}



@media screen and (max-width:767px){
    .table-container{
    height:100vh;
    }
    .table-header{
        display:none;
    }
    .image-box{

    width:100%;
    /* border:1px solid black; */

}
img{
   background-repeat:no-repeat;
   background-size: cover;
    background-position:center;
     height:70px;
     width:90px;
    margin-left:0px;
}
hr{
    display:none;
}
.price-parent{
    display:block;
    /* border:1px solid black; */
    height:20px;
}
.delete-parent{
    display:block;
    display:flex;
    justify-content:flex-end;
    width:95%;
}
.delete-parent button{
    color:white;
    padding:8px;
    margin-left:15px;
    border:none;
}
.name-parent{
    /* border:1px solid black; */
    width:200%;
}

.product-box{
    display:grid;
    grid-template-columns:2fr 1fr;
    width:90%;
    margin-left:20px;
    margin-top:30px;
    border-bottom:1px solid #e1e1e1;
    /* box-shadow:5px 5px 5px 5px #e1e1e1; */
    /* margin-left:10px; */
}
.price-div{
    display:none;
    /* border:1px solid black; */
}
.quantity-box{
    width:30px;
    margin-top:20px;
    margin-left:50px;
}
.price{
    margin-top:0px;
    font-weight:bold;
    font-size:18px;
}
.quantity{
    padding:6px 15px;
    opacity:1;
    background:transparent;
    border:1px solid grey;
    border-radius: 0px;
}

.delete-box{
    display:block;
    margin-left:20px;
    margin-top:-30px;
}
.delete{
    height:18px;
    opacity:1;
    width:18px;
}
.add{
    background:transparent;
    border:none;
    font-size:18px;
    margin-top:3px;
    margin-left:8px;
    opacity:1;
}
.subtract{
    background:transparent;
    border:none;
    font-size:18px;
    margin-top:4px;
    margin-right:8px;
    opacity:1;
}
.bottom-div{
    /* border:1px solid black; */
    width:100%;
    margin-left:10px;
    display:flex;
    justify-content: space-between;
}
.checkout-div h1{
    font-size:20px;
}
.checkout-div{
    margin-left:30px;
}
.checkout-button{
    padding:10px 20px;
    font-size:16px;
    font-weight:lighter;
    margin-top:10px;
    margin-right:30px;
    background-color:#0079bb;
    opacity:1;
    border:none;
    color:white;
    cursor:pointer;
}
.brand-box{
 
    display:grid;
    grid-template-columns:1fr 1fr;
    margin-top:10px;
    margin-left:2px;
}
.name{
    font-size:20px;
    font-weight:light;
}
.arrow-box{
    /* width:20px; */
    margin-right:10px;
    display:grid;
    grid-template-columns:1fr 4fr;
    /* margin-top:10px; */
}
.arrow{
     position:relative;
    right:6%;
    width:15px;
    height:20px;
  /* border:1px solid black; */

}

.back{
  margin-top:10px;
  margin-left:20px;
  width:100%;
  opacity:1;
}

    .Showcart{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
    }
    .Showcart img{
        width: 100px;
        height:100px;
    }
    .Showcart h1{
        font-size:20px;
    }
    .Showcart button{
    padding:10px;
    width:70%;
    font-size:15px;
    font-weight:lighter;
    margin-top:15px;
    margin-left:30px;
    background-color:#0079bb;
    opacity:1;
    border:none;
    color:white;
    cursor:pointer;
    }
}
</style>
