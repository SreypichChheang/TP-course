<template>
  <div id="app">
    <Header />
    <div class="layout">
      <Menu />
      <div class="content">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './views/header.vue'; // Corrected "form" to "from"
import Footer from './views/footer.vue'; // Corrected "form" to "from"
import Menu from './views/menu.vue';     // Corrected "form" to "from"

export default {
  components: { Header, Menu, Footer },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensures the app spans the entire viewport height */
}

.layout {
  display: flex;
  flex: 1; /* Allows the layout to take up all available vertical space */
}

.content {
  flex: 1; /* Ensures the content area expands to fill available space */
  padding: 20px;
  border-left: 1px solid #ddd; /* Visual separation from the menu */
}
</style>
