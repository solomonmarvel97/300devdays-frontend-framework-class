import { defineStore } from 'pinia';
import axios from 'axios';

export const useBlogStore = defineStore('blog', {
  // State
  state: () => ({
    blogs: [], // Array to store fetched blogs
  }),

  // Getters
  getters: {
    // You can add getters here if needed
  },

  // Actions
  actions: {
    async fetchBlogs() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.blogs = response.data.slice(0, 20); // Limiting to 5 blogs for example
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    },
  },
});
