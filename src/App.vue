<template>
  <router-view/>
</template>


<script>
// import{addDoc,collection} from 'firebase/firestore'
import {onMounted} from 'vue'
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import store from './store.js'

export default{
  name:'App',

  setup(){

    onMounted(()=>{
      const auth = getAuth()
      onAuthStateChanged(auth,(user)=>{
        if(!user){
          store.commit('setCart',[])
        }
       
      })
 
    })
  
    // const currentUser = ref(null)
 

  
      // const userId = user.uid
//     const createCollection = async(userId)=>{
//     try{
//       const userCollectionRef = collection(db,userId)
//       await addDoc(userCollectionRef,{})
//       console.log('Success')
//     }catch(error){
//       console.log('Error creating collection',error)
//     }
// }
   
  }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Poppins:wght@300;400&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  /* background-color:#e1e1e1; */
}
html{
  scroll-behavior: smooth;
}
*{
  margin:0px;
  padding:0px;
}

</style>
