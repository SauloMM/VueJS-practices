<template lang="html">
    <div id="home-page">
        <h1>Bem vindo!</h1>
        <ul>
            <router-link to="/home"><li>Home</li></router-link>
            <router-link to="/add"><li>Formulário</li></router-link>
        </ul>
        <ul>
            <router-link to="/login"><li>Login</li></router-link>
            <router-link to="/texto"><li>Contato</li></router-link>
        </ul>


    </div>

</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
h1{
    text-align: center;
}
ul{
    text-align: center;
    list-style-type: none;
    margin: 0;
}

li{
    width: 25%;
    height: 150px;
    width: 150px;
    margin: 10px;
    background-color: #C7C6C6;
    display: inline-block;
}

</style>
