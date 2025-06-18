<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img class="img" :src="product.thumbnail" alt="تصویر محصول" width="150" />
      <h3>{{ product.name }}</h3>
      <p>قیمت: {{ product.price }} تومان</p>
      <p v-if="product.quantity_status === 1">✅ موجود</p>
      <p v-else>❌ ناموجود</p>
    </div>
  </div>
</template>

<script>

import {fetchProducts} from '../api/product.js';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const data = await fetchProducts();
    console.log("محصولات دریافتی:", data);
    this.products = data;
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-right: 8px;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  width: 200px;
  text-align: right;
  direction: rtl;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  font-family: "2  Nazanin";
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.product-card img {
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

.img{
  border-radius: 73px;
  margin-right: 11px;
}

</style>
