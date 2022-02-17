<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        {{ todoItem }}
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
    }
  },
  created: function(){
    if (localStorage.length > 0){
      for(var i = 0; i < localStorage.length; i ++){
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          if(localStorage.key(i) !== ''){
            this.todoItems.push(localStorage.key(i));
            // console.log(localStorage.key(i));
          }
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
  .removeBtn{
    margin-left: auto;
    color: #dc4343;
  }  
</style>