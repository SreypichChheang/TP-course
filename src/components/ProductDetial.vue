<template>
    <div class="container">
      <!-- Loading state -->
      <div v-if="!product">Loading...</div>
  
      <div v-else>
        <!-- Breadcrumb -->
        <div class="title">
          <p>Home</p>
          <p>></p>
          <p>{{ product.group }}</p>
          <p>></p>
          <p style="color: #3bb77e">{{ product.name }}</p>
        </div>
  
        <!-- Main product section -->
        <div class="two">
          <!-- Left: Image carousel -->
          <div class="left">
            <div class="main-image">
              <!-- Display the main image (first image in the array) -->
              <img :src="currentImage" alt="" class="img-big" />
            </div>
  
            <div class="thumbnail-container">
              <!-- Button to navigate left -->
              <button class="button" aria-label="Previous Image">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
              </button>
  
              <!-- Thumbnails: All images except the first one -->
              <div class="thumbnails">
                <img
                  v-for="(image, index) in thumbnails"
                  :key="index"
                  :src="image"
                  @click="changeImage(image)"
                  class="thumbnail"
                  alt="Thumbnail"
                />
              </div>
  
              <!-- Button to navigate right -->
              <button class="button" style="background-color: grey" aria-label="Next Image">
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>
  
          <!-- Right: Product details -->
          <div class="right">
            <div class="text">
              <h5>{{ product.instock }}</h5>
            </div>
            <div class="product-name">
              <h2>{{ product.name }}</h2>
            </div>
            <div class="rating">
              <span
                v-for="i in 5"
                :key="i"
                class="star"
                :class="{ filled: i <= product.rating }"
              >★</span>
              <span>({{ product.rating }}.0)</span>
            </div>
            <div class="price-section">
              <span class="current-price">${{ product.price }}</span>
              <span class="old-price">${{ product.oldPrice }}</span>
            </div>
            <p>{{ product.description }}</p>
  
            <div class="add-to-cart-section">
              <MyButton />
              <button class="add-to-cart-button" @click="addToCart">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                Add To Cart
              </button>
              <font-awesome-icon :icon="['fas', 'heart']" />
              <font-awesome-icon :icon="['fas', 'shuffle']" />
            </div>
  
            <div class="vendor-info">
              <p>
                Vendor: <span class="vendor-text">{{ product.vendor }}</span>
              </p>
              <p>
                SKU: <span class="vendor-text">{{ product.sku }}</span>
              </p>
            </div>
          </div>
        </div>
  
        <!-- Tabs Section -->
        <div class="tabs">
          <div class="tab-buttons">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              :class="{ active: selectedTab === tab }"
              @click="selectedTab = tab"
              class="tab-btn"
            >
              {{ tab }}
            </button>
          </div>
  
          <div class="tab-content">
            <div v-if="selectedTab === 'Description'">
              <p>{{ description }}</p>
            </div>
            <div v-if="selectedTab === 'Additional info'">
              <p>{{ additionalInfo }}</p>
            </div>
            <div v-if="selectedTab === 'Reviews (3)'">
              <ul>
                <li v-for="(review, index) in reviews" :key="index">
                  {{ review }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 1480px;
}

.title {
  margin: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5%;
  font-family: "Lato", sans-serif;
  font-size: 14px;
}

.two {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  margin: 1%;
  width: 100%;
}

.left, .right {
  border-radius: 10px;
}

.main-image {
  width: 100%;
  max-width: 800px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
}

.thumbnail-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.button {
  background-color: #3bb77e;
  border: none;
  color: white;
  border-radius: 20px;
  width: 53.57px;
  height: 40px;
}

.thumbnail {
  width: 90px;
  height: 90px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid #3bb77e;
  border-radius: 5px;
}

.thumbnail:hover {
  border-color: #3bb77e;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 20px;
  border-radius: 5px;
  background-color: #def9ec;
  color: #3bb77e;
  font-family: Quicksand, serif;
}

.product-name {
  font-family: Quicksand, serif;
  margin-bottom: 10px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 3px;
}

.star {
  color: #ccc;
}

.star.filled {
  color: #f2b01e;
}

.price-section {
  font-family: Quicksand, serif;
  display: inline;
}

.current-price {
  font-size: 60px;
  font-weight: bold;
  color: #3bb77e;
}

.old-price {
  font-size: 30px;
  margin-left: 15%;
  text-decoration: line-through;
  color: #888;
}

.add-to-cart-section {
  display: flex;
  gap: 3%;
  align-items: center;
  margin-top: 5%;
}

.add-to-cart-button {
  background-color: #3bb77e;
  color: white;
  width: 130px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.vendor-info {
  font-family: Lato, sans-serif;
  margin-top: 15%;
  color: #666;
}

.vendor-text {
  color: #b5bab8;
}

.tabs {
  width: 100%;
  max-width: 800px;
  margin: 10%;
}

.tab-buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.tab-btn {
  padding: 10px 20px;
  margin-right: 20px;
  border: none;
  background-color: #f2f3f4;
  border-radius: 20px;
  cursor: pointer;
  color: #b6b6b6;
  font-family: Quicksand, serif;
}

.tab-btn.active {
  background-color: #f2f3f4;
  color: #08e67e;
}

.tab-content {
  font-family: Lato, sans-serif;
  padding: 20px;
  color: #7e7e7e;
}
</style>
  