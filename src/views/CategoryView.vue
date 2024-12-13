<template>
  <div class="pageCategory">
    <div class="navBar">
      <NavBarView />
    </div>

    <div class="menuItem">
      <MenuItemView />
    </div>

    <div class="showCase">
      <ShowCaseRoute />
    </div>

    <div class="productCom">
      <ProductComponent :products="filteredProducts" />
    </div>
  </div>
</template>

<script>
import ShowCaseRoute from "../components/ShowcaseRoute.vue";
import { useProductStore } from "@/stores/productStore";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductComponent from "../components/Product.vue";
import MenuItemView from "./MenuItemView.vue";
import NavBar from "./NavBar.vue";
export default {
  name: "CategoryPage",
  components: {
    NavBar,
    MenuItemView,
    ShowCaseRoute,
    ProductComponent,
  },
  setup() {
    const productStore = useProductStore();
    const route = useRoute();
    const categoryId = route.params.categoryId;

    console.log(`Category Page Loaded for Category ID: ${categoryId}`);

    const filteredProducts = computed(() => {
      const products = productStore.products.filter(
        (product) => product.categoryId === parseInt(categoryId)
      );
      console.log(`Filtered Products for Category ID ${categoryId}:`, products); // Log filtered products
      return products;
    });

    onMounted(async () => {
      await productStore.fetchProducts();
    });

    return {
      filteredProducts,
    };
  },
};
</script>

<style scoped>
.pageCategory {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -10%;
}
</style>