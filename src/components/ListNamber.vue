<template>
  <div class="p-4 center">
    <h1 class="text-xl font-bold mb-4"> نمایش عداد زوج و فرد یک تا صد </h1>
    <ul class="space-y-1">
      <li v-for="number in numbers" :key="number">
        عدد {{ number }} - {{ isEven(number) ? 'زوج' : 'فرد' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListNamber',
  data() {
    return {
      numbers: Array.from({ length: 100 }, (_, i) => i + 1)
    }
  },
  methods: {
    isEven(num) {
      return num % 2 === 0
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.center{

  text-align: center;
  font-family:"2  Nazanin";
  background:ghostwhite;
  width: 40%;
  margin-left: 30%;
  border-radius: 20px;
}
</style>
