<template>
  <div class="product-show">
    <!-- <h1>{{ message }}</h1> -->

    <h2>{{ product.name }}</h2>
    <p>{{ product.image_url }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" defer></script>
    <script src="https://cdn.timekit.io/booking-js/v2/booking.min.js" defer></script>
    <div id="app">
      <div>
        <h2>Widget:</h2>
        <div id="bookingjs"></div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      // message: "Welcome to Show Page!",
      product: {},
    };
  },
  created: function() {
    axios.get("api/products/" + this.$route.params.id).then(response => {
      console.log("product", response);
      this.product = response.data;
    });
  },
  methods: {},
};
</script>

const app = new Vue({ el: '#app', mounted () { var widget = new TimekitBooking(); widget.init({ app_key:
'live_widget_key_yYXHsUurvCUctNYflzGDMqEJo6mol0Yo', project_id: '352a29be-9ec4-4875-ac87-cb5fb3a2fe62' }); } })
