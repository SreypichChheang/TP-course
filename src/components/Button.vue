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
  background-color: rgb(18, 201, 140);
    width: 100px;
    height: 40px;
    font-size: 13px;
    color: white;
    margin-top: 35%;
    position: absolute;
    border: none;
   
}

.shop-button i {
  margin-left: 10%;
}

.shop-button:hover {
  background-color: #fdc040;
}

</style>
