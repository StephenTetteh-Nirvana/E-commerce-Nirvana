<template>
    <ProductNavBar></ProductNavBar>
    <ShowcaseComp></ShowcaseComp>
    <LaptopComp></LaptopComp>
    <SneakerOp></SneakerOp>
    <MenOp></MenOp>
    <WomenOp></WomenOp>
    <FooterComp></FooterComp>
    <BottomInfo></BottomInfo>
  
</template>

<script>
import ShowcaseComp from "@/components/ShowcaseComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import BottomInfo from "@/components/BottomInfo.vue"
import ProductNavBar from "@/components/ProductNavBar.vue"
import LaptopComp from "@/components/LaptopComp.vue"
import SneakerOp from "@/components/SneakerOp.vue"
import MenOp from "@/components/MenOp.vue"
import WomenOp from "@/components/WomenOp.vue"





    export default {
        name:'ProductPage',
        components:{
            ShowcaseComp,
            FooterComp,
            BottomInfo,
            ProductNavBar,
            LaptopComp,
            SneakerOp,
            MenOp,
            WomenOp
        }
    }
</script>

<style scoped>

</style>M