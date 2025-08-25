import axios from "axios";

export default defineNuxtPlugin(() => {
  let api = axios.create({
    baseURL : `http://localhost:5000`,
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