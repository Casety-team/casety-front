import React, { useState, useRef } from "react";
import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return <div role="alert">This field is required!</div>;
  }
};

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    AuthService.login(email, password).then(
      () => {
        props.history.push("/user/profile/");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">
              Vertically centered hero sign-up form
            </h1>
            <p class="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light">
              <div class="mb-3">
                <input
                  class="form-control"
                  id="floatingInput"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  validations={[required]}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  validations={[required]}
                />
              </div>
              <button
                class="w-100 btn btn-lg btn-primary"
                onClick={(e) => handleLogin(e)}
                type="submit"
              >
                Connexion
              </button>
              <hr class="my-4" />
              <small class="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
