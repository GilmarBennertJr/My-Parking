<template>
  <div id="app">
    <my-header :title="title"></my-header>

    <div class="container">

      <form @submit.prevent="save">
        <div class="row gy-2">
          <div class="col-sm-4">
            <label>Nome do Solicitante</label>
            <input type="text" class="form-control" v-model="reserva.solicitante" required>
          </div>
          <div class="col-sm-3">
            <label>Data da reserva</label>
            <input type="date" class="form-control" v-model="reserva.dataReserva" :min="dataAtual" required>
          </div>
          <div class="col-sm-3">
            <label>Hora de entrada</label>
            <input type="time" class="form-control" v-model="reserva.horaEntrada" required>
          </div>
          <div class="col-sm-2">
            <label>Horas de reserva</label>
            <input type="number" class="form-control" v-model="reserva.horasReserva" required>
          </div>
          <div class="col-sm-4">
            <label>Placa</label>
            <input type="text" class="form-control" v-model="reserva.placa" required>
          </div>
          <div class="col-sm-4">
            <label>Modelo</label>
            <input type="text" class="form-control" v-model="reserva.modelo" required>
          </div>
          <div class="col-sm-4">
            <label>Ano</label>
            <input type="number" class="form-control" :max="anoAtual + 2" v-model="reserva.ano" required>
          </div>
        </div>
        <div class="col-sm-12 text-right mt-2">          
          <my-button type="danger" icon="delete" @click="clear">Limpar</my-button>
          <my-button type="primary" icon="save" :submit="true">Reservar</my-button>
        </div>
      </form>

      <hr>

      <div class="text-center" v-if="reservas.length === 0">
        Não há reservas
      </div>

      <div class="row" v-if="reservas.length > 0">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th>Solicitante</th>
                <th>Data da reserva</th>
                <th>Hora de entrada</th>
                <th>Horas de reserva</th>
                <th>Placa</th>
                <th>Modelo</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(reserva, index) in reservas" :key="index">
                <td>{{ reserva.solicitante }}</td>
                <td>{{ getDateString(reserva.dataReserva) }}</td>
                <td>{{ reserva.horaEntrada }}</td>
                <td>{{ reserva.horasReserva }}</td>
                <td>{{ reserva.placa }}</td>
                <td>{{ reserva.modelo }}</td>
                <td>{{ reserva.ano }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../src/components/header/Header.vue';
import Button from '../src/components/button/Button.vue';

export default {
  components: {
    'my-header': Header,
    'my-button': Button
  },
  name: 'app',
  data () {
    return {
      title: 'Reserva de vaga de estacionamento',
      dataAtual: this.getDateUTC(new Date()),
      anoAtual: new Date().getFullYear(),
      reservas: [],
      reserva: {
        solicitante: '',
        dataReserva: this.getDateUTC(new Date()),
        horaEntrada: '00:00',
        horasReserva: 1,
        placa: '',
        modelo: '',
        ano: new Date().getFullYear()
      }
    }
  },
  methods: {
    save() {
      this.reservas.push(this.reserva);
      this.clear();
    },
    clear(msg) {
      console.log(msg)
      this.reserva = {
        solicitante: '',
        dataReserva: this.getDateUTC(new Date()),
        horaEntrada: '00:00',
        horasReserva: 1,
        placa: '',
        modelo: '',
        ano: new Date().getFullYear()
      }
    },
    getDateUTC(date) {
      return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
    },
    getDateString(date) {
      if (typeof date === 'string') {
        date = new Date(date + ' 00:00:00')
      }
      return date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getFullYear();
    }
  }
}
</script>

<style>
  .text-right {
    text-align: right;
  }
</style>
