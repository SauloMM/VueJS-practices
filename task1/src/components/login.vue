<template lang="html">
    <div id="add-form">
            <h2>Login</h2>
            <label>Login</label>
            <input>
            <label>Senha</label>
            <input type="password">
            <button type="button" name="button">Entrar</button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#add-form *{
    box-sizing: border-box;
}
#add-form{
    margin: 20px auto;
    max-width: 500px;
}
h2{
    text-align: center;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input, textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
button{
    margin-top: 30px;
}

</style>
