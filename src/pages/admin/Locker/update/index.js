import React, { useState, useEffect } from "react";
import UpdateLockers from "./Locker";
import UpdateLockerType from "./LockerTypes";

import {
  update_new_lockerType,
  update_new_locker,
  getAllLocker,
  getLockerTypes,
  getLocker,
} from "../../../../services/locker.service";

const UpdateLocker = () => {
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

  const handleUpdateForm = () => {
    update_new_lockerType(
      lockerTypeId,
      nameLockerT,
      length,
      width,
      height,
      priceLocker
    ).then(async (item) => {
      console.log("success locker_type");
      await update_new_locker(
        getIdLocker,
        nameLocker,
        priceLocker,
        locationId,
        lockerTypeId
      ).then(() => {
        console.log("success Locker");
      });
    });
  };

  return (
    <div className="mt-3 container">
      <select
        className="form-select"
        value={getIdLocker}
        onChange={(item) => setGetIdLocker(item.target.value)}
      >
        <option value="default" selected>
          Selectionner un casier
        </option>
        {getAll.map((item, i) => {
          return (
            <option key={i} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>

      {getIdLocker > 0 && (
        <div className="mt-3 container">
          <div className="w-90 container">
            <UpdateLockerType
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
            <UpdateLockers
              nameLocker={nameLocker}
              setNameLocker={setNameLocker}
              locationId={locationId}
              setLocationId={setLocationId}
              handleUpdateForm={handleUpdateForm}
            />
            <button
              type="button"
              onClick={() => handleUpdateForm()}
              className="mt-3 container btn btn-primary"
            >
              Mettre à jour type de lockers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateLocker;
