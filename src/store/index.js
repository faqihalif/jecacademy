import Vue from 'vue'
import Vuex from 'vuex'
import FellowshipAndObservershipPrograms from './modules/fellowship-and-observership-programs.js'
import OphthalmicNursingPrograms from './modules/ophthalmic-nursing-programs.js'
import AlliedHealth from './modules/allied-health.js'
import Alumni from './modules/alumni.js'
import Library from './modules/library.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        FellowshipAndObservershipPrograms,
        OphthalmicNursingPrograms,
        AlliedHealth,
        Alumni,
        Library
    }
})
