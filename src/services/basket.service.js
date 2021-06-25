import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL || "https://api.casety.fr/api/";

export const getAllBaskets = (id) => {
  return axios.get(API_URL + "reservers/baskets/" + id, {
    headers: authHeader(),
  });
};

export const getBasket = (id) => {
  return axios.get(API_URL + "reservers/basket/" + id, {
    headers: authHeader(),
  });
};

export const verifyBuy = (token) => {
  return axios
    .get("https://api.casety.fr/stripe/charge/success/" + token, {
      headers: authHeader(),
    })
    .then((e) => e);
};

const exportedObject = { getAllBaskets, getBasket, verifyBuy };

export default exportedObject;
