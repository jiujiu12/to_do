<template>
  <div id="app">
    <section>
      <!--头部-->
      <header class="header">

        <h1>to-dos</h1>
        <input class="list" v-on:keyup.enter="submit" v-model="newTodo" >

      </header>
      <!--/头部-->
      <!--to-do-list-->
      <main>
        <ul class="todo-list">
          <li class="todos"  v-for="(items,i) in todolists" :key="items.id">
            <div class='select'>
              <label for="select" :class="{isCompleted:items.completed}"  @change="selectChange(i)">
                 <input id="select" type="checkbox" v-model="items.completed" :value="items" >
                {{items.name}}
              </label>
              <button class="del" @click="del(i)">x</button>

            </div>
          </li>
        </ul>

      </main>
      <!--/to-do-list-->
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
      newTodo : '',
      /** lists **/
      todolists : [
        { id : 1,
          name : 'learning',
          completed: false,
        },
      ],
      /** /lists **/
    }
  },
  computed:{
    // TODO 选中值发生变化后的统计等操作
    filterToDoLists:function () {
      this.todolists.forEach(function (item) {
          if (item.completed){console.log(this);this.style.textDecoration = "line-through";}
      })
      return this.todolists;
    }

  },
  watch:{

  },

  /** methods **/
  methods : {
    /**
     * @method 提交新的代办
     * @return(void)
     * @description：每次按下键盘“enter”键后将待办添加
     **/
    submit() {
      //定义topId并赋值
      let topId;
      if (this.todolists.length === 0){topId = 0; }
      else {topId = parseInt(this.todolists[this.todolists.length-1].id);}

      //将名与newtodo值相同的值放进list数组中
      this.todolists.push
      ({
        id : (topId+1),
        name : this.newTodo,
        completed : false,
      });

      //newTodo重置为空
      this.newTodo = '';

      //将to-do-lists存储到本地浏览器
      localStorage.setItem("list",JSON.stringify(this.todolists));
    },
    /**
     * @method 删除代办
     * @param {number} index
     * @return(void)
     * @description: 删除方法
     */
    del(index){
      console.log(typeof index);
      //在to-do-lists的index处删除元素
      this.todolists.splice(index,1);
      //在本地浏览器删除指定元素
      localStorage.setItem("list",JSON.stringify(this.todolists));
    },
    /**
     * @description: 选中任务后，将数据保存在本地
     * @param: i ：index，用于确认哪个是被选中元素
     **/
    selectChange(i){
      localStorage.setItem("list",JSON.stringify(this.todolists));
    }
  },
  /** /methods **/

  /**
   * @description：挂载时从本地浏览器获取lists值
   */
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
  color: green;
  font-size: 20px;
  font-weight: bold;
}
  .isCompleted{
    text-decoration: line-through solid green;
  }
</style>
