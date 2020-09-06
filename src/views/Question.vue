<template>
  <div class="trivia">
    <!-- ======= Services Section ======= -->
  <section id="services">
    <div class="container wow fadeInUp">
      <div class="row">
        <div class="col-md-12">
          <h3 class="section-title">Our Services</h3>
          <div class="section-title-divider"></div>
          <p class="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 service-item">
          <div class="service-icon"><i class="fa fa-desktop"></i></div>
          <h4 class="service-title"><a href="">{{ trivia.question }}</a></h4>
          <p class="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
 

   
 
      </div>
    </div>
  </section><!-- End Services Section -->

  <!-- ======= Subscrbe Section ======= -->


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
      trivia: [],
    };
  },
  created: function () {
    this.indexTrivia();
  },
  methods: {
    indexTrivia: function () {
      console.log("showing trivia question");
      axios.get("/api/trivia").then((response) => {
        console.log(response.data);
        this.trivia = response.data;
      });
    },
  },
};
</script>
