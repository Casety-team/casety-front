import axios from "axios";

const API_URL = "http://localhost:4545/api/";

const idPk = 0

const getAllLocations = () => {
  return axios.get(API_URL + "locations");
};


const getSingleLocation = () => {
  return axios.get(API_URL + "locations/" + idPk);
};

const getAllLockerTypes = () => {
  return axios.get(API_URL + "locker_types/")
}

const getAllLockers = () => {
  return axios.get(API_URL + "lockers")
}

const newReserver = (date_start, date_end, lockerId, userId) => {
  return axios.post(API_URL + "reservers", {
    date_start,
    date_end,
    lockerId,
    userId,
  });
}

export default {
  getAllLocations,
  getSingleLocation,
  idPk,
  getAllLockerTypes,
  getAllLockers,
  newReserver,
};
