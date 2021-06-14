import React, { useState, useEffect } from "react";
import { getAllLocker } from "../../../../services/locker.service";

const TableauLocker = () => {
  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllLocker().then((item) => setGetAll(item.data));
  }, []);

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom du casier</th>
          <th scope="col">prix</th>
        </tr>
      </thead>
      <tbody>
        {getAll.map((item, i) => (
        
          <tr key={i}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.price.length > 3 ? item.price.toString().substring(2, 0) : item.price.toString().substring(1, 0)} $</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableauLocker;
