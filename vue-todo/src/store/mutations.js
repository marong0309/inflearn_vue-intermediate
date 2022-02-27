const addOneItem = (state, todoItem) => {           
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
    // //this는 todoinput component를 가리킴
    // // localStorage.setItem(this.newTodoItem, obj));
    // // 위처럼 쓰면 obj의 값을 알수가 없다.     
  }

  const removeOneItem = (state, payload) => {                           
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1) 
    // index에서 몇개(1개)를 지우겠다
  }

  const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // 로컬 스토리지의 데이틀를
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  }

  const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
  }

  export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }