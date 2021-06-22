import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL || "https://api.casety.fr/api/";

const getBaskets = (id) => {
  return axios.get(API_URL + "user/" + id, { headers: authHeader() });
};

const exportedObject = {};

export default exportedObject;
