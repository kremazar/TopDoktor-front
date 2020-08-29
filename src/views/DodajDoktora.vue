<template>
  <div class="dodaj_doktora">
    <h1>Dodaj doktora</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <form @submit.prevent="dodajDoktora">
            <div class="form-group">
              <label for="ime">Ime:</label>
              <input
                type="text"
                class="form-control"
                id="ime"
                v-model="doktor.ime"
                placeholder="ime"
              />
            </div>
            <div class="form-group">
              <label for="prezime">Prezime:</label>
              <input
                type="text"
                class="form-control"
                id="prezime"
                v-model="doktor.prezime"
                placeholder="prezime"
              />
            </div>
            <div class="form-group">
              <label for="specijalizacija">Specijalizacija:</label>
              <input
                type="text"
                class="form-control"
                id="specijalizacija"
                v-model="doktor.specijalizacija"
                placeholder="specijalizacija"
              />
            </div>
            <div class="form-group">
              <label for="bolnica">Bolnica:</label>
              <input
                type="text"
                class="form-control"
                id="bolnica"
                v-model="doktor.bolnica"
                placeholder="bolnica"
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
import { DodajDoktora } from "@/services";
export default {
  name: "DodajDoktora",
  data() {
    return {
      doktor: {
        ime: "",
        prezime: "",
        specijalizacija: "",
        bolnica: "",
      },
      error: "",
    };
  },
  methods: {
    dodajDoktora: function () {
      /*  const path = "https://webdoktor.herokuapp.com/dodajDoktora"; */
      DodajDoktora.getAll(this.doktor)
        .then((res) => {
          this.$router.push({ name: "About" });
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
