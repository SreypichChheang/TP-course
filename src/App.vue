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
import { onMounted } from 'vue';
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';
import { useProductStore } from './stores/productStore';

export default {
  name: 'App',
  components: {
    Category,
    Promotion,
  },
  
  setup() {
    const productStore = useProductStore();

    onMounted(async () => {
      await productStore.fetchProducts();
      console.log("Products:", productStore.products);
      await productStore.fetchGroups();
      console.log("Groups:", productStore.groups);
      await productStore.fetchCategories();
      console.log("Categories:", productStore.categories);
      await productStore.fetchPromotions();
      console.log("Promotions:", productStore.promotions);
    });

    return {
      productStore,
    };
  },
};
</script>

<style>
.container {
  width: 100%;
  background-color: white;
  padding: 2rem;
}
.row1 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
.row2 {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
</style>
