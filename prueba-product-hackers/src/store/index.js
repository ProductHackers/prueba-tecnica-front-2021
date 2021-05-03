import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    todos:[]
  },
  mutations: {
    updateTodos:(state, todos) => {
      state.todos.push(...todos)
      localStorage.setItem('localTodos',JSON.stringify(state.todos))
    },
    updateFav:(state, index) => {
      if(index > -1) {
        state.todos[index].isFav = !state.todos[index].isFav
        localStorage.setItem('localTodos',JSON.stringify(state.todos))
      }
    },
    deleteTodo:(state, index) => {
      if(index > -1) {
        state.todos.splice(index,1)
        localStorage.setItem('localTodos',JSON.stringify(state.todos))
      }
    },
    completeTodo:(state, index) => {
      if(index > -1) {
        state.todos[index].isCompleted = !state.todos[index].isCompleted
        localStorage.setItem('localTodos',JSON.stringify(state.todos))
      }
    }
  },
  actions: {
    loadTodos({commit}, todos) {
      commit('updateTodos',todos)
    },
    setFavAction({commit}, todo){
      const index = this.getters.todos.findIndex(item => item.id === todo.id) // item es cada elemento de todos
      commit('updateFav',index)
      console.log(JSON.stringify(todo))
    },
    deleteItemAction({commit}, todo){
      const index = this.getters.todos.findIndex(item => item.id === todo.id) 
      commit('deleteTodo',index)
    },
    setCompletedAction({commit}, todo) {
      const index = this.getters.todos.findIndex(item => item.id === todo.id) 
      commit('completeTodo',index)
    }

  },
  getters: {
    todos: state => state.todos
  }
})
