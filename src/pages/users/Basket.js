import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import { getAllBaskets } from "../../services/basket.service";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import TotalValueRenderer from "./button.jsx";

const Basket = () => {
  const currentUser = AuthService.getCurrentUser();
  const userId = currentUser.id;

  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllBaskets(userId).then((e) => setGetAll(e.data));
  }, []);

  console.log(getAll);

  return (
    <div
      className="ag-theme-alpine container items-center"
      style={{ marginTop: 120, height: 800, width: 1000, marginLeft: 500 }}
    >
      <AgGridReact
        rowData={getAll}
        frameworkComponents={{
          totalValueRenderer: TotalValueRenderer,
        }}
        defaultColDef={{
          editable: true,
          sortable: true,
          flex: 1,
          minWidth: 100,
          rowHeight: 100,
          filter: true,
          resizable: true,
        }}
      >
        <AgGridColumn field="id" flex={1}></AgGridColumn>
        <AgGridColumn field="code_unlock" flex={1}></AgGridColumn>
        <AgGridColumn field="reserverId" flex={2}></AgGridColumn>
        <AgGridColumn
          field="receipt_url"
          minWidth={15}
          cellRenderer="totalValueRenderer"
        />
      </AgGridReact>
    </div>
  );
};

export default Basket;
