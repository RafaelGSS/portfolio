import mobile from 'is-mobile'
import Vue from 'vue'

Vue.use({
  install (Vue) {
    if (!Vue.prototype.isMobile) {
      Vue.prototype.isMobile = mobile()
    }
  }
})
