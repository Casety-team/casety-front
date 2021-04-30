import React, { useState, useEffect } from "react";
import DeleteLockers from "./Locker";
import DeleteLockerType from "./LockerTypes";

import {
  delete_LockerTypes,
  delete_Locker,
  getAllLocker,
  getLockerTypes,
  getLocker,
} from "../../../../services/locker.service";

const DeleteLocker = () => {
  //Locker Type
  const [nameLockerT, setNameLockerT] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [priceLocker, setPriceLocker] = useState("");

  //Locker
  const [nameLocker, setNameLocker] = useState("");
  const [locationId, setLocationId] = useState("");
  const [lockerTypeId, setLockerTypeId] = useState("");

  const [getAll, setGetAll] = useState([]);
  const [getIdLocker, setGetIdLocker] = useState(0);

  useEffect(() => {
    getAllLocker().then((item) => setGetAll(item.data));
  }, []);

  useEffect(() => {
    getLockerTypes(getIdLocker).then((item) => {
      setNameLockerT(item.data.name);
      setLength(item.data.length);
      setWidth(item.data.width);
      setHeight(item.data.height);
      setPriceLocker(item.data.price);
    });
  }, [getIdLocker]);

  useEffect(() => {
    getLocker(getIdLocker).then((item) => {
      setNameLocker(item.data.name);
      setLocationId(item.data.locationId);
      setLockerTypeId(item.data.locker_type_id);
    });
  }, [getIdLocker]);

  const handleDeleteForm = () => {
    delete_LockerTypes(lockerTypeId).then(async () => {
      console.log("success Delete LockerType");
      await delete_Locker(getIdLocker).then(() => {
        console.log("success Delete Locker");
      });
    });
  };

  return (
    <div className="mt-3 container">
      <select
        class="form-select"
        value={getIdLocker}
        onChange={(item) => setGetIdLocker(item.target.value)}
      >
        <option selected>Selectionner un casier</option>
        {getAll.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </select>

      {getIdLocker != 0 && (
        <div className="mt-3 container">
          <div className="w-90 container">
            <DeleteLockerType
              nameLockerT={nameLockerT}
              setNameLockerT={setNameLockerT}
              length={length}
              setLength={setLength}
              width={width}
              setWidth={setWidth}
              height={height}
              setHeight={setHeight}
              priceLocker={priceLocker}
              setPriceLocker={setPriceLocker}
            />
            <DeleteLockers
              nameLocker={nameLocker}
              setNameLocker={setNameLocker}
              locationId={locationId}
              setLocationId={setLocationId}
              handleDeleteForm={handleDeleteForm}
            />
            <button
              type="button"
              onClick={() => handleDeleteForm()}
              className="mt-3 container btn btn-primary"
            >
              Supprimer un casier
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteLocker;
