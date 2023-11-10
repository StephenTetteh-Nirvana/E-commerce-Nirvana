<template>
  <div class="image">
     <div class="center-text">

      <div class="image-container"> 
        <img src="../images/icons8-worldwide-delivery-50.png"/>
         <h1 class="urban">TrendyEra</h1>
      </div>

     <p>This is the official website of TrendyEra.TrendyEra is basically an online market and our only purpose is to serve u with the best and latest products on the market at a very affordable price.</p>

        <ul>
          <li>
            <img src="../images/icons8-facebook-48.png"/>
          </li>
          <li>
            <img src="../images/icons8-twitter-48.png"/>
          </li>
          <li>
            <img src="../images/icons8-instagram-48.png"/>
          </li>
          <li>
            <img src="../images/icons8-linkedin-48.png"/>
          </li>
          <li>
            <img src="../images/icons8-pinterest-48.png"/>
          </li>
        </ul>

      <footer>&copy;2023 All Rights Reserved.<span>TrendyEra EnterPrises</span></footer>
    </div>


  </div>
</template>

<script>
    export default {
        name:'BottomInfo'
    }
</script>

<style scoped>
.image{
    background-image:url(../images/clouds.jpg);
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    height:50vh;
    position:relative;
    text-align:center;
}
.center-text{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.center-text h1{
  color:red;
}
.center-text p{
  margin-top:20px;
}
.urban{
  font-family: 'ADLaM Display', sans-serif;
    font-size:40px;
    color:red;
    transform:translateY(10px);
    margin-left:10px;
}
span{
  color:red;
  font-weight:bold;
}
.image-container{
    margin-top:10px;
    display:flex;
    text-align:center;
    margin-left:30%;
}
.image-container img{
    margin-top:10px;
    width:50px;
    height:50px;
}
img:hover{
    cursor:pointer;
}
ul{
  margin-top:10px;
}
ul li{
  display:inline;
  list-style:none;
  margin-left:10px;

}
ul li img:hover{
  transform:scale(1.1);
  transition:300ms transform;
}
footer{
  margin-top:20px;
}
</style>