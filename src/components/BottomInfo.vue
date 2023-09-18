<template>
    <div class="info-table">
               <div class="info-grid">

                   <div class="info-grid-1">
                    <h1>My Account</h1>
                        <ul>
                            <li><a>Orders</a></li>
                            <li><a>Checkout</a></li>
                            <li><a>Cart</a></li>
                        </ul>
                   </div>

                   <div class="info-grid-2">
                    <h1>Categories</h1>
                        <ul>
                            <router-link class="route" to="/products">
                                <li>Laptops</li>
                            </router-link>
                            <router-link class="route" to="/products">
                                <li>Sneakers</li>
                            </router-link>
                            <router-link class="route" to="/products">
                                <li>Men's Clothing</li>
                            </router-link>
                            <router-link class="route" to="/products">
                                <li>Women's Clothing</li>
                            </router-link>
                        </ul>
                   </div>

                   <div class="info-grid-3">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi molestiae expedita dolores. Explicabo praesentium obcaecati quo, voluptates corrupti, </p>
                   </div>

                   <div class="info-grid-4">
                    <h1>Useful links</h1>
                    <ul>
                        <router-link to="/" class="route"><li>Home</li></router-link>
                        <router-link to="/about" class="route"><li>About</li></router-link>
                        <router-link to="/contact" class="route"><li>Contact</li></router-link>
                        <router-link to="/products" class="route"><li>Products</li></router-link>
                    </ul>
                   </div>
                
               </div>
               <footer>
                <h1>CopyRight&copy;2023</h1>
               </footer>

               <div class="hidden">hidden</div>
    </div>
</template>

<script>
    export default {
        name:'BottomInfo'
    }
</script>

<style scoped>
.hidden{
    opacity:0;
    height:60px;
}
.route{
    color:white;
    text-decoration:none;
}
.route:hover{
    opacity:0.5;
}
ul{
    margin-top:20px;
}
li{
    list-style:none;
}
.info-table{
    background-color:#122640;
}
.info-table h1{
    font-size:20px;
    margin-top:30px;
}
.info-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    color:white;
    margin-left:90px;
}
.info-grid-3 p{
    margin-top:20px;
   width:60%;
}
footer{
    text-align:center;
    font-size:18px;
    margin-top:30px;
    color:white;
}

@media screen and (max-width:768px){
    .info-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    color:white;
    margin-left:50px;
    }
    .info-table h1{
        font-size:15px;
        margin-top:30px;
    }
    .info-grid-3 p{
        margin-top:10px;
       width:70%;
       font-size:10px;
    }
    ul{
        margin-top:5px;
    }
    li{
        font-size:13px;
    }
    a:hover{
        opacity:0.5;
        cursor:pointer;
    }
    footer{
    text-align:center;
    font-size:12px;
    margin-top:10px;
    color:white;
    }
    }
</style>