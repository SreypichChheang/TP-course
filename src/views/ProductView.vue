<template>
  <div class="add">
    <div class="bar">
      <NavBarView />
    </div>

    <div class="menuItem">
      <MenuItemView />
    </div>

    <div class="detail"><ProductDetail /></div>
  </div>
</template>

<script>
import ProductDetail from "../components/ProductDetial.vue";
import MenuItemView from "./MenuItemView.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "ProductDetial",
  components: {
    MenuItemView,
    NavBar,
    ProductDetail,
  },
};
</script>

<style scoped>
.add {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin-left: -10%;
  justify-content: center;
}
</style>