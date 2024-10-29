<template>
  <!-- <header>
    <div>This is my first Vue project.</div>
  </header> -->
  
  <div class="container">
    <div class="row1">
      <Category
        v-for="(product, index) in products"
        :key="index"
        :imgSrc="product.img"
        :title="product.title"
        :items="product.item"
        :bgColor="product.bgColor"
      />
    </div>
    <div class="row2">
      <Promotion
        v-for="(promotion, second) in promotions"
        :key="second"
        :bgImage="promotion.bgImage"
        :bgColorSecond="promotion.bgColorSecond"
        :TittlePromotion="promotion.TittlePromotion"
      />
    </div>
  </div>
</template>

<script setup>
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';
import { ref } from 'vue'; // Import ref from Vue

// Define reactive data
const products = ref([
  { img: '../image/humbergar.png', title: "Cake & Milk", item: '14 Items', bgColor: '#F2FCE4'},
  { img: '../image/permigranel.png', title: "Peach", item: '17 Items', bgColor: '#FFFCEB' },
  { img: '../image/kiwi.png', title: "Organic Kiwi", item: '21 Items', bgColor: '#ECFFEC' },
  { img: '../image/Apple.png', title: "Red Apple", item: '68 Items', bgColor: '#FEEFEA' },
  { img: '../image/snac.png', title: "Snack", item: '25 Items', bgColor: '#FFF3EB' },
  { img: '../image/blueberry.png', title: "Black Plum", item: '10 Items', bgColor: '#FFF3FF' },
  { img: '../image/vegatable.png', title: "Vegetable", item: '65 Items', bgColor: '#F2FCE4' },
  { img: '../image/headphone.png', title: "Headphone", item: '33 Items', bgColor: '#FFFCEB' },
  { img: '../image/sack.png', title: "Cake & Milk", item: '54 Items', bgColor: '#F2FCE4' },
  { img: '../image/orange.png', title: "Orange", item: '63 Items', bgColor: '#FFF3FF' },
]);

const promotions = ref([
  { bgImage: '../image/background1.jpg', bgColorSecond: '#F0E8D5', TittlePromotion: "Everyday Fresh & Clean with Our Products" },
  { bgImage: '../image/background2.png', bgColorSecond: '#F3E8E8', TittlePromotion: "Make your Breakfast Healthy and Easy" },
  { bgImage: '../image/background3.jpg', bgColorSecond: '#E7EAF3', TittlePromotion: "The Best Organic Products Online" },
]);
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
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}

.row2 {
  width: 100%;
  height: 69%;
  display: flex;
  justify-content: space-between;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
