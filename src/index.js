
import Vue from 'vue'

import 'normalize.css'

import app from './components/app'

import './plugins/fa'
import './plugins/mobile'
import './plugins/particles'

Vue.config.productionTip = false

new Vue({
  render: h => h(app)
}).$mount('#app')
