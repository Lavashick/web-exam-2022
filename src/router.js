import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
    ],
    mode: 'history'
}) 