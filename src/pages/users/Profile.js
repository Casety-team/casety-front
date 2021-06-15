import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import User from "../../services/user.service";

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
    }
    if (formLastname.length === 0) {
      setFormLastname(lastname);
    }
    if (formEmail.length === 0) {
      setFormEmail(email);
    }
    if (formPhone.length === 0) {
      setFormPhone(phone);
    }
    if (formAdress.length === 0) {
      setFormAdress(adress);
    }
    if (formCity.length === 0) {
      setFormCity(city);
    }
    if (formZip_code.length === 0) {
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
    <div className="container mt-5">
      <div className="row gutters-sm " style={{ marginTop: 100 }}>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="mt-3">
                  <h4>
                    {firstname} {lastname}
                  </h4>
                  <p className="text-muted font-size-sm">
                    Status:
                    <span style={{ fontSize: 13 }}>
                      {currentUser.roles &&
                        currentUser.roles.map(
                          (role, index) => " " + role.substr(5) + " / "
                        )}
                    </span>
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete()}
                  >
                    Supprimer mon compte
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: 10 }}
                    onClick={() => window.location.replace("user/reservers")}
                  >
                    Mes Commandes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <button
            className="btn btn-primary mb-2"
            style={{ marginLeft: 0 }}
            onClick={() => setFormUpdate(!formUpdate)}
          >
            Modifier
          </button>
          {formUpdate && (
            <button
              className="btn btn-success mb-2"
              style={{ marginLeft: 10 }}
              onClick={() => {
                handleUpdate();
                setFormUpdate(false);
              }}
            >
              Mettre à jour
            </button>
          )}

          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Prénom / Nom</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {formUpdate ? (
                    <>
                      <input
                        type="text"
                        placeholder="Prénom"
                        onChange={(e) => setFormFirstname(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Nom"
                        onChange={(e) => setFormLastname(e.target.value)}
                        style={{ marginLeft: 10 }}
                      />
                    </>
                  ) : (
                    firstname + " / " + lastname
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {formUpdate ? (
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  ) : (
                    email
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {" "}
                  {formUpdate ? (
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      onChange={(e) => setFormPhone(e.target.value)}
                    />
                  ) : (
                    phone
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Adresse</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {formUpdate ? (
                    <input
                      type="text"
                      placeholder="Adresse"
                      onChange={(e) => setFormAdress(e.target.value)}
                    />
                  ) : (
                    adress
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">city</h6>
                </div>

                <div className="col-sm-9 text-secondary">
                  {formUpdate ? (
                    <input
                      type="text"
                      placeholder="Ville"
                      onChange={(e) => setFormCity(e.target.value)}
                    />
                  ) : (
                    city
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Code postale</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {formUpdate ? (
                    <input
                      type="number"
                      placeholder="Code postale"
                      onChange={(e) => setFormZipCode(e.target.value)}
                    />
                  ) : (
                    zip_code
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
