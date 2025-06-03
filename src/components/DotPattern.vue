<template>
  <div class="pattern">
    <div v-for="(line, index) in repeatedPattern" :key="index">
      <pre>{{ line }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "DotPattern",
  data() {
    return {
      repeatCount: 5,
    };
  },
  computed: {
    repeatedPattern() {
      const basePattern = [
        ".",
        "..",
        "...",
        "....",
        "    .",
        "   ..",
        "  ...",
        " ...."
      ];
      const result = [];
      for (let i = 0; i < this.repeatCount; i++) {
        result.push(...basePattern);
      }
      return result;
    },
  },
};
</script>

<style scoped>
.pattern {
  font-family: monospace;
  white-space: pre;
}
</style>
