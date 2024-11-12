<template>
  <button type="button" class="shop-button" @click="clickHandler">
    {{ buttonText }} &#8594;
  </button>
</template>
<script>
export default {
  name: "Button", // Uncomment this if you need to name the component
  props: {
    buttonText: {
      type: String,
      required: true, // Use lowercase 'required'
    },
    clickHandler: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>


.shop-button {
  background-color: rgb(30, 168, 99);
  border-radius: 5px;
  width: 25%;
  height: auto;
  font-size: 14px;
  color: rgb(255, 255, 255);
  position: absolute;
  bottom: 10%; /* Adjust to position within the picture */
  left: 10%; /* Adjust to position near the right border */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px; /* Adjust padding for button size */
}

.shop-button i {
  margin-left: 5%;
}

.shop-button:hover {
  background-color: #fdc040;
}

</style>
