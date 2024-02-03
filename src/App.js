import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const Change = (val) => {
    const { name, value } = val.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (val) => {
    val.preventDefault();

    console.log("submitted:", formData);
    onClose();
  };

  return (
    <div className={`model ${isOpen ? "open" : ""}`}>
      <div className="models">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <h1>Information</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="first name"
              value={formData.firstname}
              onChange={Change}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="last name"
              value={formData.lastname}
              onChange={Change}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={Change}
            />
          </div>

          <div className="form-group">
            <label>About yourself</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={Change}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={Change}
            />
          </div>

          <button type="submit">Registration</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
