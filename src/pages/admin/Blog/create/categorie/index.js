import React, { useState, useEffect } from "react";
import UserService from "../../../../../services/user.service";
import { add_new_categorie } from "../../../../../services/blog.service";

const Categorie = (props) => {
  const [categorie, setCategorie] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      () => {
        console.log("Success Admin connect");
      },
      (error) => {
        console.log("Fail connect Admin");
      }
    );
  }, []);

  const handleAddFormCat = () => {
    add_new_categorie(categorie).then(() => {
      setCategorie("");
      setMessage(`La catégorie ${categorie} à bien était créer!`);
      console.log("Create success categorie");
    });
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
              alt="Workflow"
            />
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Création d'une catégorie
            </h2>
          </div>
          <div className="md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                {message && (
                  <p className="group relative ull flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-green-600">
                    {message}
                  </p>
                )}
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="categorie"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Catégorie
                    </label>
                    <input
                      type="text"
                      name="categorie"
                      id="categorie"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={categorie}
                      onChange={(e) => setCategorie(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 `}
                onClick={() => handleAddFormCat()}
              >
                Ajouter une catégorie
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorie;
