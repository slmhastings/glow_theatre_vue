<template>
  <div class="home">
    <h2>{{ message }}</h2>
    <div v-if="user.user_id == $parent.getUserId()">
    <p>{{ user.id }}</p>
    <p>{{ user.first_name }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Account Info",
      user: {},
    };
  },
  created: function () {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log("user", response);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
