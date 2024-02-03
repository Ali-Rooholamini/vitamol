export function getEvent(axios) {
  return axios.get("/event/");
}

export default {
  getEvent,
};
