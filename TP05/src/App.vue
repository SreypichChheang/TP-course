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
import Header from './components/header.vue';
import Menu from './components/menu.vue';
import Footer from './components/footer.vue';

export default {
  components: { Header, Menu, Footer },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 20px;
  border-left: 1px solid #ddd;
}
</style>
