<template>
  <div id="app">
    <header id="header">
      <div class="container d-flex align-items-center">

        <!-- <a href="/" class="logo mr-auto"><img src="assets/img/logo.png" alt=""></a> -->
        <!-- Uncomment below if you prefer to use a text logo -->
        <h1 class="logo mr-auto"><a href="index.html">App Name</a></h1>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active"><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Packages</a></li>
            <li><a href="/featured">Trending</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav><!-- .nav-menu -->

      </div>
    </header><!-- End Header -->

    <router-view/>


    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright">
              &copy; Copyright <strong>Imperial Theme</strong>. All Rights Reserved
            </div>
            <div class="credits">
              <!--
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Imperial
            -->
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </footer><!-- End Footer -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      user_id: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<style></style>
