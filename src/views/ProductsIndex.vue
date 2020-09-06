<template>
  <div class="products-index">
    <section id="portfolio">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Package Options</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Check out our package options to see how we can host your next event!</p>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Lights! - $150</h4>
              <p>Our starter </p>
              <a href="http://schedule.nylas.com/movienight" >Book Now</a>
              
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Camera! - $200</h4>
              <p>Our starter plus popcorn machine, concessions, and enclosed tent. VALUE!</p>
              <a href="http://schedule.nylas.com/movienight" >Book Now</a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Action! - starting at $300</h4>
              <p>From birthday parties to romantic date nights. We customize for every occasion!</p>
              <a href="http://schedule.nylas.com/movienight" >Book Now</a>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Portfolio Section -->
    <!-- <h1>{{ message }}</h1>
    <div v-for="product in products">
      <div class="card mb-3">
        <img src="${product.image_url}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">
            <small class="text-muted">{{ product.price }}</small>
          </p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Packages",
      products: [],
    };
  },
  created: function () {
    this.IndexProducts();
  },
  methods: {
    IndexProducts: function () {
      console.log("in the products index...");
      axios.get("/api/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};
</script>

//
<div v-for="product in products">
//       <h3><router-link v-bind:to="`/products/${product.id}`">{{ product.name }}</router-link></h3>
//       <p>{{ product.price }}</p>
//       <p>{{ product.image_url }}</p>
//       <hr>
//     </div>
