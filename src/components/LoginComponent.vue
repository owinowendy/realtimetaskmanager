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
  <style>
 
  div{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Center vertically */
  background-color: #e0e3e7; /* Soft background */
  font-family: Arial, sans-serif;
  padding: auto;
  }
  h2 {
  margin-top: 20px;
  color: #333;
}
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  background-color: #fff;
  }
  input{display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
   margin-top: 3px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  }
  button{
    width:70px ;
  padding: 10px;
  background-color: hwb(211 53% 24%);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: auto;
  }
  button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
p {
  margin-bottom: 15px;

  font-size: 14px;
  color: #666;
  
}

p a {
  color: #007bff;
  text-decoration: none;
}

p a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>