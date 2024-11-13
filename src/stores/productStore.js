import axios from 'axios';
import { defineStore } from 'pinia';

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
    async fetchGroups(){
        const response = await axios.get('http://localhost:3000/api/groups');
        this.groups = response.data;
    },

    async fetchCategories() {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
    },

    async fetchPromotions() {
      const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions= response.data;
    },

    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
    },

    }
});
