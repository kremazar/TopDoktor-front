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
                v-model="ocjena"
              />
            </div>
            <div class="form-group">
              <label for="komentar">Komentar:</label>
              <input type="text" class="form-control" placeholder="komentar" v-model="komentar" />
              <input type="hidden" class="form-control" placeholder="user_id" v-model="user_id" />
              <input type="hidden" class="form-control" placeholder="id" v-model="id" />
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
          <div v-if="item.doktor_id==id">
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
import axios from "axios";
import jwtDecode from "jwt-decode";
export default {
  name: "Doktori",
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    return {
      id: this.$route.params.id,
      doktor: {},
      ocjene: {},
      komentar: "",
      ocjena: "",
      user_id: decoded.id,
    };
  },
  methods: {
    ocjeni: function () {
      const path = "https://webdoktor.herokuapp.com/ocjeni";
      let currentObj = this;
      this.axios
        .post(
          path,
          {
            ocjena: this.ocjena,
            komentar: this.komentar,
            user_id: this.user_id,
            doktor_id: this.id,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
              "Access-Control-Allow-Headers":
                "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          currentObj.output = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        })
        .then(() => {
          this.$router.push({ name: "Doktori" });
        });
    },
  },
  created() {
    const path = "http://localhost:5000/doktor/" + this.id;
    const path2 = "http://localhost:5000/ocjena";
    axios
      .get(path)
      .then((res) => {
        this.doktor = res.data.data;
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
    axios
      .get(path2)
      .then((res) => {
        this.ocjene = res.data.data;
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};
</script>