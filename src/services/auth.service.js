import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://api.casety.fr/api/";

const register = (
  firstname,
  lastname,
  email,
  password,
  phone,
  city,
  adress,
  zip,
  terms,
  newsletters
) => {
  return axios.post(API_URL + "auth/signup", {
    firstname,
    lastname,
    email,
    password,
    phone,
    city,
    adress,
    zip,
    terms,
    newsletters
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "auth/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
