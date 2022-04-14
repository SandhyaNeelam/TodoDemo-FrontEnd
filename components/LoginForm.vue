<template>

 <div class="login-form">
     <!-- <h1>Login Page</h1> -->
    <!-- <form @submit.prevent="loginForm" >
      <form id="input" label="Name" label-for="input-1">
        <input
          id="input-1"
         v-model="name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </form>
      <br>

      <form id="input" label="Password" label-for="input-2">
        <input
          type="password"
          id="input-2"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </form>
      <br>

      <button type="submit" variant="primary">Submit</button>
    </form> -->

<h2>Login Form</h2>
<form @submit.prevent="loginForm">
  <div class="container">
    <label for="uname"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="uname" v-model="name" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" v-model="password" required>

    <button type="submit">Login</button>
  </div>
</form>
</div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: "LoginForm",
        data() {
            return {
                    name: '',
                    password: ''
            }
        },
        methods: {
          async loginForm() {
           await this.$store.dispatch("login", {
              name: this.name,
              password: this.password
            })

            await this.$store.dispatch ('getAllTodos')
          }
        },


    }
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
form {
  border: 3px solid #f1f1f1;
  }

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #09d1db;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}


/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
}
</style>