import { createStore } from "vuex";

export default createStore({
  state: {
    responsiveSidebarVisibility: false,
  },
  mutations: {
    setSidebarVisibility(state, status) {
      state.responsiveSidebarVisibility = status;
    },
  },
  actions: {},
  getters: {
    getSidebarVisibility(state) {
      return state.responsiveSidebarVisibility;
    },
  },
  modules: {},
});
