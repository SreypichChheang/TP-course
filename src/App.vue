<template>
  <div class="container">
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
  v-for="(promo, second) in promotions"
  :key="second"
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
import axios from "axios";
export default {
  name: "App",
  components: {
    Category,
    Promotion,
  },
  data() {
    return {
      categories: [],
      promotions: [],
    };
  },
  methods: {
    async getCategories() {
      const responseCategories = await axios.get('http://localhost:3000/api/categories');
      this.categories = responseCategories.data;
    },
    async getPromotion() {
      try {
        const responsePromotion = await axios.get('http://localhost:3000/api/promotions');
        console.log(responsePromotion.data); // Log the response
        this.promotions = responsePromotion.data;
      } catch (error) {
        console.error("Error fetching promotions:", error); // Catch any error
      }
    }
  },
  mounted() {
    this.getCategories();
    this.getPromotion();
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
