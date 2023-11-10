<template>
  <div class="parent-container">

      <div v-if ="YesOrder" class="container-2">
          <h1 class="header">Order History</h1>

        <div class="order-box" v-for="order in orders" :key="order.name">
          <div class="first-box">
             <img :src="require('../images/' + order.image)"/>
             <h3 class="name">{{ order.name }}</h3>
          </div>
         
            <div class="second-box">
              <div class="button-box"> 
                <button class="status">Paid</button>
              </div>
             
              <h4>{{ order.quantity }} piece(s)</h4>
              <h4>${{order.price}}.00</h4>
            </div>
        </div>
            
     
      </div>



    <div v-if="NoOrder" class="no-order">
      <h1>No Orders Yet!</h1>
      <router-link to="/checkout"><button>Place Order</button></router-link>
    </div>
    
    <div class="hidden">
      hidden
    </div>
  </div>
</template>

<script>
import{ref,onMounted} from 'vue'
import{getDoc,doc} from 'firebase/firestore'
import{getAuth, onAuthStateChanged} from 'firebase/auth'
import{db} from '@/main.js'
export default {
    name:'OrderComp',

    setup(){
      const auth = getAuth()
      const orders = ref([]);
    
      const YesOrder = ref(false)
      const NoOrder = ref(false)

      onMounted(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            pay()
            YesOrder.value = true;
            console.log("user object is not null")
          }else{
            NoOrder.value = true;
            console.log("user object is null")
          }
        })
       
      })

        const pay = async () => {
  try {
    // Get the user's document based on the UID
    const user = auth.currentUser
    const userId = user.uid
    const userRef = doc(db, 'authenticated', userId);

    // Fetch the current cart and order arrays
    const userSnapshot = await getDoc(userRef);
if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const orderData = userData.order || [];
     orders.value = orderData 
console.log('Data recieved successfully');
} else {
  console.error('User document does not exist');
}
  } catch (error) {
    console.error('Error transferring data:', error);
  }
}
      return{
        orders,
        pay,
        YesOrder,
        NoOrder
      }
    }
  }

</script>

<style scoped>
.container-2{
  margin-top:120px;
    margin-left:100px;
    width:90%;
}
.hidden{
  opacity:0;
  height:60px;
}
.center-notification{
  text-align:center;
  border:1px solid black;
  background:linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75));
  color:white;
  border:none;
  transform:translateY(-100px);
  animation-name:slideIn;
  animation-delay:0.5s;
  animation-duration:0.4s;
  animation-fill-mode:forwards;
}
@keyframes slideIn{
  0%{
    transform:translateY(-100px);
  }
  100%{
    transform:translateY(0px);
  }
}
.header{
  margin-top:30px;
}
.order-box{
    display:grid;
    grid-template-columns:1fr 1fr;
    border-bottom:1px solid grey;
    margin-top:20px;
}
.first-box{
  display:flex;
}
.first-box img{
  height:100px;
  width:30%;
}
.second-box{
  display:flex;
  margin-top:20px;
  justify-content:space-around;
}
.name{
  font-size:25px;
  font-weight:bold;
  margin-top:30px;
  margin-left:20px;
}
.status{
 padding:10px 40px;
 text-align:center;
 background-color:rgb(33, 218, 33);
 font-size:16px;
 font-weight:300;
 border:none;
 border-radius:5px;
 color:#ffffff;
 cursor:pointer;
}

.no-order{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.no-order button{
  padding:10px;
    font-size:18px;
    font-weight:lighter;
    margin-top:15px;
    margin-left:40px;
    background-color:#0079bb;
    opacity:0.5;
    border:none;
    color:white;
    cursor:pointer;

}
.no-order button:hover{
  opacity:1;

}





@media screen and (max-width:767px){
  .container-2{
    margin-top:90px;
    margin-left:15px;
  }
 
    .center-notification{
      margin-left:0px;
}
.center-notification h1{
  font-size:18px;
}
.first-box img{
  height:50px;
  width:25%;
}
.serial{
  font-size:15px;
}
.second-box{
  margin-top:10px;
}
.second-box h4{
  font-size:15px;
}
.name{
  font-size:15px;
  font-weight:bold;
  margin-top:10px;
  margin-left:5px;
}
.status{
  padding:6px;
  border:none;
  color:white;
  text-align:center;
  height:30px;
  font-size:13px;
  letter-spacing:1px;
  font-weight:bold;
  border-radius:8px;
}
  
.no-order{
  position:absolute;
  top:50%;
  left:75%;
  transform:translate(-50%,-50%);
  width:100%;
}
.no-order button{
  opacity:1;
}

}

</style>
