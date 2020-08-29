<template>
  <div>
    <input type="text" v-model="trazi" placeholder="pretraži doktore" />
    <br />
    <br />
    <div v-for="item in search" :key="item.id" class="card m-auto" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{item.ime}} {{item.prezime}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{item.specijalizacija}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{item.bolnica}}</h6>
        <router-link class="btn btn-primary" :to="{ name: 'Doktor', params: { id: item.id }}">Ocjeni</router-link>
        <br />
        <br />
        <div v-if="user == admin">
          <button class="btn btn-danger" @click="onDelete(item.id)">Delete</button>
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