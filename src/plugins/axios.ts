import axios from "axios";

let protocol = "https:";

if(process.browser){
  protocol = window.location.protocol;
}

export default defineNuxtPlugin(() => {
  let api = axios.create({
    baseURL : `${protocol}//api.vitamolcare.com`,
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