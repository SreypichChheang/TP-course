<template>
  <div class="container">
    <div class="row1">
      <Category
        v-for="(category, index) in productStore.categories"
        :key="index"
        :image="category.image"
        :name="category.name"
        :productCount="category.productCount"
        :color="category.color" 
      />
    </div>
    <div class="row2">
      <Promotion
        v-for="(promo, index) in productStore.promotions"
        :key="index"
        :image="promo.image"
        :color="promo.color"
        :title="promo.title"
        :url="promo.url"
        :buttonColor="promo.buttonColor"
      />
    </div>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import { useProductStore } from './stores/productStore';

export default {
  name: 'App',
  components: {
    Category,
    Promotion
  },

  setup() {
    const productStore = useProductStore();
    productStore.initializeData();
    return { productStore };
  }
};
</script>

<style>
  .container {
    width: 100rem;
    height: 35rem;
    background-color: white;
    padding: 2rem;
  }
  .row1 {
    width: 100%;
    height: 31%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
  .row2 {
    margin-top: 5%;
    gap: 5px;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
  }
</style>
