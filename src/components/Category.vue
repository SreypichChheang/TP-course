<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <div class="card-img">
      <img :src="imgSrc" :alt="title" />
    </div>
    <div class="card-text">
      <h4>{{ title }}</h4>
      <p>{{ items }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    imgSrc: String,
    title: String,
    items: String,
    bgColor: String,
  },
};
</script>

<style scoped>
  .card {
    color: black;
    border-radius: 10px;
    border: 1px solid rgb(247, 250, 247);
    width: 6.5rem;
    height: 8.5rem;
 
  }
  .card-img {
    width: 100%;
    height: 60%;
    border-radius: 10px;
  }
  .card-img img {
    width: 100%;
    height: 100%;
  }
  .card-text {
    width: 100%;
    height: 40%;
    border-radius: 10px;
    padding: 3px;
    
  }
  .card-text h4 {
    color: rgb(4, 4, 94);
    display: flex;
    justify-content: center;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 16px;
    

  }
  .card-text p {
    display: flex;
    justify-content: center;
    opacity: 0.8;
    font-size: 10px;
    font-family: 'Times New Roman', Times, serif;
    
  }
</style>
