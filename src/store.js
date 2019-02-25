import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },
    removeTodo(state, payload) {
      let newTodos = state.todos.filter((todo, index) => todo[index] != todo[payload.value]);
      state.todos = newTodos;
    }
  },
  actions: {

  }
})