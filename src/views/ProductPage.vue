<template>
    <ProductNavBar></ProductNavBar>
    <ShowcaseComp></ShowcaseComp>
    <LaptopComp></LaptopComp>
    <SneakerOp></SneakerOp>
    <MenComp></MenComp>
    <WomenComp></WomenComp>
    <FooterComp></FooterComp>
    <BottomInfo></BottomInfo>
  
</template>

<script>
import ShowcaseComp from "@/components/ShowcaseComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import MenComp from "@/components/MenComp.vue"
import WomenComp from "@/components/WomenComp.vue"
import BottomInfo from "@/components/BottomInfo.vue"
import ProductNavBar from "@/components/ProductNavBar.vue"
import LaptopComp from "@/components/LaptopComp.vue"
import SneakerOp from "@/components/SneakerOp.vue"



    export default {
        name:'ProductPage',
        components:{
            ShowcaseComp,
            FooterComp,
            MenComp,
            WomenComp,
            BottomInfo,
            ProductNavBar,
            LaptopComp,
            SneakerOp
        }
    }
</script>

<style scoped>

</style>