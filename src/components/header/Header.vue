<template>
    <div class="container mt-3">
        <div class="text-center">
            <img src="../../assets/logo.png" class="width300px">
        </div>
        <hr>
        <h4 v-text="title"></h4>
        <hr>
    </div>
</template>
<script>
    export default {
        props: ['title']
    }
</script>
<style>
    .width300px {
        width: 300px;
    }
</style>