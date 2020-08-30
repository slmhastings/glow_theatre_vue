<template>
  <div class="product-show">
    <!-- <h1>{{ message }}</h1> -->
    <h2>{{ product.name }}</h2>
    <p>{{ product.image_url }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <a href="http://schedule.nylas.com/movienight">Book Now!</a>
  </div>

    
  
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      // message: "Welcome to Show Page!",
      product: {},
    };
  },
  created: function () {
    axios.get("api/products/" + this.$route.params.id).then((response) => {
      console.log("product", response);
      this.product = response.data;
    });
  },
  methods: {
    bookPage: function () {
      console.log("going to booking page");
    },
  },
};
</script>

