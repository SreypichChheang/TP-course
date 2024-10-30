<template>
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
        :buttonColor="promotion.buttonColor"
        :url="promotion.url"
      />
    </div>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
// Define reactive data
export default {
  data() {
    return {
      category:[
        {
          name: "Cake & Milk",
          productCount: 14,
          color: "#FEF4EB",
          image: "../image/humbergar.png",
        },
        {
          name: "Peach",
          productCount: 17,
          color: "#FEFBE8",
          image: "../image/permigranel.png",
        },
        {
          name: "Oganic Kiwi",
          productCount: 21,
          color: "#FFF0E9",
          image: "../image/blueberry.png",
        },
        {
          name: "Red Apple",
          productCount: 68,
          color: "#FEF4EB",
          image: "../image/Apple.png",
        },
        {
          name: "Snack",
          productCount: 34,
          color: "#FEF4EB",
          image: ".../image/snac.png",
        },
        {
          name: "BLack Plum",
          productCount: 65,
          color: "#FEF4EB",
          image: ".../image/blueberry.png",
        },
        {
          name: "Vegetable",
          productCount: 65,
          color: "#FEF4EB",
          image: ".../image/vegetable.png",
        },
        {
          name: "HeadPhone",
          productCount: 54,
          color: "#FEF4EB",
          image: ".../image/headphone.png",
        },
        {
          name: "Cake &Milk",
          productCount: 54,
          color: "#FEF4EB",
          image: ".../image/snack.png",
        },
        {
          name: "Organce",
          productCount: 63,
          color: "#FEF4EB",
          image: ".../image/orange.png",
        }
      ],
      promotions: [
        {
          bgImage: "../image/background1.jpg",
          bgColor: "#F0E8D5",
          TittlePromotion: "Everyday Fresh & Clean with Our Products",
          buttonColor: "#42B678",
          url: "/promotions/1",
        },
        {
          bgImage: "../image/background2.png",
          bgColor: "#F3E8E8",
          TittlePromotion: "Make your Breakfast Healthy and Easy",
          buttonColor: "#42B678",
          url: "/promotions/2",
        },
        {
          bgImage: "../image/background3.jpg",
          bgColor: "#E7EAF3",
          TittlePromotion: "The Best Organic Products Online",
          buttonColor: "#42B678",
          url: "/promotions/3",
        }
      ]
    };
  },
};
</script>

<style scoped>
.container {
  width: 75rem;
  height: 35rem;
  background-color: rgb(255, 255, 255);
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
