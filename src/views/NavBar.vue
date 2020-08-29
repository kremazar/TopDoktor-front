<template>
  <div class="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">
        <router-link to="/">
          <img
            src="https://www.epicentrofestival.com/wp-content/uploads/2020/01/epicentrofestival-Of-Doctors-Picture-Free-Download-Clip-Art-On-Doctor-Cartoon-tzv3h1fimy-720x1070.jpg"
            style="height:100px;weight:100px"
          />
        </router-link>
      </a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-if="islogged && admin" class="nav-item active">
            <a class="nav-link">
              <router-link to="/DodajClanak">Dodaj clanak</router-link>
            </a>
          </li>
          <li v-if="islogged" class="nav-item active">
            <a class="nav-link">
              <router-link to="/clanak">Članci</router-link>
            </a>
          </li>
          <li v-if="islogged" class="nav-item active">
            <a class="nav-link" href v-on:click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: "",
      user: "",
      islogged: localStorage.getItem("usertoken"),
      admin: "admin@unipu.hr",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>