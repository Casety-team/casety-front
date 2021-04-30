import React from "react";

const UpdateLockerType = ({
  nameLockerT,
  length,
  width,
  height,
  priceLocker,
}) => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-sm-6">Type de casier: {nameLockerT}</div>
        <div className="col-sm-6">Longueur : {length}</div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">Largeur: {width}</div>
        <div className="col-sm-6">Hauteur: {height}</div>
      </div>
      <div className="col-sm-12 mt-3">Prix: {priceLocker}</div>
    </div>
  );
};

export default UpdateLockerType;
