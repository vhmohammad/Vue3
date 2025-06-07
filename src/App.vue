<template>

  <h1 style="text-align: center; color: brown "> Poroject Web </h1>
<div class="col-12">
  <router-link to="/TodoList">
    <button type="button" class="btn btn-outline-primary" style="padding: 5px; margin-right: 10px ">
      TodoList
    </button>
  </router-link>

  <router-link to="/DotPattern">
    <button type="button" class="btn btn-outline-danger" style="padding: 5px; margin-right: 10px ">
      DotPattern
    </button>
  </router-link>

  <router-link to="/Fibonacci">
    <button type="button" class="btn btn-outline-warning" style="padding: 5px">
      FibonacciPattern
    </button>
  </router-link>

  <router-view>

  </router-view>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>
