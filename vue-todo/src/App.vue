<template>
  <div id="app">
    <TodoHeader></TodoHeader>  
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> 
    <TodoList
     v-bind:propsdata="todoItems"
     v-on:removeItem="removeOneItem"
     v-on:toggleItem="toggleOneItem">
     </TodoList>  
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>       
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function(){
    return {
      todoItems: []
    }
  },
  methods:{
    addOneItem: function(todoItem){
      const obj = {completed: false, item: todoItem};
      //this는 todoinput component를 가리킴
      // localStorage.setItem(this.newTodoItem, obj));
      // 위처럼 쓰면 obj의 값을 알수가 없다.
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){      
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1) // index에서 몇개(1개)를 지우겠다
    },
    toggleOneItem: function(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬 스토리지의 데이틀를
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function(){
      localStorage.clear();
      this.todoItems = [];
    }
  }, // 최상위 컴포넌트에서 기능적인 측면을 묶고, 각각의 컴포넌트에는 형태만 갖추는 식으로 구성하는게 데이터가 꼬이지않는다. 중앙관리식의 데이터 조작, 한 컴포넌트에서 데이터를 갖고 다른 컴포넌트는 데이터의 요청만 한다. 
  created: function(){
    if (localStorage.length > 0){
      for(var i = 0; i < localStorage.length; i ++){
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
             this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            // console.log(localStorage.key(i));        
        }
      }
    }
  },
 components : {
   "TodoHeader": TodoHeader,
   "TodoInput": TodoInput,
   "TodoList": TodoList,
   "TodoFooter": TodoFooter,
 }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }

  input {
    border-style: groove;
    width: 200px;
  }    
  button {
      border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
