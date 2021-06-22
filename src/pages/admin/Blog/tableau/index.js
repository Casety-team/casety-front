import React, { useState, useEffect } from "react";
import {
  getAllArticle,
  //delete_new_location,
} from "../../../../services/blog.service";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TableauBlog = () => {
  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllArticle().then((item) => {
      setGetAll(item.data);
    });
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      flex={1}
      style={{ height: 600, width: "auto" }}
    >
      <AgGridReact rowData={getAll}>
        <AgGridColumn field="id" flex={1}></AgGridColumn>
        <AgGridColumn field="title" flex={2}></AgGridColumn>
        <AgGridColumn field="description" flex={2}></AgGridColumn>
        <AgGridColumn field="categorieId" flex={2}></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
export default TableauBlog;
