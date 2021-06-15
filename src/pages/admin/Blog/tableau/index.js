import React, { useState, useEffect } from "react";
import {
  getAllArticle,
  //delete_new_location,
} from "../../../../services/blog.service";

const TableauBlog = () => {
  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllArticle().then((item) => setGetAll(item.data));
  }, []);

  // const handleDeleteLocation = (id) => {
  //   delete_new_location(id).then((item) => console.log(item));
  // };

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom de l'article</th>
          <th scope="col">Description</th>
          <th scope="col">Article</th>
          {/* <th scope="col">Supprimer un lieu</th> */}
        </tr>
      </thead>
      <tbody>
        {console.log(getAll)}
        {getAll.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.description.substring(0, 50)}...</td>
            <td>
              <span
                dangerouslySetInnerHTML={{ __html: item.text.substring(0, 50) }}
              />
              ...
            </td>
            {/* <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteLocation(item.id)}
              >
                Supprimer
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableauBlog;
