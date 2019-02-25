<template>
  <div class="container">
    <div id="app">
      <form class="col-md-6 offset-md-3" v-on:submit.prevent="addTodoAndClearInput">
          <div class="form-group">
            <input v-model="todo"  type="text" class="form-control mb-2"  aria-describedby="emailHelp" placeholder="Enter email">
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
          </div>
      </form>
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import store from './store.js'
import { mapMutations } from 'vuex';
// import Home from './components/Post.vue'
// import Home from './components/Profile.vue'
// import Home from './components/Login.vue'
// import Home from './components/Register.vue'

export default {
  name: 'app',
  components: {
    Todos
  }, 
  store,
  data() {
    return {
      todo: '',
      showTodos: false
    }
  }, 
  methods: {
    ...mapMutations(['addTodo']),
    addTodoAndClearInput() {
      this.addTodo({todo: this.todo});
      this.todo = '';
    }
  },
  computed: {
  },
}
</script>

<style>
  #app {
    padding-top: 60px;
  }
</style>
