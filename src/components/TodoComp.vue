<template>
    <div>
        <h1>Todo App</h1>
        <input type="text"  placeholder="What do u want to add?" v-model="name" />
        <button @click="add">Add Todo</button>
        <ul>
            <li  class="list"  v-for="(todo,index) in todos" :key="todo">{{todo}}
                <span @click="remove(index)" class="remove">X</span>
            </li>
        </ul>
    </div>
</template>

<script>
import{ref} from 'vue'
    export default {
        name:'TodoComp',

        setup(){
            const name=ref('')
            const todos=ref([])

           function add(){
            if(name.value !=''){
                todos.value.push(name.value)
                name.value='';
                console.log(todos.value)
            }
                
            }
            function remove(id){
                todos.value.splice(id,1)
                console.log(id)
            }

            return{
                name,
                todos,
                add,
                remove
            }
        }
    }
    
</script>

<style scoped>
.list{
  margin-top:20px;
}
.remove{
    padding:10px;
    border-radius:30px;
    background-color:red;
    color:white;
}
.remove:hover{
    cursor:pointer;
}

</style>