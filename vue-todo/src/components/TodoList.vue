<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
       <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>      
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      todoItems: []
    }
  },
  methods:{
    removeTodo: function(todoItem, index){
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1) // index에서 몇개(1개)를 지우겠다
    },
    toggleComplete: function(todoItem){
      todoItem.completed = !todoItem.completed;
      // 로컬 스토리지의 데이틀를
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  created: function(){
    if (localStorage.length > 0){
      for(var i = 0; i < localStorage.length; i ++){
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
             this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            // console.log(localStorage.key(i));        
        }
      }
    }
  }
}
</script>

<style>
  ul {
    list-style-type: none;
    padding-top: 0;
    margin-top: 0;
    text-align: left;
    padding-inline-start: 0;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn{
    margin-left: auto;
    color: #dc4343;
  }  
  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted{
    color: #b3adad;
  }
  .textCompleted{
    text-decoration: line-through;
    color: #b3adad;
  }  
</style>