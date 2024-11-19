<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/signup">Signup here</router-link></p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "../utils/firebaseConfig";
  import { signInWithEmailAndPassword } from "firebase/auth";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          alert("Login successful!");
          this.$router.push('/dashboard'); // Redirect to the dashboard

        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, login };
    },
  };
  </script>
  