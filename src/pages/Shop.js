import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import ShopService from "../services/shop.service";
import moment from "moment";

const Shop = () => {
  const currentUser = AuthService.getCurrentUser();
  const userId = currentUser.id;

  const [location, setLocation] = useState([]);
  const [myLocation, setMyLocation] = useState("");
  const [lockerType, setLockerType] = useState([]);
  const [myLockerType, setMyLockerType] = useState("");
  const [locker, setLocker] = useState([]);
  const [dateDepot, setMyDateDepot] = useState("");
  const [dateRetrait, setMyDateRetrait] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  console.log(myLocation);
  useEffect(() => {
    ShopService.getAllLocations().then(
      (response) => {
        setLocation(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setLocation(_content);
      }
    );
  }, []);

  useEffect(() => {
    ShopService.getAllLockerTypes().then(
      (response) => {
        setLockerType(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setLockerType(_content);
      }
    );
  }, []);

  useEffect(() => {
    ShopService.getAllLockers().then(
      (response) => {
        setLocker(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setLocker(_content);
      }
    );
  }, []);

  const createReserver = (e) => {
    e.preventDefault();
    ShopService.newReserver(dateDepot, dateRetrait, myLockerType, userId).then(
      (response) => {
        console.log(response);
        if (response.status == 200) {
          window.location = "/buy/" + myLocation;
        }
      },
      (error) => {
        console.log(error);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (
    <>
      {!currentUser ? (
        <a href="/login">Go login</a>
      ) : (
        <form
          className="mt-5 container"
          onSubmit={createReserver}
          style={{ paddingTop: 30 }}
        >
          <label htmlFor="lieu">Choisissez un lieu </label>
          <select
            name="lieu"
            value={myLocation}
            onChange={(item) => setMyLocation(item.target.value)}
          >
            <option value="0" selected />
            {location.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <label htmlFor="type">Choisissez un type de casier </label>
          <select
            name="type"
            value={myLockerType}
            onChange={(item) => {
              setMyLockerType(item.target.value);
            }}
          >
            {lockerType.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <label for="start">Date de dépot</label>
          <input
            name="start"
            type="datetime-local"
            min="2020-06-01T08:30"
            onChange={(item) => {
              setMyDateDepot(
                moment(item.target.value).format("YYYY-MM-DD HH:mm:ss")
              );
            }}
          />
          <label for="end">Date de retrait</label>
          <input
            name="end"
            type="datetime-local"
            min="2020-06-01T08:30"
            onChange={(item) => {
              setMyDateRetrait(
                moment(item.target.value).format("YYYY-MM-DD HH:mm:ss")
              );
            }}
          />

          <input type="submit" value="Commander" />
        </form>
      )}
    </>
  );
};

export default Shop;
