import Vue from 'vue'
import App from './App.vue'

//store
import store from './store'

//import axiox
import axios from 'axios'

Vue.config.productionTip = false

 axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

new Vue({

  //bootstrapping section
  store,

  render: h => h(App),
}).$mount('#app')
