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

export function setHiringData(
  axios,
  fullname,
  phone,
  description,
  email,
  pdf_file
) {
  const data = {
    fullname,
    phone,
    description,
    email,
    pdf_file,
  };

  return axios.post(`/hiring/`, data);
}

export default {
  setContactUs,
  setHiringData,
};
