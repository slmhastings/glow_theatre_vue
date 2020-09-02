<template>
  <div class="login">
    <form>
      <h1>Login</h1>
      <div class="form group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <button type="button" v-on:click="login()">Log In</button>
    </form>
    <h4><router-link to="/signup">No Login? Signup Here</router-link></h4>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    login() {
      if (this.email !== "" && this.password !== "") {
        // if (this.email == this.$parent.user_account.email && this.password == this.$parent.user_account.password) {
        this.$emit("authenticated", true);
        this.$router.push("/");
        // } else {
        //   console.log("The email and / or password is incorrect");
        // }
      } else {
        console.log("An email and password must be present");
      }
    },
  },
};
</script>
