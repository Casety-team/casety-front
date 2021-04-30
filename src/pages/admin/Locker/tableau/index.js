import React, { useState, useEffect } from "react";
import {
  getAllLocker,
  delete_locker,
} from "../../../../services/locker.service";

const TableauLocker = () => {
  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllLocker().then((item) => setGetAll(item.data));
  }, []);

  return (
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom du lieu</th>
          <th scope="col">Adresse Principale</th>
          <th scope="col">Ville/Code postale</th>
          <th scope="col">Heure d'ouverture</th>
          <th scope="col">Heure de fermeture</th>
        </tr>
      </thead>
      <tbody>
        {getAll.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.first_adress}</td>
            <td>
              {item.city} {item.zip_code}
            </td>
            <td>{item.opening_hours}H</td>
            <td>{item.closing_hours}H</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableauLocker;
