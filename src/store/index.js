import { createStore } from 'vuex'

export default createStore({
  state: {
      lang: 0,
  },
  getters: {
      getLang(state){
          return state.lang;
      }
  },
  mutations: {
    changeLanguage(state, lang){
        state.lang = lang;
    }
  },
  actions: {
  },
  modules: {
  }
})
