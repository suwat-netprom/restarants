require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'

import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import routes from './routes'
import store from './store'
import App from './components/App.vue'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.use(VueGoogleMaps, {
    load: {
        key: '**********ENTER GOOGLE API KEY**********',
        libraries: 'places,drawing',
    },
    installComponents: true
})

const app = new Vue({
    el: '#app',
    store,
    components: { App },
    router: new VueRouter(routes),
})
