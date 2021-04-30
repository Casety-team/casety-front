import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://api.casety.fr/api/";

export const getAllLocker = () => {
  return axios.get(API_URL + "lockers");
};

export const getLocker = (id) => {
  return axios.get(API_URL + "lockers/" + id);
};

export const getLockerTypes = (id) => {
  return axios.get(API_URL + "locker_types/" + id);
};

export const delete_Locker = (id) => {
  return axios.delete(API_URL + "lockers/" + id);
};

export const delete_LockerTypes = (id) => {
  return axios.delete(API_URL + "locker_types/" + id);
};

export const add_new_lockerType = (
  nameLockerT,
  length,
  width,
  height,
  priceLocker
) => {
  return axios.post(API_URL + "locker_types", {
    name: nameLockerT,
    length,
    width,
    height,
    price: priceLocker,
  });
};

export const add_new_locker = (
  nameLocker,
  priceLocker,
  locationId,
  lockerTypeId
) => {
  return axios.post(API_URL + "lockers", {
    name: nameLocker,
    price: priceLocker,
    to_rent: "false",
    locationId,
    locker_type_id: lockerTypeId,
  });
};

export const update_new_lockerType = (
  idTypes,
  nameLockerT,
  length,
  width,
  height,
  priceLocker
) => {
  return axios.put(API_URL + "locker_types/" + idTypes, {
    name: nameLockerT,
    length,
    width,
    height,
    price: priceLocker,
  });
};

export const update_new_locker = (
  idLocker,
  nameLocker,
  priceLocker,
  locationId,
  lockerTypeId
) => {
  return axios.put(API_URL + "lockers/" + idLocker, {
    name: nameLocker,
    price: priceLocker,
    to_rent: "false",
    locationId,
    locker_type_id: lockerTypeId,
  });
};
