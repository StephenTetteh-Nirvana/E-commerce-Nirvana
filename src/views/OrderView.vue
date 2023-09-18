<template>
    <OrderNavBar></OrderNavBar>
    <OrderComp></OrderComp>
</template>


<script>
import OrderComp from "@/components/OrderComp.vue"
import OrderNavBar from "@/components/OrderNavBar.vue"


export default {
    name:'OrderView',
    components:{
        OrderComp,
        OrderNavBar
    }
}
</script>

<style scoped>

</style>