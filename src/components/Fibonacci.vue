<template>
  <div class="pattern">
    <div v-for="(num, index) in fibonacciNumbers" :key="index">
      {{ num }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Fibonacci",
  data() {
    return {
      fibonacciNumbers: []
    };
  },
  methods: {
    generateFibonacciUpTo100() {
      const result = [0, 1];
      let next = result[0] + result[1];

      while (next <= 100) {
        result.push(next);
        const len = result.length;
        next = result[len - 1] + result[len - 2];
      }

      this.fibonacciNumbers = result;
    }
  },
  mounted() {
    this.generateFibonacciUpTo100();
  }
};
</script>

<style scoped>
.pattern {
  font-family: monospace;
  white-space: pre;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  margin: auto;
  direction: rtl;
}
</style>
