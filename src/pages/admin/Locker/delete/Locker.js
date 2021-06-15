import React, { useState } from "react";

import { getLocation } from "../../../../services/location.service";

const DeleteLocker = ({ nameLocker, locationId }) => {
  const [getName, setGetName] = useState();

  getLocation(locationId).then((item) => setGetName(item.data.name));

  return (
    <div>
      <div className="row mt-3">
        <div className="col-sm-6">Lieux: {getName}</div>
        <div className="col-sm-6">{nameLocker}</div>
      </div>
    </div>
  );
};

export default DeleteLocker;
