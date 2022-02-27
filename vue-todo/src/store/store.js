import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});
// 글로벌 기능을 추가할때 쓰는 것
