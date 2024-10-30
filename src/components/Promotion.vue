<template>
  <div  class="Promo" :style="{backgroundColor: bgColorSecond}">
      <img :src="bgImage" alt="">
      <h2>{{ TitlePromotion }}</h2>
      <Button :buttonText="'Show Now'"/>
  </div>
</template>
<script>
import Button from './Button.vue';
export default {
  name: "Promotion",
  components:{
      Button,
  },
  props:{
      bgImage:String,
      bgColorSecond:String,
      TitlePromotion: String,
      buttonColor: String,
      url:String
  }
}
</script>
<style scoped>
  .Promo{
  width: 23.5rem;
  height: 16rem;
  background-color: rgb(51, 129, 129);
  margin-top: 2rem;
  border-radius: 20px;
  position: relative;
  }
  .Promo img{
      width:75%;
      height: 75%;
       object-fit: contain;
      position: absolute;
      right: 0;
      bottom: 0;
  }
  .Promo h2{
      color: rgb(37, 37, 121);
      position: absolute;
      top: 15%;
      left: 10%;
      width: 50%;
  }
</style>