import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
  }),

  actions: {
    SET_USER_TOKEN(token) {
      localStorage.setItem("token", token);
      this.token = token;
    },
    REMOVE_LOGIN_STATE() {
      localStorage.removeItem("token");
      this.token = "";
    },
  },

  getters: {
    getIsLoggedin: (state) => {
      if (state.token.length === 0 && state.authenticatePending) {
        return false;
      }

      return true;
    },
  },
});
