<template>
  <div class="inputBox shadow"> 
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo"> 
      <i class="fas fa-plus"></i>
    </span>

     <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->    
    <h3 slot="header">경고!
      <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
    </h3>
    <p slot="body">
      텍스트를 입력해주세요
    </p>
   
  </modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo(){
      if (this.newTodoItem !== ''){   
        // this.$emit('이벤트 이름', 인자, 인자)         
        this.$emit('addTodoItem', this.newTodoItem)
      this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput (){
      this.newTodoItem = '';
    },   
    // methods를 분할
  },
   components:{
      Modal
    }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.fas.fa-plus{
  color: white;
}
.closeModalBtn{
  color: #42b983;
}
</style>