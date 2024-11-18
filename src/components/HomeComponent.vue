<template>
    <div class="home">
      <h1>Welcome to the Real-Time Task Manager</h1>
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeComponent",
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  </style>
  