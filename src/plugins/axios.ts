import axios from "axios";

export default defineNuxtPlugin(() => {
  let api = axios.create({
    baseURL : "http://api.vitamolcare.com",
    headers: {
      "Content-Type": "application/json",
    },
  });
return {
    provide: {
      axios : api
    },
  };
});