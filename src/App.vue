<template>
  <div class="container">
    <div class="row1">
      <Category
        v-for="(category, index) in products"
        :key="index"
        :image="category.imgage"
        :title="category.title"
        :items="category.item"
        :bgColor="category.bgColor"
      />
    </div>
    <div class="row2">
      <Promotion
        v-for="(promotion, second) in promotions"
        :key="second"
        :image="promotion.image"
        :color="promotion.color"
        :tiltle="promotion.title"
        :url="promotion.url"
        :buttonColor="promotion.buttonColor"
      />
    </div>
  </div>
</template>

<script>
import category from "./components/Category.vue";
import promotion from "./components/Promotion.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    category,
    promotion,
  },
  data() {
    return {
      // tp02
      categories: [],
      promotions: [],
    };
  },
  // tp02
  mounted() {
    axios
      .get("http://localhost:3000/api/categories")
      .then((response) => {
        this.category = response.data;
      })
      .catch((error) => {
        console.error(
          "Error fetching categories:",
          error.response ? error.response.data : error.message
        );
      });

    axios
      .get("http://localhost:3000/api/promotions")
      .then((response) => {
        this.promotion = response.data;
      })
      .catch((error) => {
        console.error(
          "Error fetching promotions:",
          error.response ? error.response.data : error.message
        );
      });
  },
};
</script>

<style scoped>
.container {
  width: 75rem;
  height: 35rem;
  background-color: white;
  padding: 1rem;
}

.row1 {
  width: 100%;
  height: 31%;
  padding: 7px;
  display: flex;
  justify-content: space-between;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.row2 {
  width: 100%;
  height: 69%;
  display: flex;
  justify-content: space-between;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
