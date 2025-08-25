export function registerUser(axios, email, password, phoneNumber) {
  const data = {
    email,
    password,
    phone_number: phoneNumber,
  };

  return axios.post(`/register`, data);
}

export function loginUser(axios, email, password, phoneNumber) {
  const data = {
    email,
    password,
    phone_number: phoneNumber,
  };

  return axios.post(`/login`, data);
}

export default {
  registerUser,
  loginUser,
};
