<script>
import SignupForm from './components/SignupForm.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    SignupForm
  }
}
</script>

<template>
  <main>
    <!-- Signup Component Seats here -->
    <div>
    <SignupForm/>
  </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  display: grid;
  place-items: center;
}

</style>
