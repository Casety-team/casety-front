import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51I6xfpGWsM2bVeof75ZGYq7KXzLoNhta0xQFMtwbOZTz6sQKE2200cc7J8QoeGXkILPAve6Wl1zdLRL1TBFaGaQZ00k7zmJZhm"
);

const API_URL = "https://api.casety.fr/api/";

const getAllLocations = () => {
  return axios.get(API_URL + "locations");
};

const getSingleLocation = (locationId) => {
  return axios.get(API_URL + "locations/" + locationId);
};

const getSingleLocker = (lockerId) => {
  return axios.get(API_URL + "lockers/" + lockerId);
};

const getAllLockerTypes = () => {
  return axios.get(API_URL + "locker_types/");
};

const getAllLockers = () => {
  return axios.get(API_URL + "lockers");
};

const newReserver = (dateDepot, dateRetrait, myLockerType, userId) => {
  return axios.post(API_URL + "reservers", {
    date_start: dateDepot,
    date_end: dateRetrait,
    lockerId: myLockerType,
    userId: userId,
  });
};

const buyProduct = (nameProduct, unitAmount, userId, reservationId) => {
  return axios
    .post("https://api.casety.fr/stripe/charge/", {
      nameProduct: nameProduct,
      unitAmount: unitAmount,
      quantity: 1,
      userId: userId,
      reservationId: reservationId,
    })
    .then(async (e) => {
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: e.data.id,
      });
    });
};

export default {
  getAllLocations,
  getSingleLocation,
  getSingleLocker,
  getAllLockerTypes,
  getAllLockers,
  newReserver,
  buyProduct,
};
