import React, { useState, useEffect, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

import {
  getAllArticle,
  getSingleArticle,
  delete_new_article,
} from "../../../../services/blog.service";

const DeleteBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [categorieId, setCategorieId] = useState("");
  const [getAll, setGetAll] = useState([]);
  const [message, setMessage] = useState("");
  const [getIdArticle, setGetIdArticle] = useState(0);

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    getAllArticle(categorieId).then((item) => setGetAll(item.data));
  }, [categorieId]);

  useEffect(() => {
    getSingleArticle(getIdArticle).then((item) => {
      setTitle(item.data.title);
      setDescription(item.data.description);
      setText(item.data.text);
      setCategorieId(item.data.categorieId);
    });
  }, [getIdArticle]);

  const handleDeleteArticle = () => {
    delete_new_article(getIdArticle).then(() => {
      setMessage("Article à bien était Supprimé !");
    });
  };

  return (
    <>
      <div className="col-span-6">
        {message && (
          <p className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white text-green-600">
            {message}
          </p>
        )}
        <label
          htmlFor="select-article"
          className="block text-sm font-medium text-gray-700"
        >
          Selectionner un article
        </label>
        <select
          id="select-article"
          name="select-article"
          autoComplete="select-article"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={getIdArticle}
          onChange={(item) => setGetIdArticle(item.target.value)}
        >
          {getAll.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>

      {getIdArticle > 0 && (
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <button
                onClick={() => setOpen(true)}
                type="submit"
                className={
                  "mb-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                }
              >
                Supprimer l'article
              </button>
              <div className="col-span-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  <b>Titre:</b>
                </label>
                {title}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  <b>Description:</b>
                </label>
                {description}
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  <b>Article:</b>
                </label>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </div>
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
                          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationIcon
                              className="h-6 w-6 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-lg leading-6 font-medium text-gray-900"
                            >
                              Supprimer un Article
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Êtes-vous sûr de vouloir supprimer cette article
                                ? Cette action ne peut être annulée.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => handleDeleteArticle()}
                        >
                          Supprimer
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
      )}
    </>
  );
};

export default DeleteBlog;
