import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './components/store/store'

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
