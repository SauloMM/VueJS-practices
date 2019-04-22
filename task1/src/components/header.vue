<template>
    <nav>
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/add">Formulário</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/texto">Contato</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    list-style-type: none;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
    color: white;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #F34B4B;
    padding: 14px 0;
    margin-bottom: 40px;
}

</style>
