<template>
  <div class="dodaj_clanak">
    <h1>Dodaj Članak</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <form @submit.prevent="DodajClanak">
            <div class="form-group">
              <label for="naslov">naslov:</label>
              <input
                type="text"
                class="form-control"
                id="naslov"
                v-model="clanak.naslov"
                placeholder="naslov"
              />
            </div>
            <div class="form-group">
              <label for="opis">opis:</label>
              <input
                type="text"
                class="form-control"
                id="opis"
                v-model="clanak.opis"
                placeholder="opis"
              />
            </div>
            <div class="form-group">
              <label for="link">link:</label>
              <input
                type="text"
                class="form-control"
                id="link"
                v-model="clanak.link"
                placeholder="link"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <div class="error" v-if="error">{{error.message}}</div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { DodajClanak } from "@/services";
export default {
  name: "DodajClanak",
  data() {
    return {
      clanak: {
        naslov: "",
        opis: "",
        link: "",
      },
      error: "",
    };
  },
  methods: {
    DodajClanak: function () {
      /*  const path = "http://localhost:5000/dodajClanak"; */
      DodajClanak.getAll(this.clanak)
        .then((res) => {
          this.$router.push({ name: "Clanak" });
          console.log(res.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
};
</script>
