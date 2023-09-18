<template>
      <div class="comment-section">
                <div class="text-field">
                    <h1>Let us know your problems</h1>
                    <h3>Name</h3>
                    <input class="input-1" type="text" placeholder="Name" />
                    <h3>Email</h3>
                    <input class="input-2" type="text" placeholder="Email" v-model="email"/><br/>
                    <h3>Phone</h3>
                    <input class="input-4" type="text" placeholder="Phone Number" /><br/>
                    <h3>Write your message here</h3>
                    <input class="input-3" type="message" placeholder="Leave a Message" v-model="message"/><br/>
                    <button @click="Message">Send Message</button>
                </div>
            <div class="about-field">
                <h1>Contact Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus animi dolor laudantium architecto quos ab voluptatibus,
                    unde consequuntur magnam sequi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus animi dolor laudantium architecto quos ab voluptatibus,
                    unde consequuntur magnam sequi!
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus animi dolor laudantium architecto quos ab voluptatibus,
                    unde consequuntur magnam sequi!
                </p>
                <div class="image-box-1">
                    <img src="../images/telephone.png"/>
                    <span>+233 2070 43420</span>
                </div>
                <div class="image-box-2">
                    <img src="../images/gmail.png"/>
                    <span>eshopghana@gmail.com</span>
                </div>
                <div class="image-box-3">
                    <img src="../images/maps-and-flags.png"/>
                    <span>East Legon,Opposite American House</span>
                </div>
            </div>
            <div class="hidden">Hidden</div>
        </div>
</template>

<script>
import Swal from 'sweetalert2'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
    name:'MessageComp',

    setup(){
        const message = ref('')
        const email = ref('')
        const router = useRouter()

        const Message = () =>{
            if(email.value === '' || message.value === '' ){
                Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong...',
                        text: 'Please fill out the forms'
                        })
            }else{
                router.replace('/info')
            }
             
        }
        return{
            email,
            message,
            router,
            Message
        }

    }
}
</script>

<style scoped>
.comment-section{
    display:grid;
    grid-template-columns:1fr 1fr;
}
.hidden{
    opacity:0;
    height:50px;
}
.text-field{
    margin-top:30px;
    margin-left:40px;
}
.route{
    text-decoration:none;
    color:white;
}
.about-field{
    /* height:100px; */
    margin-top:20px;
    margin-left:40px;
    width:80%;
    /* border:1px solid black; */
}
h3{
    display:none;
}
.input-1{
    padding:10px 40px;
    padding-left:5px;
    margin-top:20px;
}
.input-2{
   padding:10px 40px;
    padding-left:5px;
    margin-left:20px;
}
.input-4{
    padding:10px 40px;
    padding-left:5px;
    margin-top:20px;
}
.input-3{
   padding:70px;
   width:50%;
    padding-left:5px;
    margin-top:20px;
}

.input-1::placeholder{
    font-size:15px;
}
.input-2::placeholder{
    position:absolute;
    /* top:0px; */
      left:5px;
    font-size:15px;
}
.input-3::placeholder{
    position:absolute;
    /* top:0px; */
    left:5px;
    font-size:15px;
}
.input-4::placeholder{
    position:absolute;
    /* top:0px; */
     left:5px;
    font-size:15px;
}
button{
    padding:15px;
    width:30%;
    margin-top:30px;
    background-color:orangered;
    color:white;
    border:none;
    font-weight: lighter;
    font-size:18px;
}
button:hover{
    cursor:pointer
}
img{
    width:20px;
}
img:hover{
    cursor:pointer;
}
.about-field p{
    margin-top:20px;
}
span{
    margin-left:10px;
}
.image-box-1{
    margin-top:40px;
}
.image-box-2{
    margin-top:20px;
}
.image-box-3{
    margin-top:20px;
}


@media screen and (max-width:767px){
    .comment-section{
        height:200vh;
        display:grid;
        grid-template-columns:1fr;
    }
    .about-field{
        margin-top:5px;
    }
   h3{
    display:block;
    font-size:16px;
    font-weight:lighter;
    margin-top:15px;
   }
   .input-1{
    margin-top:10px;
   }
   .input-2::placeholder{
    visibility:hidden;
   }
   .input-3::placeholder{
    visibility:hidden;
   }
   .input-4::placeholder{
    visibility:hidden;
   }
   .input-1::placeholder{
    visibility:hidden;
   }
   .input-2{
    margin-top:10px;
    margin-left:0px;
   }
   .input-3{
    margin-top:10px;
   }
   .input-4{
    margin-top:10px;
   }
   button{
    width:50%;
   }
}
</style>
