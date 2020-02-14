import React, { useState } from "react";

const ContactForm = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const errors = [];

    if (name.length < 2) {
      errors.push({
        field: "name",
        message: "Pole imię musi zawierać co najmniej 2 znaki"
      });
    }

    // check if email contains at least 3 chars (but we don't consider "@" char in characters length)
    if (email.replace("@", "").length < 3 || !email.includes("@")) {
      errors.push({
        field: "email",
        message: "Pole email musi zawierać znak @ i co najmniej 3 znaki"
      });
    }

    if (!content.length) {
      errors.push({
        field: "content",
        message: "Pole wiadomość musi zostać uzupełnione"
      });
    }

    if (errors.length) {
      setValidationErrors(errors);
    } else {
      setValidationErrors(null);

      // TODO: SEND FORM
    }
  };

  const [validationErrors, setValidationErrors] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>Formularz</h1>

      {validationErrors && (
        <ValidationError errors={validationErrors}></ValidationError>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <label>
          Imię:
          <input
            class="form-control"
            type="text"
            name="name"
            onChange={event => setName(event.target.value)}
            value={name}
          />
        </label>

        <label>
          Email:
          <input
            class="form-control"
            type="email"
            name="email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </label>

        <label>
          Treść wiadomości:
          <textarea
            class="form-control"
            name="content"
            onChange={event => setContent(event.target.value)}
            value={content}
          ></textarea>
        </label>

        <button class="btn btn-primary" type="submit">
          Wyślij
        </button>
      </form>
    </div>
  );
};

const ValidationError = ({ errors }) => (
  <div>
    {errors.map(error => (
      <div style={{ color: "#ff0000" }}>{error.message}</div>
    ))}
  </div>
);

export default ContactForm;
