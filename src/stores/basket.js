import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    basketItems: [],
  }),

  actions: {
    SET_Basket_Item(item) {
      this.basketItems.push(item);
    },
  },
});
