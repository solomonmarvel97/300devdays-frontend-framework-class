<template>
  <main>
    <div class="container">

      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="form logo" />
      </div>

      <form @submit.prevent="submitForm">

        <div class="center">
          <h3>Enter customer feedback</h3>
        </div>

        <div class="form-group">
          <label for="name">Enter your name</label>
          <input id="name" type="text" name="name" placeholder="Enter your name" v-model="customer.name">
        </div>

        <div class="form-group">
          <label for="email">Enter your email</label>
          <input id="email" type="email" name="email" placeholder="Enter your email address" v-model="customer.email">
        </div>

        <div class="form-group">
          <label for="message">Enter a message</label>
          <input id="message" type="text" name="message" placeholder="Enter your message" v-model="customer.message">
        </div>

        <div class="form-group">
          <input class="btn-primary" type="submit" value="Save Records">
        </div>

        <div class='center'>
          <p v-if="successMessage" class="success">{{ successMessage }}</p>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
  </main>
</template>


<script>
// scripts come in here
import axios from "axios"

export default {
  data() {
    return {
      customer: {
        name: null,
        email: null,
        message: null
      },
      successMessage: null,
      errorMessage: null
    }
  },

  methods: {
    submitForm() {
      try {
        this.successMessage = null,
        this.errorMessage = null
        let data = this.customer;

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:3001/submit-form',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };

        axios.request(config)
          .then(data => {
            this.successMessage = data.data.message
          })
          .catch(err => {
            console.log(err.response.data.error)
            this.errorMessage = err.response.data.error
          })
      } catch (err) {
      }
    }
  }
}
</script>


<!-- custom page styling here -->
<style scoped>
main {
  display: grid;
  place-items: center;
  height: 100vh
}

.container {
  width: 500px;
  height: auto;
}

@media (max-width: 1000px) {
  .container {
    width: 100%
  }
}

.success {
  color: rgb(51, 227, 51) !important
}

.error {
  color: rgb(227, 54, 51) !important
}
</style>
