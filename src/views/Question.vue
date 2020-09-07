<template>
  <div class="trivia">
    <!-- ======= Services Section ======= -->
    <section id="services">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Movie Trivia!</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Here's a chance for points towards any booked event.</p>
          </div>
        </div>

        <div class="trivia">
          <div>
            <h4 class="trivia-question" v-html="trivia.question">
              <a href="">{{ trivia.question }}</a>
            </h4>
          </div>
          <div class="trivia-buttons">
            <input v-on:click="submitTrue()" class="btn btn-primary btn-lg btn-block" type="button" value="True" />
            <input v-on:click="submitFalse()" class="btn btn-primary btn-lg btn-block" type="button" value="False" />
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="winnerModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Correct Answer!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              You know your stuff!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <!-- ======= Subscrbe Section ======= -->
  </div>
</template>

<style></style>

<script>
// import $ from "jquery";
import axios from "axios";
import $ from "jquery";
export default {
  data: function() {
    return {
      message: "Site name",
      trivia: [],
      True: "True",
      False: "False",
      modelShown: false,
    };
  },
  created: function() {
    this.indexTrivia();
  },
  methods: {
    indexTrivia: function() {
      console.log("showing trivia question");
      axios.get("/api/trivia").then(response => {
        console.log(response.data);
        this.trivia = response.data;
      });
    },
    submitTrue: function() {
      console.log("user picked true");
      if (this.trivia.correct_answer == "True") {
        console.log("correct");
        window.$("#winnerModal").modal("show");
      } else {
        console.log("wrong answer");
        this.$router.push("/");
      }
    },
    submitFalse: function() {
      console.log("user picked false");
      if (this.trivia.correct_answer == "False") {
        console.log("correct");
      } else {
        console.log("wrong answer");
        this.$router.push("/");
      }
    },
    // toggleModal: function () {
    //   this.modalShown = !this.modalShown;
    // },
  },
};
</script>
