<template>
  <aside class="menu">
    <ul>
      <li>Menu</li>
      <li v-for="section in sections" :key="section.id" class="menu-item">
        <router-link 
          :to="{ name: 'section', params: { id: section.id } }" 
          class="menu-link" 
          :class="{ active: isSectionActive(section.id) }"
        >
          {{ section.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      sections: [
        { id: 1, name: 'Section 1' },
        { id: 2, name: 'Section 2' },
        { id: 3, name: 'Section 3' },
        { id: 4, name: 'Section 4' },
      ],
    };
  },
  setup() {
    const route = useRoute();

    const isSectionActive = (id) => {
      // Determine if the current route matches the section
      return route.name === "section" && route.params.id === String(id);
    };

    return { isSectionActive };
  },
};
</script>

<style>
.menu {
  width: 200px;
  padding: 10px;
  background-color: #f9f9f9;
  border-left: 1px solid black;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  width: 200px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #ccc; /* Add border around each item */
  transition: background-color 0.3s ease;
  padding-left: 10px;
}

.menu-item:hover {
  background-color: #d6cbcb; /* Highlight on hover */
}

.menu-link {
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
}

.menu-link.active {
  color: red;
  font-weight: bold;
}
</style>
