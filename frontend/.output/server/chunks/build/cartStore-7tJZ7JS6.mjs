import { t as defineStore } from './server.mjs';
import { u as useAuthStore } from './authStore-ajW-SPS-.mjs';

const useCartStore = defineStore("cart", {
  state: () => ({
    cartList: []
  }),
  getters: {
    authStore() {
      return useAuthStore();
    }
  },
  actions: {
    // Load data from local storage
    loadFromLocalStorage() {
      const storedCart = localStorage.getItem("cart");
      this.cartList = storedCart ? JSON.parse(storedCart) : [];
    },
    // Save data to local storage
    saveToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cartList));
    },
    addItem(item, count) {
      const existingItemIndex = this.cartList.findIndex(
        (product) => product.id === item.id
      );
      if (existingItemIndex !== -1) {
        this.cartList[existingItemIndex] = {
          ...this.cartList[existingItemIndex],
          count: this.cartList[existingItemIndex].count + count
        };
      } else {
        this.cartList.push({ ...item, count });
      }
      this.saveToStorage();
    },
    updateItemCount(productId, newCount) {
      const index = this.cartList.findIndex(
        (item) => item.id === productId
      );
      if (index !== -1) {
        this.cartList[index] = {
          ...this.cartList[index],
          count: newCount
        };
        this.saveToStorage();
      }
    },
    removeItem(itemId) {
      this.cartList = this.cartList.filter((item) => item.id !== itemId);
      this.saveToStorage();
    },
    loadFromStorage() {
      if (this.authStore.authenticated) {
        try {
          console.log(
            "Fetching cart from API for authenticated user"
          );
        } catch (error) {
          console.error("Error fetching cart from API:", error);
          this.loadFromLocalStorage();
        }
      } else {
        this.loadFromLocalStorage();
      }
    },
    saveToStorage() {
      if (this.authStore.authenticated) {
        try {
          console.log("Saving cart to API for authenticated user");
        } catch (error) {
          console.error("Error saving cart to API:", error);
          this.saveToLocalStorage();
        }
      } else {
        this.saveToLocalStorage();
      }
    }
  }
});

export { useCartStore as u };
//# sourceMappingURL=cartStore-7tJZ7JS6.mjs.map
