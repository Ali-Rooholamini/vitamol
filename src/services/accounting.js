export function registerUser(axios, name, last_name, phone, description) {
  const data = {
    name,
    last_name,
    phone,
    description,
  };

  return axios.post(`/register/`, data);
}

export default {
  registerUser,
};
