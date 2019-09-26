export const state = () => ({
  content: [],
  detail: [],
  tasks: []
})

export const getters = {
  content(state) {
    return state.content
  },
  detail(state) {
    return state.detail
  },
  tasks(state) {
    return state.tasks
  }
}

export const mutations = {
  setContent(state, payload) {
    state.content = payload
  },
  setDetail(state, payload) {
    state.detail = payload
  },
  setTasks(state, payload) {
    state.tasks = payload
  }
}


export const actions = {
  async fetchTasks({commit}) {
    try {
      const tasks = await (this as any).$axios.get('/api/task')
      commit('setTasks')
    } catch {

    }
  },
  async createTask({commit}, {content,detail}) {
    try {
      const task = await (this as any).$axios.post('/api/task', {
        content: content,
        detail: detail
      })
      commit('setTasks')
    } catch (error) {

    }
  }
}
