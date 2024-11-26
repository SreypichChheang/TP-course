<template>
  <div class="container">
    <div class="row0">
      <div class="Menu">Featured categories</div>
      <Menu :menuItems="store.groups" />
      <div class="row1">
      <Category
        v-for="(category, index) in categories"
        :key="index"
        :image="category.image"
        :name="category.name"
        :productCount="category.productCount"
        :color="category.color"
      />
    </div>
    <div class="row2">
      <Promotion
        v-for="(promo, index) in promotions"
        :key="index"
        :image="promo.image"
        :color="promo.color"
        :title="promo.title"
        :url="promo.url"
        :buttonColor="promo.buttonColor"
      />
    </div>
    <div class="row0 row6">
      <h2 class="Menu">Popular Products</h2>
      <Menu :menuItems="store.groups" />
    </div>
    <product class="row-1"/>
  </div>
</div>
</template>

<script>
import { mapState } from 'pinia';
import category from './components/Category.vue';
import promotion from './components/Promotion.vue';
import product from './components/Product.vue';
import Menu from './components/Menu.vue';
import { useProductStore } from './stores/productStore';

export default {
  name: 'App',
  components: {
    category,
    promotion,
    product,
    Menu
  },
  setup() {
    const store = useProductStore();
    return {
      store
    };
  },
  async mounted() {
    await Promise.all([
    this.store.fetchCategories(),
    this.store.fetchPromotions(),
    this.store.fetchProducts(),
    this.store.fetchGroups()]);
    },
    computed:{
      ...mapState(useProductStore,{
        categories: 'categories',
        promotions: 'promotions',
        product: 'product',
        groups: 'groups'
      })
    }
};
</script>

<style>
.container {
  width: 100%;
  max-width: 1200px; /* Adjust based on design */
  margin: 0 auto;
  padding: 10px;
}

.row1 {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 20%;
  padding: 10px;
}
.row2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 59%;
  padding: 10px;
}
.row0{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
}
.row6{
  position: relative;
  top:200px;
} 
.Menu{
  font-size:28px;
  font-weight: 600;
  color: #333;
  margin: 0;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  padding-top: 20px;
}
</style>
