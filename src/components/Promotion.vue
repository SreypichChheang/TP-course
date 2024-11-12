<template>
  <div class="Promo" :style="{ backgroundColor: color }">
    <img :src="image" alt="Promotion Image" />
    <h2>{{ title }}</h2> <!-- Changed titlePromotion to title -->
    <Button :buttonText="'Shop Now'" :clickHandler="shopHere" /> <!-- Pass shopHere as clickHandler -->
  
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Promotion",

  props: {
    image: String,
    color: String,  // Background color passed as a prop
    title: String,  // Changed titlePromotion to title
    url: String,
    buttonColor: String, // Added to pass color to button
  },

  components: {
    Button,
  },

  methods: {
    shopHere() {
      alert("No need to wait: " + this.title);
    },
  },
};
</script>

<style scoped>
.Promo {
  width: 40%;
  height: 70%;
  margin-top: 2px;
  margin-right: 20px;
  border-radius: 20px;
  position: relative;
}
.Promo img {
  width: 100%;
  height: 90%;
  object-fit: contain;
  position: absolute;
  bottom: 0;
}


.Promo h2 {
 
  font-family: 'Poppins', sans-serif; ; 
  color: #263d61;/* Set font color */
  font-weight: 600; /* Makes the text slightly bold */
  line-height: 1.5;
  position: absolute;
  top: 20%;
  left: 9%;
  width: 50%;
}
</style>
