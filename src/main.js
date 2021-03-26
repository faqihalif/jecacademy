import Vue from 'vue'
import router from './router/index.js'
import store from './store'

import './assets/css/app.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
