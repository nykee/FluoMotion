import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

    pid:'001'
  },
  mutations: {
    setid: (state,id) => state.pid= id
  }
});

export default  store;
