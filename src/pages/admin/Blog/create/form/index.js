import React, { useState, useEffect, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { Editor } from "@tinymce/tinymce-react";

import {
  add_new_article,
  getAllCategorie,
} from "../../../../../services/blog.service";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [getAll, setGetAll] = useState([]);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    getAllCategorie().then((item) => setGetAll(item.data));
  }, []);

  const handleEditorChange = (e) => {
    setText(e.target.getContent());
  };

  const handleAddForm = () => {
    add_new_article(title, description, text, picture_url, categorieId).then(
      () => {
        setMessage(`L'article ${title} à bien était ajouté !`);
        alert("Article à bien était ajouté !");
        setTitle("");
        setText("");
        setPicture_url("");
        setDescription("");
        setCategorieId("");
      }
    );
  };

  return (
    <>
      <div className="flex w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
              alt="Workflow"
            />
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Créer un article
            </h2>
          </div>
          <div className="md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                {message && (
                  <p className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    {message}
                  </p>
                )}
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Titre
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={title}
                        onChange={(item) => setTitle(item.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Descritpion
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={description}
                        onChange={(item) => setDescription(item.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="picture URL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        URL images
                      </label>
                      <input
                        type="text"
                        name="picture URL"
                        id="picture URL"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={picture_url}
                        onChange={(item) => setPicture_url(item.target.value)}
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Selectionner une catégorie
                      </label>
                      <select
                        id="location"
                        name="location"
                        autoComplete="location"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={categorieId}
                        onChange={(item) => setCategorieId(item.target.value)}
                      >
                        {getAll.map((item) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col-span-6">
                      <Editor
                        initialValue=""
                        init={{
                          height: 300,
                          menubar: true,
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
                    <div className="col-span-6">
                      <button
                        onClick={() => setOpen(true)}
                        type="submit"
                        className={
                          "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        }
                      >
                        Ajouter un article
                      </button>
                    </div>
                    <Transition.Root show={open} as={Fragment}>
                      <Dialog
                        as="div"
                        static
                        className="fixed z-10 inset-0 overflow-y-auto"
                        initialFocus={cancelButtonRef}
                        open={open}
                        onClose={setOpen}
                      >
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                          </Transition.Child>
                          <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                          >
                            &#8203;
                          </span>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <CheckIcon
                                      className="h-6 w-6 text-green-600"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title
                                      as="h3"
                                      className="text-lg leading-6 font-medium text-gray-900"
                                    >
                                      Ajouter un article
                                    </Dialog.Title>
                                    <div className="mt-2">
                                      <p className="text-sm text-gray-500">
                                        Êtes-vous sûr de vouloir ajouter cet
                                        article ? Toutes les informations seront
                                        directement ajoutée sur le blog.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                  type="button"
                                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                  onClick={() => handleAddForm()}
                                >
                                  Ajouter
                                </button>
                                <button
                                  type="button"
                                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                  onClick={() => setOpen(false)}
                                  ref={cancelButtonRef}
                                >
                                  Retour
                                </button>
                              </div>
                            </div>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
