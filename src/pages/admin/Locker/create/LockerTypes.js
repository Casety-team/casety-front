import React from "react";

const CreateLockerType = ({
  nameLockerT,
  setNameLockerT,
  length,
  setLength,
  width,
  setWidth,
  height,
  setHeight,
  priceLocker,
  setPriceLocker,
  handleAddForm,
}) => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Nom du Type du casier"
            value={nameLockerT}
            onChange={(item) => setNameLockerT(item.target.value)}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            placeholder="
              Longueur"
            value={length}
            onChange={(item) => setLength(item.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            placeholder="Largeur"
            value={width}
            onChange={(item) => setWidth(item.target.value)}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            placeholder="Hauteur"
            value={height}
            onChange={(item) => setHeight(item.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-12 mt-3">
        <input
          type="number"
          className="form-control"
          placeholder="Prix du casier"
          value={priceLocker}
          onChange={(item) => setPriceLocker(item.target.value)}
        />
      </div>
    </div>
  );
};

export default CreateLockerType;
