<script setup>
    defineProps({
        name : {
            type:String,
            required: true
            }

    })
</script>
<template>
    <button class = "bottomButton" >{{name}}</button>
</template>

<style scoped>
    .bottomButton{
        width:200px;
        height:75px;
        border-radius: 10px;
        background-color: wheat;
        color:#2183b0;
        box-shadow: 2px 10px 15px  rgb(111, 242, 203);
        border: solid 4px #2183b0;
        font-size: 32px;
    }

    @media only screen and (max-height: 875px)  {
        .bottomButton{
            width:135px;
            height:50px;
            font-size:20px;
        }
    }
</style>