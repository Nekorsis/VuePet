import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import ScoreScreen from './components/ScoreScreen.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: App },
  { path: '/result', component: ScoreScreen }
];

const router = new VueRouter({
  routes,
});


new Vue({
  router,
  template: `<router-view class="view"></router-view>`
}).$mount('#app')



/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/