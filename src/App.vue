<template>

  <h1 style="text-align: center; color: brown "> Poroject Web </h1>
  <div class="col-12">
    <router-link to="/TodoList">
      <button type="button" class=" center btn btn-outline-primary" style="padding: 5px; margin-right: 10px ">
        TodoList
      </button>
    </router-link>

    <router-link to="/DotPattern">
      <button type="button" class=" center btn btn-outline-danger" style="padding: 5px; margin-right: 10px ">
        DotPattern
      </button>
    </router-link>

    <router-link to="/Fibonacci">
      <button type="button" class=" center btn btn-outline-warning" style="padding: 5px; margin-right: 10px ">
        FibonacciPattern
      </button>
    </router-link>

    <router-link to="/ListNamber">
      <button type="button" class=" center btn btn-outline-success" style="padding: 5px; margin-right: 10px">
        List Number
      </button>
    </router-link>

      <hr>

    </router-link>

    <router-link to="/ProductList">
      <button type="button" class=" center btn btn-outline-secondary" style="padding: 5px; margin-right: 10px">
        Product List
      </button>
    </router-link>

    <hr>

    <router-view>

    </router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>

.center {
  margin-left: 15px;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
}

.center:hover {
  transform: scale(1.08); /* کمی بزرگ بشه */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* سایه */
}

.center:active {
  transform: scale(0.95);
}
.center:hover {
  background: linear-gradient(to right, #ff7e5f, #747bff);
  color: white;
  border: none;
}

.col-12 {
  text-align: left;
}

</style>
