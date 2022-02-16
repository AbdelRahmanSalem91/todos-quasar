import { compileTemplate } from "vue/compiler-sfc";

const state = {
  todos: {
    'ID1': {
      todo: "Go to shop",
      completed: false,
      dueDate: "5/5/2022",
      dueTime: "20:30",
    },
    'ID2': {
      todo: "Go to cafe",
      completed: false,
      dueDate: "5/5/2022",
      dueTime: "20:30",
    },
    'ID3': {
      todo: "Go to sleep",
      completed: false,
      dueDate: "5/5/2022",
      dueTime: "20:30",
    }
  }
}
const mutations = {
  updateTodo(state, payload){
    Object.assign(state.todos[payload.id], payload.updates)
  }
}
const actions = {
  updateTodo({}, payload){
    compileTemplate('updateTodo', payload)
  }
}
const getters = {
  todos: (state) => {
    return state.todos
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
