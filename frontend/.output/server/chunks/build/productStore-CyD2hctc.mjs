import { t as defineStore } from './server.mjs';
import { g as getApiBaseUrl } from './utils-U-D2mQHl.mjs';

const useProductStore = defineStore({
  id: "productStore",
  state: () => {
    return {
      productsList: []
    };
  },
  actions: {
    async getProducts() {
      const list = await $fetch(`${getApiBaseUrl()}admin/products/`, {
        method: "GET"
      });
      this.productsList = list.results;
    }
  },
  getters: {
    getProductById: (state) => async (id) => {
      if (state.productsList.length === 0) {
        await state.getProducts();
      }
      const numericId = parseInt(id, 10);
      const product = state.productsList.find(
        (product2) => product2.id === numericId
      );
      return product;
    }
  }
});

export { useProductStore as u };
//# sourceMappingURL=productStore-CyD2hctc.mjs.map
