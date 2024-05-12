<template>
    <div class="card">
        <img :src="imageSrc"
            :alt="altText">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <button class="btn" @click="buttonClicked"> Read Blog </button>
    </div>
</template>

<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      altText: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
    },
    methods: {
      buttonClicked() {
        alert('you clicked on read blog')
      }
    }
  }
</script>

<style scoped>
.card {
    max-width: 300px;
    height: 100%;
    position: relative;
    padding: 12px;
    border-radius: 12px
}

.card img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 1em;
    border-radius: 6px
}

.card h2 {
    color: #1e1e1e;
    font-size: 16px;
    margin-bottom: 1em
}

.card p {
    color: #1e1e1e;
    font-size: 14px;
    margin-bottom: 10px
}

.btn {
    width: 100%;
    padding: 16px;
    border: none;
    background: #1e1e1e;
    color: white;
    border-radius: 4px;
    cursor: pointer
}
</style>
