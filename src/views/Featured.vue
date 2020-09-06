<template>
  <div class="movies-index">
    <section id="movies">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Trending</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Our current movie stash</p>
          </div>
        </div>

        <div class="row">
          <div v-for="movie in movies" class="column">
            <div  class="card">
              <img v-bind:src="movie.poster_path" class="img-fluid" alt="">
              <div class="portfolio-info">
              </div>
              <!-- Button trigger modal -->
<button type="button" class="modalBtn" data-toggle="modal" data-target="featuredModel">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="featuredModal" tabindex="-1" role="dialog" aria-labelledby="featuredModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="featuredModal">{{ movie.title }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{ movie.overview }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
            </div>
          </div>      
        </div>

      </div>
    </section><!-- End Portfolio Section -->

  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 2px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
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