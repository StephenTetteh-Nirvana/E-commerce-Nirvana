<template>
    <ProductNavBar></ProductNavBar>
    <ShowcaseComp></ShowcaseComp>
    <LaptopComp></LaptopComp>
    <SneakerComp></SneakerComp>
    <MenComp></MenComp>
    <WomenComp></WomenComp>
    <FooterComp></FooterComp>
    <BottomInfo></BottomInfo>
  
</template>

<script>
import ShowcaseComp from "@/components/ShowcaseComp.vue"
import SneakerComp from "@/components/SneakerComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import MenComp from "@/components/MenComp.vue"
import WomenComp from "@/components/WomenComp.vue"
import BottomInfo from "@/components/BottomInfo.vue"
import ProductNavBar from "@/components/ProductNavBar.vue"
import LaptopComp from "@/components/LaptopComp.vue"


    export default {
        name:'ProductPage',
        components:{
            ShowcaseComp,
            SneakerComp,
            FooterComp,
            MenComp,
            WomenComp,
            BottomInfo,
            ProductNavBar,
            LaptopComp
        }
    }
</script>

<style scoped>

</style>