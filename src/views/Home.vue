<template>
  <div class="home">
    <section id="hero">
      <div class="hero-container">
        <div class="wow fadeIn">
          <div class="hero-logo">
            <img class="" src="assets/img/logo.png" alt="Imperial">
          </div>

          <h1>A true movie experience</h1>
          <h2>We create memories<span class="typed" data-typed-items="beautiful graphics, functional websites, working mobile apps"></span></h2>
          <div class="actions">
            <a href="/featured" class="btn-get-started">Trending Movies</a>
            <a href="/products" class="btn-services">Our Packages</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->
 
    
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Site name",
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      console.log("showing movies");
      axios.get("/api/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
};
</script>

<!-- <div v-for="movie in movies">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
        <p>{{ movie.poster_path }}</p>
      </div> -->
<img class="mx-auto" style="width: 250px" v-bind:src="movie.poster_path" alt="First slide" >