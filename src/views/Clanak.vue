<template>
  <div>
    <input type="text" v-model="trazi" placeholder="Pretraži Članke" />
    <br />
    <br />
    <div v-for="item in search" :key="item.id" class="card m-auto" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{item.naslov}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{item.opis}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{item.link}}</h6>
        <br />
        <br />
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