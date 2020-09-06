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

          <div v-for="product in products" class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>{{ product.name }} - {{ product.price }}</h4>
              <p>{{ product.description }}</p>
              <a href="http://schedule.nylas.com/movienight" >Book Now</a>
              
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Portfolio Section -->
    
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
