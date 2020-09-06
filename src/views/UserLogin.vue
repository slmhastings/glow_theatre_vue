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
              <form class="php-email-form">

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

                <div class="text-center"><input type="submit" class="btn btn-primary" v-on:click="login()"></div>
              </form>
              <p><router-link to="/signup">No Login? Signup Here</router-link></p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- <form>
      <h1>Login</h1>
      <div class="form group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      
    </form>
     -->
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
        if (this.email === this.$parent.user_id.email && this.password === this.$parent.user_id.password) {
          //   this.$emit("authenticated", true);
          //   this.$router.push("/");
          // } else {
          console.log("The email and / or password is incorrect");
        }
      } else {
        console.log("An email and password must be present");
      }
    },
  },
};
</script>

