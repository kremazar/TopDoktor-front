<template>
  <div class="login">
    <h1>This is an Login page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="user.email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

          <br />
          <br />
          <p class="btn btn-warning" v-for="error in errors" v-bind:key="error.id">{{ error }}</p>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Login } from "@/services";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    login: function () {
      this.errors = [];

      if (!this.user.email) {
        this.errors.push("Email required");
      } else if (!this.user.password) {
        this.errors.push("Password required");
      } else {
        /* const path = "https://webdoktor.herokuapp.com/login"; */
        Login.getAll(this.user)
          .then((res) => {
            localStorage.setItem("usertoken", res.data.token);
            this.id = "";
            this.email = "";
            this.password = "";
            this.$router.push({ name: "Doktori" });
          })
          .catch((error) => {
            error = "Kriva lozinka ili email !!!";
            this.errors.push(error);
            console.error(error);
          })
          .then(() => {
            location.reload();
          });
      }
    },
  },
};
</script>
