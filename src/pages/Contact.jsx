import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({});

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formValidation = () => {
    let errors = {};

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    }

    if (formData.subject.trim() === "") {
      errors.subject = "Subject is required";
    }

    if (formData.message.trim() === "") {
      errors.message = "Message is required";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!formValidation()) return;

    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={formHandler}>
        <div className="cont">
          <h1>CONTACT ME</h1>
        </div>
        {/* Name */}
        <div className="container">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={inputChangeHandler}
          />
          {error.name && <p>{error.name}</p>}
        </div>


        {/* Email */}
        <div className="container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={inputChangeHandler}
          />
          {error.email && <p>{error.email}</p>}
        </div>


        {/* Subject */}
        <div className="container">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={inputChangeHandler}
          />
          {error.subject && <p>{error.subject}</p>}
        </div>


        {/* Message */}
        <div className="container">

          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={inputChangeHandler}
          />
          {error.message && <p>{error.message}</p>}
        </div>


        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
};

export default Contact;