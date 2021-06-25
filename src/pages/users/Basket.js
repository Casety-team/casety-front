import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import { getBasket, getAllBaskets } from "../../services/basket.service";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Basket = () => {
  const currentUser = AuthService.getCurrentUser();
  const userId = currentUser.id;

  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllBaskets(userId).then((e) =>
      e.data.map((a) =>
        getBasket(a.id).then((r) => {
          const array1 = r.data[0];
          const array2 = r.data[1];
          const array3 = { ...array1, ...array2 };
          setGetAll([array3]);
        })
      )
    );
  }, []);

  return (
    <div
      className="mt-5 ag-theme-alpine"
      flex={1}
      style={{ height: 600, width: "auto" }}
    >
      {console.log(getAll)}
      <AgGridReact rowData={getAll}>
        <AgGridColumn field="userId" flex={1}></AgGridColumn>
        <AgGridColumn field="code_unlock" flex={1}></AgGridColumn>
        <AgGridColumn field="reserverId" flex={2}></AgGridColumn>
        <AgGridColumn field="receipt_url" flex={2}></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Basket;
