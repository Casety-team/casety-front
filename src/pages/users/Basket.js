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

  return (
    <div
      className="ag-theme-alpine container items-center"
      style={{ marginTop: 120, height: 600, width: 1000, marginLeft: 250 }}
    >
      <AgGridReact
        rowData={getAll[0]}
        frameworkComponents={{
          totalValueRenderer: TotalValueRenderer,
        }}
        defaultColDef={{
          sortable: true,
          flex: 1,
          minWidth: 100,
          rowHeight: 100,
          filter: true,
        }}
      >
        <AgGridColumn field="id" headerName="Identifiant"></AgGridColumn>
        <AgGridColumn
          field="code_unlock"
          headerName="code déverrouillage"
        ></AgGridColumn>
        <AgGridColumn
          field="reserverId"
          headerName="Numéro de réservation"
        ></AgGridColumn>
        <AgGridColumn
          field="receipt_url"
          headerName="Facture"
          minWidth={15}
          cellRenderer="totalValueRenderer"
        />
      </AgGridReact>
    </div>
  );
};

export default Basket;
