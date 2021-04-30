import React, { useState, useEffect } from "react";

import { getAllLocation } from "../../../../services/location.service";

const CreateLocker = ({
  nameLocker,
  setNameLocker,
  locationId,
  setLocationId,
}) => {
  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllLocation().then((item) => setGetAll(item.data));
  }, []);

  return (
    <div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <select
            class="form-select"
            value={locationId}
            onChange={(item) => setLocationId(item.target.value)}
          >
            <option selected>Selectionner un casier</option>
            {getAll.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Nom du casier"
            value={nameLocker}
            onChange={(item) => setNameLocker(item.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateLocker;
