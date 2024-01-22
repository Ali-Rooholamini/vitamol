export function setContactUs(axios, fullname, phone, email, day, hour) {
  const data = {
    fullname,
    phone,
    email,
    day,
    hour,
  };

  return axios.post(`/contact-us/`, data);
}

export function setHiringData(axios, formData) {
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  return axios.post(`/hiring/`, formData, { headers: headers });
}

export default {
  setContactUs,
  setHiringData,
};
