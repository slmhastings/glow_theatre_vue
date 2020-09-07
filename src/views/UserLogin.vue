<template>
  <div class="login">

    <!-- ======= Contact Section ======= -->
    <section id="contact">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Login</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Log in for coupons and opportunities to enter in raffles!</p>
          </div>
        </div>

        <div class="row justify-content-center">
        
          <div class="col-lg-6 col-md-5">
            <div class="form">
              <form class="php-email-form" v-on:submit.prevent="login()">

                <div class="form-group">
                  <label>Email: </label>
                  <input type="email"  name="email" id="email" data-rule="email" v-model="email" />
                  <div class="validate"></div>
                </div>

                <div class="form-group">
                  <label>Password: </label>
                  <input type="password" name="password" data-rule="required"  v-model="password"/>
                  <div class="validate"></div>
                </div>

                <div class="text-center"><input type="submit" class="btn btn-primary"></div>
              </form>
              <div class="signup link">
                <p><router-link to="/signup">No Login? Signup Here</router-link></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

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
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          console.log(response.data);
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/question");
          console.log("test");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

