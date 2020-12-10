import Vue from 'vue'
import Vuex from 'vuex'

import restaurantsModule from './modules/restaurants-module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        restaurantsModule
    }
})
