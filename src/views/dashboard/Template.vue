<template>
  <div class="container">
    <my-header v-bind:title="title"></my-header>    
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../../components/header/Header.vue';
  export default {
    components: {
      'my-header': Header
    },
    data () {
      return {     
        title: 'Cadastro e listagem de reservas'
      }
    },
    methods: {
    }
  }
</script>