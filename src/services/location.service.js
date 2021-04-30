import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://api.casety.fr/api/";

export const add_new_location = (
  name,
  first_adress,
  second_adress,
  city,
  zip_code,
  transport,
  opening_hours,
  closing_hours,
  latitude,
  longitude
) => {
  return axios.post(API_URL + "locations", {
    name,
    first_adress,
    second_adress,
    city,
    zip_code,
    transport,
    opening_hours,
    closing_hours,
    latitude,
    longitude,
  });
};

export const getAllLocation = () => {
  return axios.get(API_URL + "locations");
};

export const getLocation = (id) => {
  return axios.get(API_URL + "locations/" + id);
};

export const update_new_location = (
  id,
  name,
  first_adress,
  second_adress,
  city,
  zip_code,
  transport,
  opening_hours,
  closing_hours,
  latitude,
  longitude
) => {
  return axios.put(API_URL + "locations/" + id, {
    name,
    first_adress,
    second_adress,
    city,
    zip_code,
    transport,
    opening_hours,
    closing_hours,
    latitude,
    longitude,
  });
};

export const delete_new_location = (id) => {
  return axios.delete(API_URL + "locations/" + id);
};
