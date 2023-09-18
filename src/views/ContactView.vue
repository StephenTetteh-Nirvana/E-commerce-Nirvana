<template>
   <ContactComp></ContactComp>
   <ContactNavBar></ContactNavBar>
   <MessageComp></MessageComp>
   <FooterComp></FooterComp>
   <BottomInfo></BottomInfo>
</template>

<script>
import ContactComp from '@/components/ContactComp.vue'
import ContactNavBar from '@/components/ContactNavBar.vue'
import FooterComp from '@/components/FooterComp.vue'
import MessageComp from '@/components/MessageComp.vue'
import BottomInfo from '@/components/BottomInfo.vue'




    export default {
        name:'ContactView',
        components:{
            ContactComp,
            FooterComp,
            MessageComp,
            ContactNavBar,
            BottomInfo
        }
    }
</script>

<style scoped>

</style>