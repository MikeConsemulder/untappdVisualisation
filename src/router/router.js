import VueRouter from 'vue-router'
import Welcome from '../components/Welcome.vue'
import visualize from '../components/visualisation/Visualize'

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Welcome
		},
		{
			path: '/visualize',
			name: 'visualize',
			component: visualize
		}
	]
});