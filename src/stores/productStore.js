
import { defineStore} from 'pinia';
import axios from 'axios';
export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),
  getters: {
    // Get categories by group name
    getCategoriesByGroup: (state) => {
      return (groupName) => {
        return state.categories.filter((category) => category.group === groupName);
      };
    },

    // Get products by group name
    getProductsByGroup: (state) => {
      return (groupName) => {
        return state.products.filter((product) => product.group === groupName);
      };
    },

    // Get products by category ID
    getProductsByCategory: (state) => {
      return (categoryId) => {
        return state.products.filter((product) => product.categoryId === categoryId);
      };
    },

    // Get popular products (countSold > 10)
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    }
  },
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        console.log('Categories fetched:', response.data); // Debug log
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error.response?.data || error.message);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        console.log('Promotions fetched:', response.data); // Debug log
        this.promotions = response.data;
      } catch (error) {
        console.error('Error fetching promotions:', error.response?.data || error.message);
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        console.log('Products fetched:', response.data); // Debug log
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      }
    },
    async fetchGroups() {
      try {
        const response = await axios.get('http://localhost:3000/api/groups'); // Ensure this matches your backend route
        console.log('Groups fetched:', response.data); // Debug log
        this.groups = response.data;
      } catch (error) {
        console.error('Error fetching groups:', error.response?.data || error.message);
      }
    }
  }
});
