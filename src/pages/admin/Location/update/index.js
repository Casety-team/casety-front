import React, { useState, useEffect } from "react";

import {
  getAllLocation,
  getLocation,
  update_new_location,
} from "../../../../services/location.service";

const UpdateLocation = () => {
  const [name, setName] = useState("");
  const [first_adress, setFirst_adress] = useState("");
  const [second_adress, setSecond_adress] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [transport, setTransport] = useState("");
  const [opening_hours, setOpening_hours] = useState("");
  const [closing_hours, setClosing_hours] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [getAll, setGetAll] = useState([]);
  const [getIdLocation, setGetIdLocation] = useState(0);

  useEffect(() => {
    getAllLocation().then((item) => setGetAll(item.data));
  }, []);

  useEffect(() => {
    getLocation(getIdLocation).then((item) => {
      setName(item.data.name);
      setFirst_adress(item.data.first_adress);
      setSecond_adress(item.data.second_adress);
      setCity(item.data.city);
      setZip_code(item.data.zip_code);
      setTransport(item.data.transport);
      setOpening_hours(item.data.opening_hours);
      setClosing_hours(item.data.closing_hours);
      setLatitude(item.data.latitude);
      setLongitude(item.data.longitude);
    });
  }, [getIdLocation]);

  const handleUpdateForm = () => {
    update_new_location(
      getIdLocation,
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
    ).then(() => {
      console.log("success update");
    });
  };
  return (
    <div className="mt-3 container">
      <select
        class="form-select"
        value={getIdLocation}
        onChange={(item) => setGetIdLocation(item.target.value)}
      >
        <option selected>Selectionner un lieux</option>
        {getAll.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </select>

      {getIdLocation > 0 && (
        <div className="w-90 container mt-5">
          <div className="row mt-3">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(item) => setName(item.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={first_adress}
                onChange={(item) => setFirst_adress(item.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={second_adress}
                onChange={(item) => setSecond_adress(item.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(item) => setCity(item.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <input
                type="number"
                className="form-control"
                value={zip_code}
                onChange={(item) => setZip_code(item.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={transport}
                onChange={(item) => setTransport(item.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <input
                type="number"
                className="form-control"
                value={opening_hours}
                onChange={(item) => setOpening_hours(item.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="number"
                className="form-control"
                value={closing_hours}
                onChange={(item) => setClosing_hours(item.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={latitude}
                onChange={(item) => setLatitude(item.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={longitude}
                onChange={(item) => setLongitude(item.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => handleUpdateForm()}
              className="mt-5 w-50 container btn btn-primary"
            >
              Mettre à jour un nouveau lieux
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateLocation;
