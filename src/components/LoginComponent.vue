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

  import { auth } from "../utils/firebaseConfig";
  import { signInWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          alert('Login successful!');
          this.$router.push('/dashboard'); // Navigate to the dashboard
        })
        .catch(error => {
          alert(error.message);
        });
    },
  },
};
  </script>
  