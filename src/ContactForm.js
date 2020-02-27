import React, { useState } from "react";

const ContactForm = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const errors = [];

    if (name.length < 2) {
      errors.push({
        field: "name",
        message: "This field should contain at least 2 characters"
      });
    }

    // check if email contains at least 3 chars (but we don't consider "@" char in characters length)
    if (email.replace("@", "").length < 3 || !email.includes("@")) {
      errors.push({
        field: "email",
        message:
          "This field should contain @ character and at least 3 characters"
      });
    }

    if (!content.length) {
      errors.push({
        field: "content",
        message: "This field cannot be empty"
      });
    }

    if (errors.length) {
      setIsFormSent(false);
      setValidationErrors(errors);
    } else {
      setIsFormSent(true);
      setValidationErrors(null);
      setName("");
      setEmail("");
      setContent("");
    }
  };

  const [validationErrors, setValidationErrors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isFormSent, setIsFormSent] = useState(false);

  return (
    <div>
      <h1>Contact Form</h1>

      {isFormSent && (
        <div
          style={{
            backgroundColor: "#a5fcc5",
            border: "1px solid #59b566",
            borderRadius: 5
          }}
        >
          Thank you! The form has been sent.
        </div>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <div>
          <label>
            <div>Name:</div>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <ValidationError errors={validationErrors} fieldName="name" />
          </label>
        </div>

        <div>
          <label>
            <div>Email:</div>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
          </label>
          <ValidationError errors={validationErrors} fieldName="email" />
        </div>
        <div>
          <label>
            <div>Message content:</div>
            <textarea
              className="form-control"
              name="content"
              onChange={event => setContent(event.target.value)}
              value={content}
            ></textarea>
          </label>
          <ValidationError errors={validationErrors} fieldName="content" />
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

const ValidationError = ({ errors, fieldName }) => {
  const error = errors.find(error => error.field === fieldName);

  return error ? <div style={{ color: "#ff0000" }}>{error.message}</div> : null;
};

export default ContactForm;
