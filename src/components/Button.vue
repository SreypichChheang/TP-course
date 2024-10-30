<template>
  <button type="button" class=".shop-button" @click="clickHandler">{{ buttonText }} &#8594;</button> 
</template>
<script>
export default {
  name: " Button",
  props: {
      buttonText: {
          type: String,
          Required: true,
      },
      // tp02
      clickHandler: {
          type: Function,
          required: true,
      },
  },

}
</script>
<script>
import Promotion from './Promotion.vue';

export default {
  // name: "Button", // Uncomment this if you need to name the component
  props: {
    buttonText: {
      type: String,
      required: true, // Use lowercase 'required'
    },
  },
}
</script>

<style scoped>
.shop-button {
  border-radius: 5px;
  width: 100px;
  height: 30px;
  background-color: #3BB77E;
  font-size: 13px;
  color: white;
  margin-top: 45%;
  position: absolute;
  border: none;
  margin-left: 10%;
  display: flex; /* Use flex to align items */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
}

.shop-button i {
  margin-left: 5px; /* Add space between text and icon */
}

.shop-button:hover {
  background-color: #FDC040;
}
</style>
