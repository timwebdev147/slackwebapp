import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faB, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas);
library.add(far)
library.add(faB)
// library.add(fat))
dom.watch();

createApp(App).component('font-awesome-icon', FontAwesomeIcon)

// import './assets/fonts/all.css'
// import Vue from 'vue'
// import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/css/bootstrap-vue.css'

createApp(App).mount('#app')
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

// document.getElementById("#app").style.margin = "0";