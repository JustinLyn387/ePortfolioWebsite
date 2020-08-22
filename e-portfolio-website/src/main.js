import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueDiagonal from 'vue-diagonal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faFacebookSquare, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faFacebookSquare, faInstagram, faLinkedinIn, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-diagonal', VueDiagonal)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
