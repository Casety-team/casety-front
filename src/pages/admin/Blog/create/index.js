import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

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

  const handleEditorChange = (e) => {
    setText(e.target.getContent());
  };

  const handleAddForm = () => {
    add_new_article(title, description, text, picture_url, categorieId).then(
      () => {
        alert("Article à bien était ajouté !");
        setTitle("");
        setText("");
        setPicture_url("");
        setDescription("");
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
          <div className="col-sm">
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
        <div className="mt-3">
          <Editor
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic |  alignleft aligncenter alignright |  bullist numlist outdent indent | help",
            }}
            onChange={handleEditorChange}
          />
        </div>
        <button
          type="button"
          onClick={handleAddForm}
          className="mt-3 w-50 container btn btn-success"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
