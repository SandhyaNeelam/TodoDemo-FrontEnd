const state = () => ({
    token: null,
    user_id: null,
    name: null,

    todos: [],

})

const getters = {}

const mutations = {
  setUser(state, data) {
      state.token = data.token;
      state.user_id = data.id,
      state.name = data.name
  },

  setList(state, data) {
    state.todos = data
  },

  createTodo(state, data) {
      state.todos.unshift(data)
  },

  updateTodo(state, data) {
    const index = state.todos.findIndex(todo => todo.id === data.id)
    state.todos[index].title = data.title
    state.todos[index].is_complete = data.is_complete

  }

}

const actions = {
    async login({ commit }, data) {
    // async login({ commit }, name = data.name, password= data.password) {
        const res = await this.$axios.post('http://localhost:5000/api/users/login', data)
        commit('setUser', res.data)
        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
    },

    async getAllTodos({ commit, state }) {
        const res = await this.$axios.get('http://localhost:5000/api/todo_app')
        commit('setList', res.data)
    },

    async createTodo({ commit ,state}, data) {
        const res = await this.$axios.post('http://localhost:5000/api/todo_app', { title: data })
        commit('createTodo', res.data)
    },

    async deleteTodo({ commit, state}, data) {
        const res = await this.$axios.delete('http://localhost:5000/api/todo_app/'+data)
        // commit(res)
    },

    async update({ commit, state}, data) {
        const res = await this.$axios.put('http://localhost:5000/api/todo_app/' +data.id ,{
            is_complete : data.is_complete, title : data.title
        }).then((res) => {
            console.log(res);
            console.log("response called");
            commit('updateTodo', data)
        })
    }
    // commit('commit')


}


export default {
    state,
    getters,
    mutations,
    actions
}