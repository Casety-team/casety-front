import React, { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

import AuthService from "../../services/auth.service";
import User from "../../services/user.service";
import { UserCircleIcon } from "@heroicons/react/solid";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [formUpdate, setFormUpdate] = useState(false);

  const [formFirstname, setFormFirstname] = useState("");
  const [formLastname, setFormLastname] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formAdress, setFormAdress] = useState("");
  const [formZip_code, setFormZipCode] = useState("");
  const [formPhone, setFormPhone] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  User.getUser(currentUser.id).then((item) => {
    const { firstname, lastname, email, city, adress, zip, phone } = item.data;
    setFirstname(firstname);
    setLastname(lastname);
    setEmail(email);
    setZipCode(zip);
    setCity(city);
    setAdress(adress);
    setPhone(phone);
  });

  const handleDelete = () => {
    User.deleteUser(currentUser.id);
    AuthService.logout();
    window.location.replace("/");
  };

  const handleUpdate = () => {
    if (formFirstname.length === 0) {
      setFormFirstname(firstname);
    } else if (formLastname.length === 0) {
      setFormLastname(lastname);
    } else if (formEmail.length === 0) {
      setFormEmail(email);
    } else if (formPhone.length === 0) {
      setFormPhone(phone);
    } else if (formAdress.length === 0) {
      setFormAdress(adress);
    } else if (formCity.length === 0) {
      setFormCity(city);
    } else if (formZip_code.length === 0) {
      setFormZipCode(zip_code);
    }

    User.userUpdate(
      currentUser.id,
      formFirstname,
      formLastname,
      formEmail,
      formPhone,
      formAdress,
      formCity,
      formZip_code
    );
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <UserCircleIcon
            className={`mx-auto h-12 w-auto text-blue-500 group-hover:text-blue-400`}
            aria-hidden="true"
          />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Bonjour <span className="text-blue-500">{firstname}</span> !
          </h2>
          <h2 className="text-xs text-center mt-3 text-blue-500 tracking-widest font-medium title-font mb-1">
            Vous êtes un{" "}
            {currentUser.roles.map((role, index) => {
              return role.substr(5).toLowerCase() === "admin" ? (
                <span className="text-red-500">administrateur</span>
              ) : (
                <span className="text-red-500">utilisateur</span>
              );
            })}
          </h2>

          <div className="mt-4 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <button
                onClick={() => window.location.replace("/reservers")}
                type="submit"
                className={
                  "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                }
              >
                Mes réservations
              </button>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <button
                onClick={() => setOpen(true)}
                type="submit"
                className={
                  "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                }
              >
                Supprimer mon compte
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
                              Supprimer mon compte
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Êtes-vous sûr de vouloir désactiver votre compte
                                ? Toutes vos données seront définitivement
                                supprimées. Cette action ne peut être annulée.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => handleDelete()}
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

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Prénom
                    </label>
                    {!formUpdate ? (
                      firstname
                    ) : (
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFormFirstname(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    {!formUpdate ? (
                      lastname
                    ) : (
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFormLastname(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse e-mail
                    </label>
                    {!formUpdate ? (
                      email.substring(0, 18) + "..."
                    ) : (
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFormEmail(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Téléphone
                    </label>
                    {!formUpdate ? (
                      phone
                    ) : (
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFormPhone(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="street_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse de la rue
                    </label>
                    {!formUpdate ? (
                      adress
                    ) : (
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFormAdress(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Ville
                    </label>
                    {!formUpdate ? (
                      city
                    ) : (
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFormCity(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="postal_code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Code postal
                    </label>
                    {!formUpdate ? (
                      zip_code
                    ) : (
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFormZipCode(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                {formUpdate ? (
                  <div className=" grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <button
                        onClick={() => {
                          handleUpdate();
                          setFormUpdate(false);
                        }}
                        type="submit"
                        className={
                          "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        }
                      >
                        Sauvegarder
                      </button>
                    </div>
                    <div className="col-span-6 sm:col-span-3 ">
                      <button
                        onClick={() => setFormUpdate(false)}
                        type="submit"
                        className={
                          "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        }
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="col-span-6 mt-3">
                    <button
                      onClick={() => setFormUpdate(true)}
                      type="submit"
                      className={
                        "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      }
                    >
                      Modifier mon profil
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
