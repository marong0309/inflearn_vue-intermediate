import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
// 글로벌 기능을 추가할때 쓰는 것


const storage = {
    fetch() {        
        const arr = [];
        if (localStorage.length > 0){
            for(var i = 0; i < localStorage.length; i ++){
            if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                // console.log(localStorage.key(i));        
                }
            }
        }          
        return arr;
    },
};

export const store = new Vuex.Store({
    state:{
        todoItems: storage.fetch()
    }
});



