import React, { useState, useEffect } from "react";

import {
  add_new_article,
  getAllCategorie,
} from "../../../../services/blog.service";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [getAll, setGetAll] = useState([]);

  useEffect(() => {
    getAllCategorie().then((item) => setGetAll(item.data));
  }, []);

  const handleAddForm = () => {
    add_new_article(title, description, text, picture_url, categorieId).then(
      () => {
        console.log("success");
      }
    );
  };

  return (
    <div className="mt-3 container">
      <div className="w-90 container mt-5">
        <div className="row mt-3">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Titre"
              value={title}
              onChange={(item) => setTitle(item.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(item) => setDescription(item.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Contenu de l'article"
              value={text}
              onChange={(item) => setText(item.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Lien de l'image (call Mathieu)"
              value={picture_url}
              onChange={(item) => setPicture_url(item.target.value)}
            />
          </div>
        </div>

        <div className="col-sm-12 mt-3">
          <select
            className="form-select"
            value={categorieId}
            onChange={(item) => setCategorieId(item.target.value)}
          >
            <option value="default" selected>
              Selectionner une catégorie
            </option>
            {getAll.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
        <button
          type="button"
          onClick={() => handleAddForm()}
          className="mt-3 w-50 container btn btn-success"
        >
          Créer un nouvelle article
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
