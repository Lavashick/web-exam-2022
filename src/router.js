import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
    ],
    mode: 'history'
}) 