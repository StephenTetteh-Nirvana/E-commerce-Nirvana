<template>
 <div class="container">
      <h2 class="con-head">Why Choose Us?</h2>
       <div class="box-head">
                <div class="grid-box-1">
                    <div class="image-container">
                        <div class="img-box">
                            <img src="../images/truck.png"/>
                        </div>
                    </div>
                    <div class="bottom-section">
                        <h1>Delivery Services</h1>
                        <p> Our delivery services provide efficient transportation and distribution.
                           Our Top priority is to ensure swift and reliable transportation of goods.   
                        </p>
                    </div>
                </div>
                <div class="grid-box-2">
                    <div class="image-container">
                        <div class="img-box">
                            <img src="../images/shield.png"/>
                        </div>
                    </div>
                    <div class="bottom-section">
                        <h1>Full Protection</h1>
                        <p> We put in safety measures that prioritize protection and well-being of our products.
                            There is also security measures to ensure safety and safeguarding of our products.
                            </p>
                    </div>
                </div>
                <div class="grid-box-3">
                    <div class="image-container">
                        <div class="img-box">
                            <img src="../images/best-price.png"/>
                        </div>
                    </div>
                    <div class="bottom-section">
                        <h1>Affordable Prices</h1>
                        <p>Many people because of our prices or the rates we provide to our customers.
                            We make sure we always have competitive rates to offer affordability and value.
                             </p>
                    </div>
                </div>
       </div>
       <div class="hidden"></div>
    </div>
</template>

<script>
    export default {
        name:'ServicesComp',
    }
</script>

<style scoped>
.container{
    background-color:#ffffff;
}
.hidden{
    opacity:0;
    height:60px;
}
h1{
    position:relative;
    top:6%;
    text-align:center;
    font-size:50px;
    font-weight:lighter;
}
.con-head{
    text-align:center;
     font-size:40px;
     transform:translateY(40px);

}
.grid-box-1{
    display:grid;
    grid-template-rows:1fr 2fr;
    width: 350px;
    height:340px;
    cursor:pointer;
    /* border:10px solid white; */
    background:white;
  border-radius:8px;
  overflow: hidden;
  transition:all 0.4s ease-in-out;
  /* box-shadow: 10px 10px 10px 10px rgb(224, 220, 220); */
}
.grid-box-1:hover{
    transform:translateY(-20px);
    border:1px solid grey;
}
.grid-box-2:hover{
    transform:translateY(-20px);
    border:1px solid grey;

}
.grid-box-3:hover{
    transform:translateY(-20px);
    border:1px solid grey;

}
.grid-box-4:hover{
    transform:translateY(-20px);
    border:1px solid grey;

}
.grid-box-2{
    display:grid;
    grid-template-rows:1fr 2fr;
    width: 350px;
    height:340px;
    cursor:pointer;
    margin-left:10px;
    background:white;
  border-radius: 8px;
  overflow: hidden;
  transition:all 0.4s ease-in-out;
  /* box-shadow: 10px 10px 10px 10px rgb(224, 220, 220); */
}
.grid-box-3{
    display:grid;
    grid-template-rows:1fr 2fr;
    width: 350px;
    height:340px;
    cursor:pointer;
    margin-left:10px;
    background:white;
  border-radius: 8px;
  overflow: hidden;
  transition:all 0.4s ease-in-out;
  /* box-shadow: 10px 10px 10px 10px rgb(224, 220, 220); */
}
.bottom-section button{
   padding:10px 50px;
   cursor:pointer;
   border-radius:20px;
   font-size:18px;
   color:white;
   text-align:center;
   position:relative;
   top:28%;
   left:24%;
   background-color:#0077b6;
   border:none;
}
.bottom-section h1{
    font-size:28px;
    text-align:center;
    /* border:1px solid black; */
    /* position:absolute; */
}
.bottom-section p{
    position:relative;
    top:14%;
    text-align:center;
    line-height:1.5rem;
}
.img-box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container{
  width: 100px;
  height: 100px;
  position:relative;
  top:10%;
  left:30%;
  border-radius: 50%;
  overflow: hidden;
  border: none;
}
.img-box img{
    max-width: 70%;
  max-height: 100%;
  object-fit: cover;
  
}
.box-head{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    /* border:1px solid black; */
    margin-top:80px;
    /* margin-left:50px; */
    place-items: center;
}

@media screen and (max-width:767px){
    h1{
    position:relative;
    top:3%;
    text-align:center;
    font-size:35px;
    font-weight:bolder;
}
.con-head{
    font-size:30px;
    transform:translateY(20px);
}
.box-head{
    display:grid;
    grid-template-columns:repeat(1,1fr);
    margin-top:30px;
    column-gap:0px;
    row-gap:10px;
    place-items:center;
    /* border:1px solid black; */
    margin-left:0px;
}
.grid-box-1:hover{
    transform:none;
}
.grid-box-2:hover{
    transform:none;

}
.grid-box-3:hover{
    transform:none;

}
.img-box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container{
  width: 50px;
  height: 50px;
  position:relative;
  top:10%;
  left:35%;
  border-radius: 50%;
  overflow: hidden;
}
.img-box img{
    max-width: 90%;
  max-height: 100%;
  object-fit: cover;
  
}
.bottom-section{
    transform:translateY(-20px);
}
.bottom-section h1{
    font-size:20px;
    text-align:center;
    font-weight:bolder;
    margin-top:10px;
}
.bottom-section p{
    position:relative;
    top:5%;
    text-align:center;
    line-height:1.5rem;
    font-size:12px;
    font-weight:bolder;
}

.grid-box-1{
    display:grid;
    grid-template-rows:1fr 2fr;
    width: 200px;
    height:270px;
    /* border:10px solid white; */
    background:white;
  border-radius:8px;
 
}
.grid-box-2{
    display:grid;
    grid-template-rows:1fr 2fr;
    width: 200px;
    height:270px;
    background:white;
  border-radius:8px;
  transition:all 0.4s ease-in-out;
  margin-left:0px;
  /* box-shadow: 10px 10px 10px 10px rgb(224, 220, 220); */
}
.grid-box-3{
    display:grid;
    grid-template-rows:1fr 2fr;
    width: 200px;
    margin-left:0px;
    height:270px;
    margin-top:0px;
    background:white;

}
.grid-box-1:hover{
    transform:none;
    border:none;
}
.grid-box-2:hover{
    transform:none;
    border:none;

}
.grid-box-3:hover{
    transform:none;
    border:none;

}
.grid-box-4:hover{
    transform:none;
    border:none;

}

}

</style>