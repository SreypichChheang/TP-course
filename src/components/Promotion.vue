<template>
  <div class="Promo" :style="{ backgroundColor: color }">
    <img :src="image" alt="Promotion Image" />
    <h2>{{ title }}</h2>
    <Button :buttonText="'Shop Now'" :clickHandler="shopHere" :buttonColor="buttonColor" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Promotion",

  props: {
    image: String,
    color: String, // Background color passed as a prop
    title: String, // Changed titlePromotion to title
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
  width: 30%;
  height: 200px; /* Adjust the height */
  margin-top: 20px; /* Adjust space between promotions */
  border-radius: 20px;
  position: relative; /* Required for absolute positioning of image */
  display: flex;
  flex-direction: column; /* Stack text and button vertically */
  justify-content: flex-start; /* Align text to the top */
  align-items: flex-start; /* Align items to the left */
  padding: 15px;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; /* Align text and button to the top-left */
}

.Promo h2 {
  font-family: 'Poppins', sans-serif;
  color: #263d61;
  font-size: 24px; /* Adjust the font size */
  text-align: left; /* Align title to the left */
  margin-bottom: 10px; /* Space between the title and button */
}

.Promo img {
  width: 30%; /* Makes the image fill the container's width */
  height: auto;
  object-fit: cover;
  position: absolute; /* Position the image absolutely within the container */
  bottom: 10px; /* Align the image to the bottom of the container */
  right: 10px; /* Align the image to the right of the container */
  border-radius: 15px; /* Optional: to add rounded corners to the image */
}


</style>
