<template>
  <div>
    <input type="text" v-model="search" placeholder="Pretraži Članke" />
    <br />
    <br />
    <div class="col-8 m-auto">
      <div v-for="item in search" :key="item.id" class="card text-center mb-5">
        <div class="card-header bg-secondary text-white">Članak</div>
        <div class="card-body mb-5">
          <h2 class="card-title">{{item.naslov}}</h2>
          <p class="card-text">{{item.opis}}</p>
          <a :href="item.link" class="btn btn-primary">Pregledaj cijeli članak</a>
        </div>
      </div>
    </div>
  </div>
</template>

   
<script>
import { Clanak } from "@/services";
export default {
  name: "Clanak",
  data() {
    return {
      clanak: [],
      trazi: "",
      message: "",
    };
  },
  methods: {},
  created() {
    /* const path = "http://localhost:5000/clanak"; */
    Clanak.getAll()
      .then((res) => {
        this.clanak = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  computed: {
    search: function () {
      return this.clanak.filter((item) => {
        return item.naslov.toLowerCase().match(this.trazi.toLowerCase());
      });
    },
  },
};
</script>