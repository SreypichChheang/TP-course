<template>
  <div class="card" :style="{ backgroundColor: color }">
    <div class="card-img">
      <img :src="image" :alt="name" />
    </div>
    <div class="card-text">
      <h2>{{ name }}</h2>
      <p>{{ productCount }} items</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    image: String,
    name: String,
    productCount: Number,
    color: String,  // Color is passed as a prop
  },
};
</script>

<style scoped>
.card {
  color: black;
  border-radius: 10px;
  border: 1px solid green;
  width: 8.5rem;
  height: 12rem; /* Adjusted height to fit both image and text */
  display: flex;
  flex-direction: column; /* Stack image and text vertically */
  justify-content: space-between;
  padding: 5px;
  gap: 10px; /* Adds a gap between the image and the text */
}

.card-img {
  width: 100%;
  height: 60%; /* Make the image take up 60% of the card's height */
  display: flex;
  justify-content: center; /* Center the image */
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensure the image fits well within the container */
}

.card-text {
  
  width: 100%;
  height: 40%; /* Make the text take up the remaining space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center the text */
  padding: 5px;
  text-align: center; /* Center text */
}

.card-text h2 {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #263d61;/* Set font color */
  

}

.card-text p {
  font-size: 0.9rem;
  margin: 5px 0 0;
  opacity: 0.8;
  color: #8c9096;/* Set font color */

}
</style>
