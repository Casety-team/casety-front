import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4545/api/";

const register = (firstname, lastname, email, password) => {
  return axios.post(API_URL + "auth/signup", {
    firstname,
    lastname,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
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
