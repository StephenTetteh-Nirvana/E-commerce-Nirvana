<template>
   <AboutNavBar></AboutNavBar>
  <BottomComp></BottomComp>
  <BottomInfo></BottomInfo>
</template>

<script>
import BottomComp from '@/components/BottomComp.vue'
import AboutNavBar from '@/components/AboutNavBar.vue'
import BottomInfo from '@/components/BottomInfo.vue'



export default {
    name:'AboutView',
    components:{
     AboutNavBar,
      BottomComp,
      BottomInfo
    }
}
</script>


<style scoped>

</style>