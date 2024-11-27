
<template>
    <div>
      <h1>To-Do</h1>
      <draggable v-model="tasks">
        <template #item="{ element }">
          <div class="task-item">
            {{ element.title }}
          </div>
        </template>
      </draggable>
      <button @click="addTask">Add Task</button>
    </div>
  </template>
  
  <script>
  import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
  import { db } from "@/firebase"; // Import Firestore instance
  import draggable from "vuedraggable";
  
  export default {
    components: { draggable },
    data() {
      return {
        tasks: [], // This will hold the Firestore tasks
      };
    },
    mounted() {
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        const tasksCollection = collection(db, "tasks");
  
        // Listen for real-time updates
        onSnapshot(tasksCollection, (snapshot) => {
          this.tasks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
        });
      },
      async addTask() {
        const tasksCollection = collection(db, "tasks");
        const newTask = {
          title: "New Task",
          description: "This is a new task",
          status: "To-Do",
        };
  
        await addDoc(tasksCollection, newTask); // Add task to Firestore
      },
      async updateTaskStatus(task, status) {
        const taskDoc = doc(db, "tasks", task.id);
        await updateDoc(taskDoc, { status }); // Update Firestore document
      },
      async deleteTask(task) {
        const taskDoc = doc(db, "tasks", task.id);
        await deleteDoc(taskDoc); // Delete task from Firestore
      },
    },
  };
  </script>
  
  <style scoped>
  .task-item {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  </style>
  