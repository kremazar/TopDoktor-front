<template>
  <div>
    <h1>Najbolji doktori</h1>
    <div v-for="item in najbolji" :key="item.id" class="card m-auto" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{item.ime}} {{item.prezime}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{item.specijalizacija}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{item.bolnica}}</h6>
        <router-link
          class="card-subtitle mb-2 text-muted btn btn-warning"
          :to="{ name: 'Doktor', params: { id: item.id }}"
        >Prosjek ocjena: {{item.prosjek}}</router-link>
        <br />
        <br />
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
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>