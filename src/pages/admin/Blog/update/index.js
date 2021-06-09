import React, { useState, useEffect } from "react";

import {
  getAllArticle,
  getSingleArticle,
  update_new_article,
} from "../../../../services/blog.service";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [getAll, setGetAll] = useState([]);

  const [getIdArticle, setGetIdArticle] = useState(0);

  useEffect(() => {
    getAllArticle().then((item) => setGetAll(item.data));
  }, []);

  useEffect(() => {
    getSingleArticle(getIdArticle).then((item) => {
      setTitle(item.data.title);
      setDescription(item.data.description);
      setText(item.data.text);
      setPicture_url(item.data.picture_url);
      setCategorieId(item.data.categorieId);
    });
  }, [getIdArticle]);

  const handleUpdateForm = () => {
    update_new_article(
      getIdArticle,
      title,
      description,
      text,
      picture_url,
      categorieId
    ).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="mt-3 container">
      <select
        className="form-select"
        value={getIdArticle}
        onChange={(item) => setGetIdArticle(item.target.value)}
      >
        <option value="default" selected>
          Selectionner un article
        </option>
        {getAll.map((item) => {
          return <option value={item.id}>{item.title}</option>;
        })}
      </select>

      {getIdArticle > 0 && (
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
            onClick={() => handleUpdateForm()}
            className="mt-3 w-50 container btn btn-primary"
          >
            Mettre à jour un article
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateBlog;
