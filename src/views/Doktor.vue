<template>
  <div>
    <div v-for="item in doktor" :key="item.id" class="card m-auto" style="width: 18rem;">
      <div class="card-body m-auto">
        <h5 class="card-title">{{item.ime}} {{item.prezime}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{item.specijalizacija}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{item.bolnica}}</h6>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="row border pb-4">
        <div class="col-3"></div>
        <div class="col-6">
          <h1>Ocjeni doktora:</h1>
          <br />
          <br />
          <form>
            <div class="form-group">
              <label for="ocjena">Ocjena:</label>
              <input
                type="number"
                min="1"
                max="5"
                class="form-control"
                placeholder="ocjena"
                v-model="sve.ocjena"
              />
            </div>
            <div class="form-group">
              <label for="komentar">Komentar:</label>
              <input type="text" class="form-control" placeholder="komentar" v-model="sve.komentar" />
              <input type="hidden" class="form-control" placeholder="user_id" v-model="sve.user_id" />
              <input type="hidden" class="form-control" placeholder="id" v-model="sve.id" />
            </div>
            <button v-on:click.prevent="ocjeni" class="btn btn-primary">Ocjeni</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <br />
      <br />
      <h1>Sve ocjene doktora:</h1>
      <div class="row">
        <div v-for="item in ocjene" :key="item.id" class="col-lg-7 mx-auto">
          <div v-if="item.doktor_id==sve.doktor_id">
            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div class="blockquote-custom-icon bg-info shadow-sm">
                <i class="fa fa-quote-left text-white"></i>
              </div>
              <p class="mb-0 mt-2 font-italic">"{{item.komentar}}"</p>
              <footer class="blockquote-footer pt-4 mt-4 border-top">
                <cite title="Source Title">Ocjena: {{item.ocjena}}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Ocjeni, Ocjene, Doktor } from "@/services";
import jwtDecode from "jwt-decode";
export default {
  name: "Doktori",
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    return {
      sve: {
        doktor_id: this.$route.params.id,
        komentar: "",
        ocjena: "",
        user_id: decoded.id,
      },
      doktor: {},
      ocjene: {},
    };
  },
  methods: {
    ocjeni: function () {
      Ocjeni.getAll(this.sve)
        .then((res) => {
          this.$router.push({ name: "About" });
          console.log(res.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });

      //location.reload();
    },
  },
  created() {
    /* const path = "https://webdoktor.herokuapp.com/doktor/" + this.id;
    const path2 = "https://webdoktor.herokuapp.com/ocjena"; */
    Doktor.getAll(this.sve.doktor_id)

      .then((res) => {
        this.doktor = res.data;
      })
      .catch((error) => {
        console.error(error);
      });

    Ocjene.getAll()
      .then((res) => {
        this.ocjene = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>