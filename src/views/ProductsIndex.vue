<template>
  <div class="products-index">
    <h1>{{ message }}</h1>

    <div v-for="product in products">
      <h3><router-link v-bind:to="`/products/${product.id}`">{{ product.name }}</router-link></h3>
      <p>{{ product.price }}</p>
      <p>{{ product.image_url }}</p>
      <hr>
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
      message: "Products!",
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