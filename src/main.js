import Vue from 'vue'
import App from './App.vue'

//store
import store from './store'

Vue.config.productionTip = false

new Vue({

  //bootstrapping section
  store,

  render: h => h(App),
}).$mount('#app')
