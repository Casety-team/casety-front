import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL || "https://api.casety.fr/api/";

export const getAllBaskets = (id) => {
  return axios.get(API_URL + "reservers/baskets/" + id);
};

export const getBasket = (id) => {
  return axios.get(API_URL + "reservers/basket/" + id, {
    headers: authHeader(),
  });
};

export const getTokenList = (token) => {
  return axios
    .get("https://api.casety.fr/api/reservers/token/" + token, {
      headers: authHeader(),
    })
    .then((e) => {
      return e;
    });
};

export const verifyBuy = (token, paymentIntent) => {
  console.log(token, paymentIntent);
  return axios
    .post("https://api.casety.fr/stripe/charge/success/" + token, {
      paymentIntent,
    })
    .then((e) => {
      return e;
    });
};

const exportedObject = { getAllBaskets, getTokenList, getBasket, verifyBuy };

export default exportedObject;
