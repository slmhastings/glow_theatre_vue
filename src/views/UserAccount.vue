<template>
  <div class="home">
    <h2>{{ message }}</h2>
    <p>{{ current_user.id }}</p>

  </div>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {
      message: "Account Info",
      current_user: [],
    };
  },
  created: function () {
    this.userInfo();
  },
  methods: {
    userInfo: function () {
      console.log("showing info");
    },
  },
};
</script>
