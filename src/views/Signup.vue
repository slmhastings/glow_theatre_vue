<template>
  <div class="signup">
    <img v-if="status" v-bind:src="`${status}`" />
    <form v-on:submit.prevent="submit()">
      <div class="form-group"><h1>Signup</h1></div>
      <!-- <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul> -->

      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="first_name" />
        <small v-if="first_name.length > 20">Your username is too long, has to be a max of 20 characters</small>
      </div>

      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="last_name" />
        <small v-if="last_name.length > 20">Your username is too long, has to be a max of 20 characters</small>
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
        <small class="text-danger" v-if="password.length < 6">Your password is too short</small>
        <small v-if="password.length > 20">Your password is too long</small>
      </div>

      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation" />
        <small v-if="password !== passwordConfirmation">Passwords don't match</small>
      </div>
      <div class="form-group">
      <input type="submit" class="btn btn-primary" value="Submit" />
      </div>
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      status: "",
    };
  },
  methods: {
    submit: function () {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response);
          this.status = error.response.status;
        });
    },
  },
};
</script>
