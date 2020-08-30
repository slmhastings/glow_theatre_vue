<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div id="featured_movies">
      <h2>Featured Movies</h2>
      <div v-for="movie in movies">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
        <p>{{ movie.poster_path }}</p> 
      </div>
    </div>

  </div>
</template>

<style>
</style>

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