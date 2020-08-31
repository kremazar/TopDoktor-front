<template>
  <div>
    <input type="text" v-model="trazi" placeholder="pretraži doktore" />
    <br />
    <br />
    <div class="col-8 m-auto">
      <div v-for="item in search" :key="item.id" class="card text-center mb-5">
        <div class="card-header bg-secondary text-white">Doktor</div>
        <div class="card-body mb-5">
          <h2 class="card-title">{{item.ime}} {{item.prezime}}</h2>
          <p class="card-text">Specijalizacija: {{item.specijalizacija}}</p>
          <p class="card-text">Bolnica: {{item.bolnica}}</p>
          <router-link
            class="btn btn-primary"
            :to="{ name: 'Doktor', params: { id: item.id }}"
          >Ocjeni</router-link>
          <br />
          <br />
          <div v-if="user == admin">
            <button class="btn btn-danger" @click="onDelete(item.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import { Doktori, deleteDoctor } from "@/services";
export default {
  name: "Doktori",
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    return {
      doktori: [],
      trazi: "",
      message: "",
      user: decoded.sub,
      admin: "admin@unipu.hr",
    };
  },
  methods: {
    deleteDoc(id) {
      /* const path = `https://webdoktor.herokuapp.com/delete/${id}`; */
      deleteDoctor
        .getAll(id)
        .then(() => {
          this.message = "Book removed!";
          this.$router.go({ name: "Doktori" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onDelete(book) {
      this.deleteDoc(book);
    },
  },
  created() {
    /* const path = "https://webdoktor.herokuapp.com/doktori"; */
    Doktori.getAll().then((data) => {
      this.doktori = data.data;
    });
  },
  computed: {
    search: function () {
      return this.doktori.filter((item) => {
        return (
          item.ime.toLowerCase().match(this.trazi.toLowerCase()) ||
          item.prezime.toLowerCase().match(this.trazi.toLowerCase()) ||
          item.specijalizacija.toLowerCase().match(this.trazi.toLowerCase()) ||
          item.bolnica.toLowerCase().match(this.trazi.toLowerCase())
        );
      });
    },
  },
};
</script>