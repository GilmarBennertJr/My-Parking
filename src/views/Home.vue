<template>
    <div class="container">
        <h1>Home!</h1>
        <div class="row">
            <div class="col-2" v-if="autenticado">
                <a href="#" @click="logout">Logout</a>
            </div>
            <div class="col-2" v-else>
                <router-link to="/auth">Login</router-link>
            </div>
            <div class="col-2">
                <router-link to="/reserva/nova">Nova Reserva</router-link>
            </div>
            <div class="col-2">
                <router-link to="/reserva/lista">Listar Reservas</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            logout() {
                this.$store.commit('autenticacaoModule/logout');
            }
        },
        computed: {
            autenticado() {
                return this.$store.state.autenticacaoModule.autenticado;
            }
        },
        mounted() {
          this.$store.state.autenticacaoModule.autenticado = localStorage.getItem('autenticado');
        },
    }
</script>
<style>
</style>