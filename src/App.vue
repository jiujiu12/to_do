<template>
  <div id="app">
    <section>
      <!--头部-->
      <header class="header">

        <h1>todos</h1>
        <input class="list" v-on:keyup.enter="submit" v-model="newtodo" >

      </header>
      <!--/头部-->
      <!--todolist-->
      <main>
        <ul class="todo-list">
          <li class="todos"  v-for="(items,i) in todolists" :key="items.id">
            <div>
              <input class="select" type="checkbox" :value="items" >
              <label class="taskText">
                {{items.name}}
              </label>
              <button class="del" @click="del(i)">x</button>

            </div>
          </li>
        </ul>

      </main>
      <!--/todolist-->
      <!--底部-->
      <footer>

      </footer>
      <!--/底部-->

    </section>
  </div>
</template>
<script>

export default {

  name: 'App',
  data(){
    return{
      newtodo : '',
      /** lists **/
      todolists:[
        { id : 1,
          name : 'learning',
          completed: false,
        },
        { id : 2,
          name : 'eating',
          completed: false,
        },
        { id : 3,
          name : 'hello',
          completed: false,
        },
      ],
      /** /lists **/
    }
  },
  computed:{
    //选中值发生变化
    /*selectsChange: {
      return [];
    }
*/
  },
  watch:{
    selects: function (newSelects,oldSelects) {

      return newSelects
    }
  },

  /** methods **/
  methods : {
    /**
     * submit begin
     * @return(void)
     * @description：每次按下键盘“enter”键后将待办添加
     **/
    submit() {

      let topId = this.todolists[this.todolists.length-1];
      this.todolists.push
      ({
        id : (topId+1),
        name : this.newtodo,
        isSelected : false
      });
      this.newtodo = '';
      localStorage.setItem("list",JSON.stringify(this.todolists));
    },
    /**
     * @Params: val 要删除元素名
     * @return(void)
     * @description: 删除方法
     */
    del(index){
        this.todolists.splice(index,1);
      localStorage.setItem("list",JSON.stringify(this.todolists));
      console.log(this.todolists)
    },
    /**
     * @description: display delLine
     **/


  },
  /** /methods **/

  mounted(){
    let list = JSON.parse(localStorage.getItem("list"));
    if (list){
      this.todolists =list;
    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  color: brown;
  text-align: center;
  font-size: 100px;
}
  ul{
    list-style: none;
  }
  .todos{
    width: 50%;
    margin-left: 25%;
  }
  .select{
    margin-left: 1%;
  }
  .taskText{
    /*text-decoration: line-through;*/
  }
  .select{
    background-color: white;

  }
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 18px;
  margin-right: 10px;
  position: relative;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

input[type="checkbox"]:checked::before {
  content: "\2713";
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #7D7D7D;
  border-radius:4px;
  color: #7D7D7D;
  font-size: 20px;
  font-weight: bold;
}
</style>
