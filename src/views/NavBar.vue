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
          <li class="nav-item active">
            <a v-if="islogged" class="nav-link">
              <router-link to="/doktori">Doktori</router-link>
            </a>
          </li>
          <li v-if="islogged  && email==admin" class="nav-item">
            <a class="nav-link">
              <router-link to="/dodajDoktora">Dodaj doktora</router-link>
            </a>
          </li>
          <li v-if="!islogged" class="nav-item active">
            <a class="nav-link">
              <router-link to="/register">Register</router-link>
            </a>
          </li>
          <li v-if="!islogged" class="nav-item active">
            <a class="nav-link">
              <router-link to="/login">Login</router-link>
            </a>
          </li>
          <li v-if="islogged" class="nav-item active">
            <a class="nav-link">
              <router-link to="/profile">Profile</router-link>
            </a>
          </li>
          <li v-if="islogged" class="nav-item active">
            <a class="nav-link">
              <router-link to="/najbolji">Najbolji doktori</router-link>
            </a>
          </li>
          <li v-if="islogged  && email==admin" class="nav-item active">
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
import jwtDecode from "jwt-decode";
export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    return {
      email: decoded.sub,
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
  mounted() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "cb45912854d113c3f8b565118ae4d123",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  },
};
</script>

<style>
</style>