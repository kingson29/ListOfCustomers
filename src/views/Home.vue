<template>
  <div class="home">
    <h1>All My Customer</h1>
    <div class='card' v-for="tran in all" :key="tran.id">
      <h3>Email: {{tran.customer.email}}</h3>
      <p>Gender: {{tran.customer.gender}}</p>
      <p>Age: {{tran.customer.age}}</p>
      <p>Satisfaction: {{tran.customer.satisfaction}}</p>
    </div>
    <button @click="nextpage()">NextPage</button>
    <button @click="backpage()">Back</button>
  </div>
</template>

<script>
import APIService from '../Services/api'
export default {
  name: 'home',
  data() {
    return {
      all: [],
      pagenum: 0,
    }
  },
  methods: {
    nextpage() {
      this.pagenum += 1;
      APIService.getAllContent(this.pagenum)
      .then(res => {
        this.all = res.data
      })
    },
    backpage() {
      this.pagenum == 0 ? this.pagenum = 0 : this.pagenum -= 1;
      APIService.getAllContent(this.pagenum)
      .then(res => {
        this.all = res.data
      })
    }
  },
  created() {
    APIService.getAllContent(this.pagenum)
      .then(res => {
        this.all = res.data
      })
  }
}
</script>

<style scoped>
.card {
  width: 30vw;
  height: auto;
  background: #b388ff;
  margin: 1%;
  padding: 1%;
  text-align: center;
}
</style>