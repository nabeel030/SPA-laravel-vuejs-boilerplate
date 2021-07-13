import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters.js'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        test: 'State Text'
    },
    mutations,
    actions,
    getters
})
