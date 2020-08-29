<template>
  <div class="jumbotron">
    <h1 class="display-4">Dobro došli u aplikaciju TopDoktor</h1>
    <hr class="my-4" />
    <h3 class="display-5">Pronađite i ocjenite vašeg doktora:</h3>
    <br />
    <div v-if="islogged">
      <router-link to="/doktori" tag="button">Doktori</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doktori",
  data() {
    return {
      islogged: localStorage.getItem("usertoken"),
    };
  },
  methods: {},
  mounted() {
    console.log(localStorage.getItem("usertoken"));
  },
};
</script>