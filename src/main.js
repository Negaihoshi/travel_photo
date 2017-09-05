import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueProgressiveImage from 'vue-progressive-image'
import VueQuillEditor from 'vue-quill-editor'
import VueRouter from 'vue-router'
import Edit from './Edit.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueProgressiveImage)
Vue.use(VueQuillEditor)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/edit', component: Edit }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
