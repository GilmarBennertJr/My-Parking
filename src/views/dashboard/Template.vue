<template>
  <div class="container">
    <my-header v-bind:title="title"></my-header>    
    <router-view></router-view>
    <!--vee-form @submit="save" :validation-schema="schema" v-slot="{ errors }">
      <div class="row g-2">
        <div class="col-md-4">
          <label for="nome">Nome</label>
          <vee-field name="nome" class="form-control" v-model="reserva.nome" />
          <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
        </div>

        <div class="col-3">
          <label for="">Data Reserva</label>          
          <vee-field type="date" name="dataReserva" class="form-control" v-model="reserva.dataReserva" />
          <span class="text-danger" v-text="errors.dataReserva" v-show="errors.dataReserva"></span>          
        </div>

        <div class="col-3">
          <label for="">Hora de Entrada</label>
          <vee-field type="time" name="horaEntrada" class="form-control" v-model="reserva.horaEntrada" />
          <span class="text-danger" v-text="errors.horaEntrada" v-show="errors.horaEntrada"></span>          
        </div>

        <div class="col-2">
          <label for="">Qtd. Horas</label>
          <vee-field type="number" name="qtdHoras" class="form-control" v-model="reserva.qtdHoras" />
          <span class="text-danger" v-text="errors.horaEntrada" v-show="errors.qtdHoras"></span>
        </div>      

        <div class="col-4">
          <label for="">Placa</label>
          <vee-field name="placa" class="form-control" v-model="reserva.placa" />
          <span class="text-danger" v-text="errors.placa" v-show="errors.placa"></span>
        </div>

        <div class="col-4">
          <label for="">Modelo</label>
          <vee-field name="modelo" class="form-control" v-model="reserva.modelo" />
          <span class="text-danger" v-text="errors.modelo" v-show="errors.modelo"></span>
        </div>

        <div class="col-4">
          <label for="">Ano</label>
          <vee-field type="number" name="ano" class="form-control" v-model="reserva.ano" />
          <span class="text-danger" v-text="errors.ano" v-show="errors.ano"></span>
        </div>
  
        <div class="col-12">
          <button type="submit" class="btn btn-primary" style="margin-right: 5px">Save</button>
          <button type="button" class="btn btn-danger" @click="clear">Limpar</button>
        </div>
      </div>
    </vee-form>

    <hr>

    <div class="text-center" v-if="reservas.length === 0">
      Não há reservas cadastradas
    </div>
    <table class="table" v-else>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data Reserva</th>
          <th>Hora de Entrada</th>
          <th>Qtd Horas</th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reserva in reservas" :key="reserva.id">
          <td>{{ reserva.nome }}</td>
          <td>{{ reserva.dataReserva }}</td>
          <td>{{ reserva.horaEntrada }}</td>
          <td>{{ reserva.qtdHoras }}</td>
          <td>{{ reserva.placa }}</td>
          <td>{{ reserva.modelo }}</td>
          <td>{{ reserva.ano }}</td>
        </tr>
      </tbody>
    </table-->
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
    }
  }
</script>