import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueProgressiveImage from 'vue-progressive-image'
import VueQuillEditor from 'vue-quill-editor'

Vue.use(Vuetify)
Vue.use(VueProgressiveImage)
Vue.use(VueQuillEditor)

new Vue({
  el: '#app',
  render: h => h(App)
})
