import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vFirstname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role="alert">
        The Firstname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vLastname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role="alert">
        The Lastname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Signup = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

    const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(firstname, lastname, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
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
    <Form onSubmit={handleRegister} ref={form}>
      {!successful && (
        <div>
          <div>
            <label htmlFor="Firstname">Firstname</label>
            <Input
              type="text"
              name="Firstname"
              value={firstname}
              onChange={onChangeFirstname}
              validations={[required, vFirstname]}
            />
          </div>

          <div>
            <label htmlFor="Lastname">Lastname</label>
            <Input
              type="text"
              name="Lastname"
              value={lastname}
              onChange={onChangeLastname}
              validations={[required, vLastname]}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required, validEmail]}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required, vpassword]}
            />
          </div>

          <div>
            <button>Sign Up</button>
          </div>
        </div>
      )}

      {message && (
        <div>
          <div
            className={ successful ? "success" : "danger" }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
      <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>
  );
};

export default Signup;
