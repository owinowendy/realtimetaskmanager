<template>
    <div class="dashboard">
      <h1>Task Dashboard</h1>
      <TaskBoard />
    </div>
  </template>
  
  <script>
  import TaskBoard from "./TaskboardComponent.vue";
  
  export default {
    components: {
      TaskBoard,
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    padding: 20px;
  }
  </style>
  