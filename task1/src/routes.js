import home from './components/home.vue'
import addForm from './components/addForm.vue'
import login from './components/login.vue'
import texto from './components/texto.vue'

export default [
    {path: '/home', component: home},
    {path: '/add', component: addForm },
    {path: '/login', component: login},
    {path: '/texto', component: texto}
]
