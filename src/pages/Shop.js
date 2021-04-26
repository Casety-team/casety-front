import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import ShopService from "../services/shop.service";

const Shop = () => {
  const currentUser = AuthService.getCurrentUser();
  const userId = currentUser.id;
  const [location, setLocation] = useState([]);
  const [myLocation, setMyLocation] = useState("");
  const [lockerType, setLockerType] = useState([]);
  const [myLockerType, setMyLockerType] = useState("");
  const [locker, setLocker] = useState([]);
  const [myLocker, setMyLocker] = useState("");
  const [dateDepot, setMyDateDepot] = useState("");
  const [dateRetrait, setMyDateRetrait] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    ShopService.getAllLocations().then(
      (response) => {
        setLocation(response.data);
        console.log();
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
        console.log();
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
        console.log();
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
    ShopService.newReserver(dateDepot, dateRetrait, myLocker, userId).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
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
        <form onSubmit={createReserver}>
          <label htmlFor="lieu">Choisissez un lieu </label>
          <select
            name="lieu"
            value={myLocation}
            onChange={(e) => setMyLocation(e.currentTarget.value)}
          >
            <option value="" selected>
              ...
            </option>
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
            onChange={(e) => setMyLockerType(e.currentTarget.value)}
          >
            <option value="" selected>
              ...
            </option>
            {lockerType.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <label htmlFor="locker">Choisissez casier </label>
          <select
            name="locker"
            value={myLocker}
            onChange={(e) => setMyLocker(e.currentTarget.value)}
          >
            <option value="" selected>
              ...
            </option>
            {locker.map((item) =>
              item.locationId == myLocation &&
              item.locker_type_id == myLockerType ? (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ) : (
                console.log("nul")
              )
            )}
          </select>

          {console.log(myLocation)}
          {console.log(myLockerType)}
          <label for="start">Date de dépot</label>
          <input
            name="start"
            type="datetime-local"
            min="2020-06-01T08:30"
            onChange={(e) =>
              setMyDateDepot()
              // moment(e.currentTarget.value).format("YYYY-MM-DD HH:mm:ss")
            }
          />
          <label for="end">Date de retrait</label>
          <input
            name="end"
            type="datetime-local"
            min="2020-06-01T08:30"
            onChange={(e) =>
              setMyDateRetrait()
              // moment(e.currentTarget.value).format("YYYY-MM-DD HH:mm:ss")
            }
          />
          {console.log(dateDepot)}
          {console.log(dateRetrait)}

          <input type="submit" value="Commander" />
        </form>
      )}
    </>
  );
};

export default Shop;
