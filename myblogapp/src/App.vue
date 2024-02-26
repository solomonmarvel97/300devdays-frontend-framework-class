<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<template>
  <main>
    <div v-if="isOpen">
      <h1>This is open</h1>
    </div>

    <div v-else>
      <h1 class="title">This is closed</h1>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
}

h1 {
  color: blue
}

.title {
  color: green 
}
</style>
