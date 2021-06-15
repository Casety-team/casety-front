import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL || "https://api.casety.fr/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getUser = (id) => {
  return axios.get(API_URL + "user/" + id, { headers: authHeader() });
};

const userUpdate = (
  id,
  firstname,
  lastname,
  email,
  phone,
  adress,
  city,
  zip
) => {
  return axios.put(
    API_URL + "user/" + id,
    {
      id,
      firstname,
      lastname,
      email,
      phone,
      adress,
      city,
      zip,
    },
    { headers: authHeader() }
  );
};

const deleteUser = (id) => {
  return axios.post(API_URL + "user/" + id, { headers: authHeader() });
};

const exportedObject = {
  getPublicContent,
  getUser,
  userUpdate,
  getUserBoard,
  deleteUser,
  getModeratorBoard,
  getAdminBoard,
};

export default exportedObject;
