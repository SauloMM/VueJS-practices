<template lang="html">
    <div id="add-form">
            <h2>Formulário para contato</h2>
            <label>e-mail</label>
            <input>
            <label>Assunto</label>
            <input>
            <label>Mensagem</label>
            <textarea rows="8" cols="80"></textarea>
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

</style>
