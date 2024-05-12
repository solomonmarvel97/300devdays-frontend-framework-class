<template>
  <main>
    <div class="dog-container">
      <img v-if="dogData.message" :src="dogData.message" />
      <img v-else src="@/assets/images/dogavatar.webp" />
      <button class="primary btn-wide" @click="getRandomPhoto">Get Random Photo</button>
    </div>
  </main>
</template>

<script>
import axios from 'axios' // import axios after installation
export default {
  data() {
    return {
      dogData: {}
    }
  },
  methods: {
    async getRandomPhoto() {
      // get random photo here

      let config = {
        method: 'get',
        url: 'https://dog.ceo/api/breeds/image/random',
      };

      const response = await axios.request(config)
      this.dogData = response.data
      console.log(this.dogData)

    }
  },
  created() {
    this.getRandomPhoto()
  }

}
</script>

<style scoped>
main {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
}

.dog-container {
  display: grid;
  gap: 24px;
  width: auto
}

.dog-container .primary {
  background-color: #1e1e1e;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
}

.btn-wide {
  width: 100%;
}

.dog-container>img {
  height: 300px;
  width: 300px;
  background-color: #e2e2e2;
  object-fit: cover;
  border-radius: 24px
}
</style>