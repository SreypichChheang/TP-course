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
        <Menu :menuItems="store.groups" @menuItemSelected="handleProductGroupClick " />
      </div>
      <div class="products-grid">
          <product v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
    </div>
  </template>
  
  <script>
  import Category from '../components/Category.vue';
  import Promotion from '../components/Promotion.vue';
  import product from '../components/Product.vue';
  import Menu from '../components/Menu.vue';
  import { useProductStore } from '../stores/productStore';
  import { mapState } from 'pinia';
  import { computed, ref } from 'vue';
  
  
  export default {
    name: 'App',
    components: {
      Category,
      Promotion,
      Menu,
      product
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
  