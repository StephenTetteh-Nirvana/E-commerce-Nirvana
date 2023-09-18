import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store.js';
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

store.dispatch('loadCartFromLocalStorage');

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA50hcUHO18Ni_UjTkHxd6AZnTqzYvbh2Q",

  authDomain: "e-commerce-22a83.firebaseapp.com",

  projectId: "e-commerce-22a83",

  storageBucket: "e-commerce-22a83.appspot.com",

  messagingSenderId: "644863402176",

  appId: "1:644863402176:web:ef1de41cb37004a70f8d25"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db=getFirestore(app)



export {
  db,
}

createApp(App).use(router,store).mount('#app');
