<template lang="html">
    <div id="text-page">
        <h1>:)</h1>
        <p v-if="tshow">{{ texto1 }}</p>
        <p v-else>{{ texto2 }}</p>
        <button type="button" v-on:click="tshow = !tshow">Troca!</button>
    </div>

</template>

<script>
export default {
    data(){
        return{
            texto1: 'Emmental pepper jack melted cheese feta cheese on toast cottage cheese cow mozzarella.',
            texto2: 'Ricotta airedale rubber cheese pepper jack dolcelatte queso roquefort red leicester. ',
            tshow: true
        }
    },
}

</script>

<style lang="css" scoped>
#text-page *{
    box-sizing: border-box;
}
#text-page{
    margin: 20px auto;
    max-width: 500px;
}
h1{
    text-align: center;
}
p{
    text-align: center;
}

</style>
