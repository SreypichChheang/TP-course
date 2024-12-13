<template>
  <div class="container">
    <!-- Header Section -->
    <div>
      <SearchBox />
      <MenuItem />
    </div>

    <div>
      <ShowCase />
    </div>

    <!-- Featured Categories -->
    <div class="row0">
      <div class="Menu">Featured Categories</div>
      <Menu :menuItems="store.groups" />
    </div>

    <!-- Categories -->
    <div class="row1">
      <Category
        v-for="(category, index) in filteredCategories"
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
      <Menu :menuItems="store.groups" @menuItemSelected="handleProductGroupClick" />
    </div>

    <div class="products-grid">
      <Product v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Category from '../components/Category.vue';
import Promotion from '../components/Promotion.vue';
import Product from '../components/Product.vue';
import Menu from '../components/Menu.vue';
import { useProductStore } from '../stores/productStore';
import { mapState } from 'pinia';
import { computed, ref } from 'vue';
import ShowCase from '../components/ShowCase.vue';
import SearchBox from "../components/SearchBox.vue";
import MenuItem from "../components/MenuItem.vue";

export default {
  name: 'App',
  components: {
    Category,
    Promotion,
    Menu,
    Product,
    ShowCase,
    SearchBox,
    MenuItem
  },

  setup() {
    const store = useProductStore();
    const selectedCategoryGroup = ref(null);
    const selectedProductGroup = ref(null);

    // Handle group click and set selected group
    const handleCategoryGroupClick = (group) => {
      selectedCategoryGroup.value = selectedCategoryGroup.value === group ? null : group;
    };

    const handleProductGroupClick = (group) => {
      selectedProductGroup.value = selectedProductGroup.value === group ? null : group;
    };

    // Filter categories by selected group
    const filteredCategories = computed(() =>
      selectedCategoryGroup.value
        ? store.categories.filter((category) => category.group === selectedCategoryGroup.value)
        : store.categories
    );

    // Filter products by selected group
    const filteredProducts = computed(() =>
      selectedProductGroup.value
        ? store.products.filter((product) => product.group === selectedProductGroup.value)
        : store.products
    );

    return {
      store,
      selectedCategoryGroup,
      selectedProductGroup,
      handleCategoryGroupClick,
      handleProductGroupClick,
      filteredCategories,
      filteredProducts,
    };
  },

  async mounted() {
    await this.store.fetchCategories();
    await this.store.fetchPromotions();
    await this.store.fetchProducts();
    await this.store.fetchGroups();
  },

  computed: {
    ...mapState(useProductStore, {
      categories: 'categories',
      promotions: 'promotions',
      products: 'products',
      groups: 'groups',
    }),
  },
};
</script>

<style>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

/* Header section */
.row0 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.Menu {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

/* Featured categories */
.row1 {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 20%;
  padding: 10px;
}

/* Promotions */
.row2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 2px;
  margin-bottom: 5px;
}

/* Popular products */
.row6 {
  position: relative;
  top: 20px;
  padding: 10px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  padding: 20px;
  padding-top: 10px;
}

/* Other styling */
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

.showcase {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 20%;
  padding: 10px;
}
</style>
