<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import header from './components/header.vue'
import home from './components/home.vue'
import addForm from './components/addForm.vue'
import login from './components/login.vue'
import texto from './components/texto.vue'

export default {
    components:{
        'app-header': header,
        'app-home': home,
        'app-form': addForm,
        'app-login': login,
        'app-texto': texto
    },
    data () {
        return {

        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

body{
    margin: 0;
    font-family: 'Nunito', sans-serif;
}

</style>
