import React, { useState, useEffect } from "react";

import {
  getAllArticle,
  getSingleCategorie,
  getSingleArticle,
  delete_new_article,
} from "../../../../services/blog.service";

const DeleteBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [getAll, setGetAll] = useState([]);
  const [getCategorie, setGetCategorie] = useState([]);

  const [getIdArticle, setGetIdArticle] = useState(0);

  useEffect(() => {
    getAllArticle(categorieId).then((item) => setGetAll(item.data));
    getSingleCategorie(categorieId).then((item) => setGetCategorie(item.data));
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
    delete_new_article(getIdArticle).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="mt-3 container">
      <select
        class="form-select"
        value={getIdArticle}
        onChange={(item) => setGetIdArticle(item.target.value)}
      >
        <option selected>Selectionner un article</option>
        {getAll.map((item) => {
          return <option value={item.id}>{item.title}</option>;
        })}
      </select>

      {getIdArticle > 0 && (
        <div className="card container mt-5">
          <div className="row mt-3">
            <h1 className="text-center">{title}</h1>
          </div>
          <img
            src={"/assets/pictures" + picture_url}
            alt="loading"
            className="rounded mt-5 mb-5 text-center"
          />
          <div classNamme="mt-5">
            <h6>Description</h6>
            <hr />
            <p>{description}</p>
          </div>
          <div>
            <h6>Article</h6>
            <hr />
            {text}
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">{getCategorie.name}</div>
          </div>

          <div className="col-sm-12 mt-3">{getCategorie.name}</div>
        </div>
      )}
      <button
        type="button"
        onClick={() => handleUpdateForm()}
        className="mt-3 w-50 container btn btn-danger"
      >
        Supprimer un article
      </button>
    </div>
  );
};

export default DeleteBlog;
