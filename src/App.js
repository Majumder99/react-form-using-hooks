import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleFirstNameInputChange = (e) => {
    setValues({
      ...values,
      firstName: e.target.value,
    });
  };
  const [valid, setValid] = useState(false);
  const handleLastNameInputChange = (e) => {
    setValues({
      ...values,
      lastName: e.target.value,
    });
  };
  const handleEmailInputChange = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you fro registering
          </div>
        ) : null}
        <input
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
