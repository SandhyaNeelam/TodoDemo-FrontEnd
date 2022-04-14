<template>
  <div>
    <div class="todo-item">
      <input v-model="todoText" v-if="isUpdating" type="text">
      <p v-else>{{ item.title }}</p>
      <div class="btns" v-if="item.user_id == $store.state.user_id">
        <button v-if="!isUpdating" @click="updateTodo" class="button1">
          Update
        </button>
        <button v-if="!isUpdating" @click="deleteTodo(item.id)" class="button2">
          Delete
        </button>
        <button v-else @click="submitTodo">Submit</button>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
    name: "Todo",
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
      data() {
        return{
          todo: '',
          todoText: '',
          isUpdating: false
        }
    },
    methods: {
      async deleteTodo(id){
        await this.$store.dispatch('deleteTodo',id)
      },
      async updateTodo() {
        this.isUpdating = true;
        this.todoText = this.item.title
      },
      async submitTodo() {
        this.isUpdating = false;
        await this.$store.dispatch('update', {
          id : this.item.id,
          title : this.todoText,
          is_complete : this.item.is_complete
        })
      },
       async update(id) {
                await this.$store.dispatch('update', id);
                await this.$store.dispatch('todos')
            }
    },
}
</script>

<style scoped>
.todo-item {
  display: flex;
  padding: 8px 16px;
  background-color: rgb(249, 249, 249);
  border: 1px solid grey;
  border-radius: 12px;
  margin-top: 16px;
  justify-content: space-between;
  align-items: center;
}

.button:hover {
  background-color: #f1f1f1;
}

.button1 {
  background-color: rgb(231, 194, 10);
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
.button2 {
  background-color: rgba(236, 15, 15, 0.902);
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
</style>
