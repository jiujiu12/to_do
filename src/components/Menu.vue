<template>
   <div>
     <a class="menu-list" v-for="(item,index) in toDoParent" :key="index">
       {{item.name}}
     </a>
   </div>
</template>

<script>
    export default {
      name: "Menu",
      data(){
        return{
          toDoParent:[{id:1,name:'Cate'},{id:2,name:'Cate2'}],
        }
      },
      methods:{
        getToDoParent(){

        },
      }
    }
</script>

<style scoped>

</style>
