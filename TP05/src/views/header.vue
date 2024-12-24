<template>
  <header class="header">
    <nav>
      <div class="header-left">
        <router-link :to="{ name: 'page', params: { nb: 1 } }" class="btn">
          Header
        </router-link>
      </div>
      <div class="header-right">
        <router-link
          v-for="page in pages"
          :key="page.nb"
          :to="{ name: 'page', params: { nb: page.nb } }"
          class="btn"
          :class="{ active: isPageActive(page.nb) }"
        >
          {{ page.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "NavBar",
  setup() {
    const route = useRoute();

    const isPageActive = (nb) => {
      // Check if the current route matches the exact page number
      return route.params.nb === String(nb);
    };

    return { isPageActive };
  },
  data() {
    return {
      pages: [
        { nb: 1, name: "Page 1" },
        { nb: 2, name: "Page 2" },
        { nb: 3, name: "Page 3" },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
}

nav {
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
  justify-content: flex-start;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.btn {
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
  background-color: #eee;
  color: #130f0f;
}

.btn.active {
  color: red;
  font-weight: bold;
  
}
</style>
