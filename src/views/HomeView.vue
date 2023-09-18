<template>
    <LandingComp></LandingComp>
    <ServicesComp></ServicesComp>
    <LandingImg></LandingImg>
     <SignUp></SignUp>
    <LandingImage></LandingImage>
    <FooterComp></FooterComp>
    <BottomInfo></BottomInfo>
</template>

<script>
import LandingComp from "@/components/LandingComp.vue";
import LandingImage from "@/components/LandingImage.vue";
import ServicesComp from "@/components/ServicesComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import SignUp from "@/components/SignUp.vue";
import BottomInfo from "@/components/BottomInfo.vue";
import LandingImg from "@/components/LandingImg.vue";


import{useRoute,useRouter} from 'vue-router'
import{getAuth,onAuthStateChanged} from 'firebase/auth'
import {onMounted} from 'vue'

export default {
  name: "HomeView",
  components: {
    LandingComp,
    LandingImage,
    ServicesComp,
    FooterComp,
    SignUp,
    BottomInfo,
    LandingImg
  },
  setup(){
    const router=useRouter()
    const route=useRoute()
    const auth=getAuth()


    onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      if (route.path === "/products") {
        router.replace("/products");
      }
    } else if (route.path === "/login" || route.path === "/register") {
      router.replace("/products");
    }
  });
});
  }
}
</script>


