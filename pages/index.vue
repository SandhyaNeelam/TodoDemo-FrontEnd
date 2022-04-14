<template>
<div>

  <div id="todo" class="header">
        <h2>My Todo</h2>
        <input type="text" id ="todo" placeholder="whats new!" v-model="item" />
        <button @click="createTodo()" class="add">Add</button>
  </div>

  <login-form  v-if="token == null"/>
  <div class="todo-list" v-if="todos.length > 0">
    <todo v-for="item in todos" :key= "item.id" :item="item" />
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import LoginForm from '~/components/LoginForm.vue'
import Todo from '~/components/Todo.vue'

export default {
  name: 'IndexPage',
  components: {
    LoginForm,
    Todo
    },
  computed: {
    ...mapState(['token', 'todos']),
    },
    methods: {
      async createTodo() {
            await this.$store.dispatch('createTodo', this.item)
            // this.title= ""
          }
    }

}
</script>

<style scoped>
.add{
  background-color: rgba(11, 240, 187, 0.902);
  cursor: pointer;
  border-radius: 16px;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

.header {
  background-color: #349c86;
  padding: 5px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

</style>
