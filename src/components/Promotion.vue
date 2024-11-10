<template>
  <div class="Promo" :style="{ backgroundColor: color }">
    <img :src="image" alt="" />
    <h2>{{ TittlePromotion }}</h2>
    <Button :buttonText="'Show Now'" />
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "promotion",
  components: {
    Button,
  },
  props: {
    tiltle: String,
    url: String,
    color: String,
    buttonColor: String,
    image: String,
  },
};
</script>
<style scoped>
.Promo {
  width: 23.5rem;
  height: 16rem;
  background-color: rgb(51, 129, 129);
  margin-top: 2rem;
  border-radius: 20px;
  position: relative;
}
.Promo img {
  width: 75%;
  height: 75%;
  object-fit: contain;
  position: absolute;
  right: 0;
  bottom: 0;
}
.Promo h2 {
  color: rgb(37, 37, 121);
  position: absolute;
  top: 15%;
  left: 10%;
  width: 50%;
}
</style>
