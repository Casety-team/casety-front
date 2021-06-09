import React, { useState, useEffect } from "react";
import {
  getAllLocation,
  delete_new_location,
} from "../../../../services/location.service";

const TableauLocation = () => {
  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllLocation().then((item) => setGetAll(item.data));
  }, []);

  const handleDeleteLocation = (id) => {
    delete_new_location(id).then((item) => console.log(item));
  };
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom du lieu</th>
          <th scope="col">Adresse Principale</th>
          <th scope="col">Ville/Code postale</th>
          <th scope="col">Heure d'ouverture</th>
          <th scope="col">Heure de fermeture</th>
          <th scope="col">Supprimer un lieu</th>
        </tr>
      </thead>
      <tbody>
        {getAll.map((item, i) => (
          <tr key={i}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.first_adress}</td>
            <td>
              {item.city} {item.zip_code}
            </td>
            <td>{item.opening_hours}H</td>
            <td>{item.closing_hours}H</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteLocation(item.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableauLocation;
