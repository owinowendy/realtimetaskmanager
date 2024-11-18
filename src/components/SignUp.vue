<template>
    <div>
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "../utils/firebaseConfig";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
  
      const signup = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          alert("Signup successful!");
        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, signup };
    },
  };
  </script>
  