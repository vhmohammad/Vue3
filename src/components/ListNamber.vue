<template>
  <div class="p-4 center">
    <h1 class="text-xl font-bold mb-4"> نمایش عداد زوج و فرد یک تا صد </h1>

    <hr>

    <div class="mb-4 space-x-2">
      <button @click="filter = 'all'" class="btn btn-secondary marg"> همه </button>
      <button @click="filter = 'even'" class="btn btn-secondary marg"> فقط زوج </button>
      <button @click="filter = 'odd'" class="btn btn-secondary marg"> فقط فرد </button>
    </div>


    <ul class="space-y-1">
      <li v-for="number in filteredNumbers" :key="number">
        عدد {{ number }} - {{ isEven(number) ? 'زوج' : 'فرد' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EvenOddFilter',
  data() {
    return {
      numbers: Array.from({ length: 100 }, (_, i) => i + 1),
      filter: 'all', //
    }
  },
  computed: {
    filteredNumbers() {
      if (this.filter === 'even') {
        return this.numbers.filter(n => n % 2 === 0)
      } else if (this.filter === 'odd') {
        return this.numbers.filter(n => n % 2 !== 0)
      } else {
        return this.numbers
      }
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
  margin-right: 30%;
  border-radius: 20px;
}
.marg{

  margin-left: 16px;

}
</style>
