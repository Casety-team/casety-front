import React, { useState, useEffect } from "react";
import { isEmail } from "validator";

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

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);

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
          setSuccessful(true);
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
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Inscrivez-vous</h1>
            <p class="col-lg-10 fs-4">
              Déposez vos bagages dans les commerces / hotels et profitez de
              votre journée !
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            {!successful && (
              <form class="p-4 p-md-5 border rounded-3 bg-light">
                {message && (
                  <div>
                    <div
                      style={{ marginTop: -25 }}
                      className={
                        successful
                          ? "text-success mb-3 text-center"
                          : "text-danger text-center mb-3"
                      }
                    >
                      <b>{message}</b>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div class="col-sm-6 mb-3">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Prénom"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      validations={[required, vFirstname]}
                    />
                  </div>
                  <div class="col-sm-6 mb-3">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Nom"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      validations={[required, vLastname]}
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    validations={[required, vEmail]}
                  />
                </div>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    validations={[required, vpassword]}
                  />
                </div>
                <div class="mb-3">
                  <input
                    class="form-control mb-3"
                    type="text"
                    placeholder="Adresse"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    validations={[required, vAdress]}
                  />
                </div>
                <div className="row">
                  <div class="col-sm-6 mb-3">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Ville"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      validations={[required, vCity]}
                    />
                  </div>
                  <div class="col-sm-6 mb-3">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Code postale"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      validations={[required, vZip]}
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    class="form-control mb-3"
                    type="tel"
                    pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                    placeholder="Telephone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    validations={[required, vPhone]}
                  />
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input
                      name="newsletters"
                      type="checkbox"
                      checked={newsletters}
                      onChange={(e) => setNewsletters(!newsletters)}
                    />{" "}
                    Inscription à la newsletter
                  </label>
                  <label>
                    <input
                      name="terms"
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => setTerms(!terms)}
                    />{" "}
                    <a href="/terms" target="_blank">
                      {" "}
                      Conditions genéral d'utilisation
                    </a>
                  </label>
                </div>
                <button
                  class="w-100 btn btn-lg btn-primary"
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  disabled={!terms}
                >
                  Inscription
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
