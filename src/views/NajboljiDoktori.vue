<template>
  <div>
    <h1>Najbolji doktori</h1>
    <br />
    <br />
    <div class="col-8 m-auto">
      <div v-for="item in najbolji" :key="item.id" class="card text-center mb-5">
        <div class="card-header bg-secondary text-white">Doktor</div>
        <div class="card-body mb-5">
          <h2 class="card-title">{{item.ime}} {{item.prezime}}</h2>
          <p class="card-text">Specijalizacija: {{item.specijalizacija}}</p>
          <p class="card-text">Bolnica: {{item.bolnica}}</p>
          <router-link
            class="card-subtitle mb-2 text-muted btn btn-warning"
            :to="{ name: 'Doktor', params: { id: item.id }}"
          >
            <p
              style="text-overflow: '----';width: 145px;overflow: hidden; white-space: pre;"
            >Prosjek ocjena: {{item.prosjek}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Najbolji } from "@/services";
export default {
  name: "Najboljidoktori",
  data() {
    return {
      najbolji: {},
    };
  },
  methods: {},
  created() {
    /* const path = "http://localhost:5000/najbolji"; */
    Najbolji.getAll()

      .then((res) => {
        this.najbolji = res.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
