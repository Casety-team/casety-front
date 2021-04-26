import axios from "axios";

const API_URL = "http://api.casety.fr/api/blog/";

export const getAllCategorie = (firstname, lastname, email, password) => {
  return axios.get(API_URL + "categorie");
};

export const getAllArticle = () => {
  return axios.get(API_URL + "article");
};

export const getSingleArticle = (value) => {
  return axios.get(API_URL + "article/" + value);
};
