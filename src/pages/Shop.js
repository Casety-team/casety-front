import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import ShopService from "../services/shop.service";
import moment from "moment";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const Shop = () => {
  const currentUser = AuthService.getCurrentUser();
  const userId = currentUser.id;

  const [location, setLocation] = useState([]);
  const [myLocation, setMyLocation] = useState("");
  const [lockerType, setLockerType] = useState([]);
  const [myLockerType, setMyLockerType] = useState("");
  const [dateDepot, setMyDateDepot] = useState("");
  const [dateRetrait, setMyDateRetrait] = useState("");

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
    ShopService.getAllLockers();
  }, []);

  const createReserver = (e) => {
    e.preventDefault();
    ShopService.newReserver(dateDepot, dateRetrait, myLockerType, userId).then(
      (response) => {
        if (response.status === 200) {
          const startDate = moment(dateDepot);
          const timeEnd = moment(dateRetrait);
          const diff = timeEnd.diff(startDate);
          const diffDuration = moment.duration(diff);
          const hours = diffDuration.hours();
          const days = diffDuration.days();

          var count = 0;
          if (days) {
            for (var i = 0; i < days; i++) {
              count += 24;
            }
          }

          const r = hours + count;
          const result = r + "00";

          ShopService.getSingleLocker(myLockerType).then((e) => {
            ShopService.buyProduct(
              e.data.name,
              result,
              userId,
              response.data.id
            );
          });
        }
      },
      (error) => {
        console.log(
          error.response && error.response.data && error.response.data.message
        ) ||
          error.message ||
          error.toString();
      }
    );
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <ShoppingCartIcon
              className={
                "mx-auto h-12 w-auto text-blue-500 group-hover:text-blue-400"
              }
              aria-hidden="true"
            />

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Louer un casier
            </h2>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Selectionner un lieu
                    </label>
                    <select
                      id="location"
                      name="location"
                      autoComplete="location"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={myLocation}
                      onChange={(item) => setMyLocation(item.target.value)}
                    >
                      {location.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name +
                            " (" +
                            item.city +
                            " " +
                            item.zip_code +
                            ")"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Types de Casier
                    </label>
                    <select
                      id="location"
                      name="location"
                      autoComplete="location"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={myLockerType}
                      onChange={(item) => setMyLockerType(item.target.value)}
                    >
                      {lockerType.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name === "bikes"
                              ? "Vélo"
                              : item.name === "lockers"
                              ? "Sac à dos"
                              : "Valise"}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3" />
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="date_depot"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date de dépot
                    </label>
                    <input
                      name="date_depot"
                      id="date_depot"
                      placeholder="date_depot"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      type="datetime-local"
                      min="2020-06-01T08:30"
                      onChange={(item) => {
                        setMyDateDepot(
                          moment(item.target.value).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )
                        );
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="date_retrait"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date de retrait
                    </label>
                    <input
                      name="date_retrait"
                      id="date_retrait"
                      placeholder="date_retrait"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      type="datetime-local"
                      min="2020-06-01T08:30"
                      onChange={(item) => {
                        setMyDateRetrait(
                          moment(item.target.value).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  onClick={(e) => createReserver(e)}
                  type="submit"
                  className={
                    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  }
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <ShoppingCartIcon
                      className={
                        "h-5 w-5 text-blue-500 group-hover:text-blue-400"
                      }
                      aria-hidden="true"
                    />
                  </span>
                  Payer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
