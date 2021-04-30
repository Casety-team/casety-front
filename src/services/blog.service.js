import axios from "axios";

const API_URL = "https://api.casety.fr/api/blog/";

export const getAllCategorie = () => {
  return axios.get(API_URL + "categorie");
};

export const getAllArticle = () => {
  return axios.get(API_URL + "article");
};

export const getSingleArticle = (value) => {
  return axios.get(API_URL + "article/" + value);
};

export const getSingleCategorie = (value) => {
  return axios.get(API_URL + "article/" + value);
};

export const add_new_categorie = (name) => {
  return axios.post(API_URL + "categorie", {
    name,
  });
};

export const add_new_article = (
  title,
  description,
  text,
  picture_url,
  categorieId
) => {
  return axios.post(API_URL + "article", {
    title,
    description,
    text,
    picture_url,
    categorieId,
  });
};

export const update_new_article = (
  id,
  title,
  description,
  text,
  picture_url,
  categorieId
) => {
  return axios.put(API_URL + "article/" + id, {
    title,
    description,
    text,
    picture_url,
    categorieId,
  });
};

export const delete_new_article = (id) => {
  return axios.delete(API_URL + "article/" + id);
};
