import React, { useState, useEffect } from "react";

import { add_new_location } from "../../../../services/location.service";

const CreateLocation = () => {
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

  const handleAddForm = () => {
    add_new_location(
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
      console.log("success");
    });
  };
  return (
    <div className="mt-3 container">
      <div className="w-90 container mt-5">
        <div className="row mt-3">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Nom du lieux"
              value={name}
              onChange={(item) => setName(item.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Adresse principale"
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
              placeholder="Adresse Secondaire"
              value={second_adress}
              onChange={(item) => setSecond_adress(item.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Ville"
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
              placeholder="Code Postale"
              value={zip_code}
              onChange={(item) => setZip_code(item.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Transport"
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
              placeholder="Heure d'ouverture"
              value={opening_hours}
              onChange={(item) => setOpening_hours(item.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              placeholder="Heure de fermeture"
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
              placeholder="Latitude de la ville"
              value={latitude}
              onChange={(item) => setLatitude(item.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Longitude de la ville"
              value={longitude}
              onChange={(item) => setLongitude(item.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => handleAddForm()}
            className="mt-5 w-50 container btn btn-success"
          >
            Créer un nouveau lieux
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLocation;
