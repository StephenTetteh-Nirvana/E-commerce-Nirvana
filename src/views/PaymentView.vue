<template>
    <div class="image-container">
        <router-link to="/"><img src="../images/icons8-worldwide-delivery-50.png" /></router-link>
    </div>
      <h1 class="head">Billing Info</h1>
      <p class="head-p">Please choose a payment method <br/>and fill out the empty fields</p>

      <div class="header">
                <div class="payments">
                    <div class="box-one">
                        <button><input type="radio" name="options" /><img src="../images/credit-card.png"></button>
                    </div>
                    <div class="box-two">
                        <button><input type="radio" name="options" /><img src="../images/voucher.png"></button>
                    </div>
                    <div class="box-three">
                        <button><input class="check" type="radio"  name="options"/><img src="../images/icons8-paypal-48.png"></button>
                    </div>
                </div>

                     
                    <form class="grid-box-2" @submit.prevent>
                        <h1>Payment Info</h1>
                          <div class="main-box-1">
                          <label class="label-one">Name on Card</label>
                          <br/>
                          <input class="main-input-1" type="text"  v-model="name"/>
                          </div>
                            <br/>

                          <div class="main-box-2">
                            <label class="label-two">Card Number</label>
                            <br/>
                            <input class="main-input-2"  type="number" placeholder="0000-0000-0000-0000" v-model="card" />
                          </div>
                            <br/>

                            <div class="details-box">
                                <div class="info-1">
                                    <label for="numberInput">CVV NUMBER</label><br/>
                                    <input class="info-input-1" type="number" id="numberInput" placeholder="0-0-0-0" v-model="cvv"/>
                                </div>

                                <div class="info-2">
                                    <label>EXPIRATION DATE</label><br/>
                                    <input class="info-input-2" type="date" placeholder="18/12/02" v-model="date"/>
                                </div>
                            </div>


                            <div class="order">
                                <p class="items">You ordered for <em>{{ cartCount }}</em> item(s)</p>
                            </div>

                           <div class="bottom-box">
                                <div class="payment">
                                    <h3>Total Fee: ${{total}}.00</h3>
                                    <button @click="pay" class="order-button">Pay</button>
                                </div>

                            

                            </div>
                        </form>

                        <div class="hidden">Jfjd</div>

                        <div class="back-to-shopping">
                            <router-link class="shopping-route" to="/checkout">
                                <h2>Back to Shopping</h2>
                            </router-link>
                        </div>
                    </div>

</template>

<script>
import Swal from 'sweetalert2'
import{ref,computed} from 'vue'
import store from '../store.js'
import{getDoc,doc,updateDoc} from 'firebase/firestore'
import{db} from '@/main.js'
import {getAuth} from 'firebase/auth'
// import Swal from 'sweetalert2'
import {useRouter} from 'vue-router'
  export default{
           name:'PaymentView',

        setup(){
            const name = ref('')
            const email = ref('')
            const card = ref('')
            const cvv = ref('')
            const date = ref('')
            const auth = getAuth()
            const orders = ref([])

    

            const total = computed( ()=> store.state.totalPrice)
            const cartCount = computed( ()=> store.state.cart.length)
            const router = useRouter()

        //   Function that copies documents from checkout collection and copy them into the orders collection and clears the checkout collection afterwards

        

        const pay = async () => {
    if (name.value === "" && email.value === "" && card.value === "" && cvv.value === "" && date.value === "") {
        Swal.fire(
            'Couldn\'t Proceed?',
            'Please provide all your details',
            'question'
        );
    } else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Payment Successful',
            showConfirmButton: false,
            timer: 1500
        });
        router.replace('/orders');
        
        try {
            // Get the user's document based on the UID
            const user = auth.currentUser
            const userId = user.uid
            const userRef = doc(db, 'authenticated', userId);

            // Fetch the current cart and order arrays
            const userSnapshot = await getDoc(userRef);
            if (userSnapshot.exists()) {
                const userData = userSnapshot.data();
                const cartData = userData.cart || [];
                const orderData = userData.order || [];
                orderData.push(...cartData);

                orders.value = orderData;

                // Clear the cart array
                await updateDoc(userRef, {
                    cart: [],
                    order: orders.value
                });

                console.log('Data transferred successfully');
                store.commit('setCart', []);
                router.push('/orders');
            } else {
                console.error('User document does not exist');
            }
        } catch (error) {
            console.error('Error transferring data:', error);
        }
    }
}
    
            return{
                // ShowPopup,
                pay,
                router,
                total,
                cartCount,
                name,
                email,
                card,
                cvv,
                date,
            }
        }
    }

</script>
<style scoped>
.box-one img{
     width:40px;
}
.hidden{
    opacity:0;
    height:50px;
}
.box-one button{
    background:transparent;
    border:none;
}
input[type="radio"]{
    width:50px;
    position:relative;
    left:10%;
    top:-10px;
}
.box-two img{
     width:40px;
}
.box-two button{
    background:transparent;
    border:none;
}
.box-three img{
     width:40px;
}
.box-three button{
    background:transparent;
    border:none;
}
em{
    color:red;
}

.image-container img{
  width:40px;
}
.image-container{
    margin-top:20px;
    text-align:center;
}
.back-to-shopping{
    width:20%;
    position:absolute;
    top:40px;
    left:30px;
}
.shopping-route{
    color:black;
    text-decoration:none;
}
.payments{
    width:20%;
    text-align:center;
    /* margin-left:40%; */
    margin-top:30px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}

.head{
    font-size:40px;
    text-align:center;
}
.head-p{
    text-align:center;
}
.header{
    display:grid;
    place-items:center;
}
/* Grid-Box 2 Properties */
.grid-box-2{
    /* position:absolute;
    top:55%;
    left:50%;
    border:1px solid grey;
    transform:translate(-50%,-50%); */
    width:25%;
    height:440px;
    font-weight:bolder;
}
.grid-box-2 h1{
    margin-left:20px;
}
.main-input-1,.main-input-2{
    padding:10px;
    width:80%;
    margin-top:10px;
    margin-left:20px;
      border: 1px solid #ccc;
        border-radius: 4px;
}
.label-one,.label-two{
    margin-left:20px;
    color:black;
}
.details-box{
    display:grid;
    grid-template-columns:1fr 1fr;
}
.info-1{
    margin-left:20px;
}
.info-input-1{
    padding:10px;
    width:40%;
    margin-top:10px;
      border: 1px solid #ccc;
        border-radius: 4px;
}
.info-input-2{
    padding:10px;
    margin-top:10px;
      border: 1px solid #ccc;
        border-radius: 4px;
}
.order{
    text-align:center;
    margin-top:20px;
    font-weight:bolder;
    color:black;
    font-size:20px;
    border-bottom:2px dotted black;
}
.order-button{
    padding:10px;
    width:80%;
    border:none;
    /* margin-left:40px; */
    border-radius:10px;
    background-color:#0079bb;
    color:white;
    font-size:20px;
    cursor:pointer;
    margin-right:10px;
}
.cart{
    position:absolute;
    top:100px;
    left:50px;
}

.shopping-cart{
    padding:10px 20px;
    outline:none;
    appearance:none;
    font-size:18px;
    font-weight:bold;
    /* background-color:red; */
    color:black;
    border:none;
    transition:background 300ms;
    border-radius:20px;
    cursor:pointer;
}

@media screen and (max-width:767px){
    .grid-box-2{
    width:80%;
    height:470px;
    font-weight:bolder;
}
.back-to-shopping{
    width:40%;
    top:30px;
    left:20px;
}
.back-to-shopping h2{
    font-size:16px;
}
.shopping-route{
    color:black;
    text-decoration:none;
}
.payments{
    width:80%;
    text-align:center;
    margin-top:20px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}

}
</style>