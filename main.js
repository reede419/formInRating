import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import vSelect from 'vue-select'
import router from '../router'
import store from '../store'
// import DatePicker from 'vue2-datepicker'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faCheck, faFile, faSquare, faAd, faPhone, faMapMarker, faThLarge, faThList, faAngleDown, faAngleRight, faExclamationTriangle, faTimesCircle, faAngleUp, faEdit, faEnvelope, faSearch, faArrowRight, faPlus, faTimes, faHeart, faSignOutAlt, faBuilding, faEllipsisV, faGlobe, faCaretRight, faCommentAlt, faEye, faArrowAltCircleRight, faArrowAltCircleLeft, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faFile, faSquare, faAd, faPhone, faMapMarker, faThLarge, faThList, faAngleDown, faTimesCircle, faAngleUp, faAngleRight, faExclamationTriangle, faEdit, faEnvelope, faSearch, faArrowRight, faPlus, faHeart, faTimes, faSignOutAlt, faBuilding, faEllipsisV, faGlobe, faCaretRight, faCommentAlt, faEye, faArrowAltCircleRight, faArrowAltCircleLeft, faDownload)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)
Vue.use(BootstrapVue)
// Vue.use(router)

// DatePicker.install(Vue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
