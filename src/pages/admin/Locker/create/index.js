import React, { useState, useEffect } from "react";
import CreateLocker from "./Locker";
import CreateLockerType from "./LockerTypes";

import {
  add_new_lockerType,
  add_new_locker,
} from "../../../../services/locker.service";

const Locker = () => {
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

  const handleAddForm = () => {
    add_new_lockerType(nameLockerT, length, width, height, priceLocker).then(
      async (item) => {
        console.log("success locker_type");
        setLockerTypeId(item.data.id);
        await add_new_locker(
          nameLocker,
          priceLocker,
          locationId,
          lockerTypeId
        ).then(() => {
          console.log("success Locker");
        });
      }
    );
  };
  return (
    <div className="mt-3 container">
      <div className="w-90 container">
        <CreateLockerType
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
        <CreateLocker
          nameLocker={nameLocker}
          setNameLocker={setNameLocker}
          locationId={locationId}
          setLocationId={setLocationId}
          handleAddForm={handleAddForm}
        />
        <button
          type="button"
          onClick={() => handleAddForm()}
          className="mt-3 container btn btn-success"
        >
          Créer un nouveau type de lockers
        </button>
      </div>
    </div>
  );
};

export default Locker;
