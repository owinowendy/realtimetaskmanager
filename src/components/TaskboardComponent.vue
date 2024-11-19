<template>
    <div class="task-board">
      <div v-for="(tasks, status) in taskColumns" :key="status" class="task-column">
        <h2>{{ status }}</h2>
        <draggable
          v-model="taskColumns[status]"
          @end="onDragEnd"
          class="task-list"
          group="tasks"
          animation="200"
        >
          <div v-for="task in tasks" :key="task.id" class="task-card">
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
          </div>
        </draggable>
      </div>
    </div>
  </template>
  
  <script>
  import draggable from "vuedraggable";
  
  export default {
    components: {
      draggable,
    },
    data() {
      return {
        taskColumns: {
          "To-Do": [
            { id: 1, title: "Task 1", description: "This is the first task" },
            { id: 2, title: "Task 2", description: "This is the second task" },
          ],
          "In Progress": [
            { id: 3, title: "Task 3", description: "This task is in progress" },
          ],
          "Completed": [
            { id: 4, title: "Task 4", description: "This task is completed" },
          ],
        },
      };
    },
    methods: {
      onDragEnd(event) {
        console.log("Task moved:", event);
      },
    },
  };
  </script>
  
  <style scoped>
  .task-board {
    display: flex;
    gap: 20px;
  }
  
  .task-column {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .task-list {
    min-height: 200px;
  }
  
  .task-card {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #e3f2fd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  