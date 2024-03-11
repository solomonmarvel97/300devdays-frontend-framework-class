<template>
  <div>
    <h1>{{ count }}</h1>
    <h2>Double Count: {{ doubleCount }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounterStore } from './stores/counter';

export default {
  name: 'HelloWorld',
  computed: {
    count() {
      const counter = useCounterStore();
      return counter.count;
    },
    doubleCount() {
      const counter = useCounterStore();
      return counter.doubleCount;
    },
  },
  methods: {
    increment() {
      const counter = useCounterStore();
      counter.increment();
    },
    decrement() {
      const counter = useCounterStore();
      counter.decrement();
    },
  },
};
</script>
