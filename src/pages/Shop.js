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
        if (response.status === 200) {
          ShopService.getSingleLocker(myLockerType).then((e) => {
            ShopService.buyProduct(
              e.data.name,
              e.data.price,
              userId,
              response.data.id
            );
          });
        }
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
      <div className="container-fluid col-xl-10 mt-5 col-xxl-8 px-4 py-5">
        <h1 className="display-4 fw-bold lh-1 text-center mb-3">
          Commander un Casier
        </h1>
        <div className="row align-items-center g-lg-5">
          <div className="col-md-8 mx-auto col-lg-8">
            {!currentUser ? (
              <a href="/login">Go login</a>
            ) : (
              <form className="mt-5 container" style={{ paddingTop: 30 }}>
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <select
                      className="form-select"
                      aria-label="Lieux"
                      value={myLocation}
                      onChange={(item) => setMyLocation(item.target.value)}
                    >
                      <option value="default" selected>Lieu</option>
                      {location.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <select
                      className="form-select"
                      aria-label="Lieux"
                      value={myLockerType}
                      onChange={(item) => setMyLockerType(item.target.value)}
                    >
                      <option value="default" selected>Types de casier</option>
                      {lockerType.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    placeholder="Date de dépot"
                    className="form-control"
                    type="datetime-local"
                    min="2020-06-01T08:30"
                    onChange={(item) => {
                      setMyDateDepot(
                        moment(item.target.value).format("YYYY-MM-DD HH:mm:ss")
                      );
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Date de retrait"
                    type="datetime-local"
                    min="2020-06-01T08:30"
                    onChange={(item) => {
                      setMyDateRetrait(
                        moment(item.target.value).format("YYYY-MM-DD HH:mm:ss")
                      );
                    }}
                  />
                </div>
                <button
                  className="w-100 btn btn-lg btn-primary"
                  onClick={(e) => createReserver(e)}
                  type="submit"
                >
                  Commander
                </button>
              </form>
            )}
          </div>
          <div className="col-lg-4 text-center text-lg-start">
            <p className="col-lg-12 fs-6">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
