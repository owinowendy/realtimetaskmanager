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
    box-shadow: 0 12px 12px;
    background-image: url(../assets/istockphoto-1371325578-1024x1024.jpg);
    font-size: large;
  }
  </style>
  