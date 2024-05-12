import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  // State
  state: () => ({
    count: 0,
    userInfo
  }),

  // Getters
  getters: {
    doubleCount: (state) => state.count * 2,
  },

  // Actions
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
