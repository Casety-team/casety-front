import React, { useState, useEffect } from "react";

import {
  getAllLocation,
  getLocation,
  delete_new_location,
} from "../../../../services/location.service";

const DeleteLocation = () => {
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
  }, [getAll]);

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

  const handleDeleteForm = () => {
    delete_new_location(getIdLocation).then(() => {
      console.log("success Delete");
    });
  };

  return (
    <div className="mt-3 container">
      <select
        class="form-select"
        value={getIdLocation}
        onChange={(item) => setGetIdLocation(item.target.value)}
      >
        <option value="default" selected>
          Selectionner un lieux à supprimer
        </option>
        {getAll.map((item, i) => {
          return (
            <option key={i} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>

      {getIdLocation > 0 && (
        <div className="w-90">
          <div className="card w-90 container mt-5 pb-5">
            <h4 className="mt-5">{name}</h4>
            {first_adress && (
              <div className="col-sm-6">
                {first_adress} {city}, {zip_code}
              </div>
            )}
            {second_adress && (
              <div className="col-sm-6">
                {second_adress} {city}, {zip_code}
              </div>
            )}
            <div className="row mt-3">
              <div className="col-sm-6">{transport}</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6">Heures d'ouverture {opening_hours}</div>
              <div className="col-sm-6">
                Heures de fermeture {closing_hours}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6">Latitude: {latitude}</div>
              <div className="col-sm-6">Longitude: {longitude}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleDeleteForm()}
            className="mt-5 w-50 container btn btn-danger"
          >
            Supprimer une nouveau lieux
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteLocation;
