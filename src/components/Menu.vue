<template>
   <div>
     <a class="menu-list" v-for="(item,index) in toDoParent" :key="index">
       {{item.name}}
     </a>
   </div>
</template>

<script>
  import moke from './../mock/moke'
    export default {
      name: "Menu",
      data(){
        return{
          toDoParent:[{id:1,name:'Cate',count:1}],
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
