<template>
  <div class="container">
    <!-- Featured Categories -->
    <div class="row0">
      <div class="Menu">Featured Categories</div>
      <Menu :menuItems="store.groups" />
    </div>

    <!-- Categories -->
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

    <!-- Promotions -->
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

    <!-- Popular Products -->
    <div class="row6 row0">
      <h2 class="Menu">Popular Products</h2>
      <Menu :menuItems="store.groups" />
    </div>
    <div class="products-grid">
      <Product
        v-for="(product, index) in products"
        :key="index"
        :image="product.image"
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import Category from "./components/Category.vue"; // Ensure path and case match
import Promotion from "./components/Promotion.vue";
import Product from "./components/Product.vue";
import Menu from "./components/Menu.vue";
import { useProductStore } from "./stores/productStore";

export default {
  name: "App",
  components: {
    Category, // Use PascalCase when importing
    Promotion,
    Product,
    Menu,
  },
  setup() {
    const store = useProductStore();
    return { store };
  },
  async mounted() {
    // Fetch all necessary data during component mounting
    await Promise.all([
      this.store.fetchCategories(),
      this.store.fetchPromotions(),
      this.store.fetchProducts(),
      this.store.fetchGroups(),
    ]);
  },
  computed: {
    ...mapState(useProductStore, {
      categories: "categories",
      promotions: "promotions",
      products: "products", // Ensure the correct computed property name
      groups: "groups",
    }),
  },
};
</script>

<style>
.<style>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
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
  padding: 2px;
  margin-bottom: 5px; /* Reduced margin for less space */
}

.row0 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
}

.row6 {
  position: relative;
  top: 20px; /* Reduced top space to bring Popular Products closer */
}

.Menu {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  padding: 20px;
  padding-top: 10px; /* Reduced padding to make it more compact */
}
</style>
