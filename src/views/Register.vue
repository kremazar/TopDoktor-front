<template>
  <div class="about">
    <h1>Register</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-9">
          <form>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" v-model="user.email" placeholder="Email" />
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
            <div class="form-group">
              <label for="password2">Confirm Password:</label>
              <input
                type="password"
                class="form-control"
                v-model="password2"
                placeholder="Confirm Password"
              />
            </div>
            <button v-on:click.prevent="post" class="btn btn-primary">Submit</button>
          </form>
          <br />
          <br />
          <p class="btn btn-warning" v-for="error in errors" v-bind:key="error.id">{{ error }}</p>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Registracija } from "@/services";
export default {
  name: "signup",
  data() {
    return {
      errors: [],
      password2: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    post: function () {
      if (this.user.password != this.password2) {
        this.errors.push("Lozinke nisu jednake");
      } else if (!this.user.email) {
        this.errors.push("Email required");
      } else if (!this.user.password) {
        this.errors.push("Password required");
      } else {
        /* const path = "https://webdoktor.herokuapp.com/register"; */
        Registracija.getAll(this.user);

        this.$router.push("/login");
      }
    },
  },
};
</script>
