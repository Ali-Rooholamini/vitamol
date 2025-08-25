import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  // state: () => ({
  //   token: localStorage.getItem("token") || "",
  // }),

  actions: {
    SET_USER_TOKEN(token) {
      localStorage.setItem("token", token);
    },
    REMOVE_LOGIN_STATE() {
      localStorage.removeItem("token");
    },
  },

  getters: {
    getIsLoggedin: (state) => {
      const localToken = localStorage.getItem("token") || "";
      if (localToken.length === 0) {
        return false;
      }

      return true;
    },
  },
});
