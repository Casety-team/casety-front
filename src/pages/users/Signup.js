import React, { useState } from "react";
import { isEmail } from "validator";

import { LockClosedIcon } from "@heroicons/react/solid";
import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return <div role="alert">This field is required!</div>;
  }
};

const vEmail = (value) => {
  if (!isEmail(value)) {
    return <div role="alert">This is not a valid email.</div>;
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div role="alert">The password must be between 6 and 40 characters.</div>
    );
  }
};

const vFirstname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role="alert">The Firstname must be between 3 and 20 characters.</div>
    );
  }
};

const vLastname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role="alert">The Lastname must be between 3 and 20 characters.</div>
    );
  }
};

const vAdress = (value) => {
  if (value.length < 5 || value.length > 20) {
    return (
      <div role="alert">The adress must be between 5 and 20 characters.</div>
    );
  }
};

const vCity = (value) => {
  if (value.length < 1 || value.length > 20) {
    return (
      <div role="alert">The city must be between 1 and 20 characters.</div>
    );
  }
};

const vPhone = (value) => {
  if (value.length !== 10) {
    return <div role="alert">The zip must be between 1 and 4 characters.</div>;
  }
};

const vZip = (value) => {
  if (value.length < 1 || value.length > 4) {
    return <div role="alert">The zip must be between 1 and 4 characters.</div>;
  }
};

const Signup = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [zip, setZip] = useState("");
  const [terms, setTerms] = useState(false);
  const [newsletters, setNewsletters] = useState(false);

  //  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    //setSuccessful(false);

    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    if (name === "newsletter") {
      setNewsletters(value);
    } else if (name === "terms") {
      setTerms(value);
    }

    if (terms === true) {
      AuthService.register(
        firstname,
        lastname,
        email,
        password,
        phone,
        city,
        adress,
        zip,
        terms,
        newsletters
      ).then(
        (response) => {
          setMessage(response.data.message);
          //setSuccessful(true);
          window.location.replace("/login");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          //setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Inscrivez-vous chez CASETY
            </h2>
          </div>
          {message && (
            <p className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              {message}
            </p>
          )}
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
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        validations={[required, vFirstname]}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        validations={[required, vLastname]}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Adresse e-mail
                      </label>
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        validations={[required, vEmail]}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        validations={[required, vPhone]}
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mot de passe
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        autoComplete="password"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        validations={[required, vpassword]}
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Adresse de la rue
                      </label>
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        validations={[required, vAdress]}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ville
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        validations={[required, vCity]}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Code postal
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        validations={[required, vZip]}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <div className="flex items-center">
                    <input
                      id="push_nothing"
                      name="push_notifications"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      checked={newsletters}
                      onChange={(e) => setNewsletters(!newsletters)}
                    />
                    <label
                      htmlFor="push_nothing"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Inscription à la newsletter
                    </label>
                  </div>

                  <div className="mb-5 mt-2 flex items-center">
                    <input
                      id="push_terms"
                      name="push_terms"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      checked={terms}
                      onChange={(e) => setTerms(!terms)}
                    />
                    <label
                      htmlFor="push_terms"
                      className="ml-3 block text-sm font-medium text-gray-300 underline"
                    >
                      <a href="/terms" target="_blank">
                        Conditions genéral d'utilisation
                      </a>
                    </label>
                  </div>

                  <button
                    //onClick={(e) => handleLogin(e)}
                    type="submit"
                    className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                      terms
                        ? "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        : "bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    }`}
                    onClick={(e) => handleSubmit(e)}
                    disabled={!terms}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className={`h-5 w-5 ${
                          terms
                            ? "text-blue-500 group-hover:text-blue-400"
                            : "text-gray-500 group-hover:text-gray-400"
                        } `}
                        aria-hidden="true"
                      />
                    </span>
                    S'inscrire
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
