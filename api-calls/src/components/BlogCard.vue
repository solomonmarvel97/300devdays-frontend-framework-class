<template>
  <div class="blog-card">
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.body }}</p>
    <!-- <img :src="blog.image" alt="Blog Image" /> -->
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.blog-card {
  height: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>