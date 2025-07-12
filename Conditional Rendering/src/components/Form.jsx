import React, { useState } from "react";
import "./Form.css";

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form className="simple-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}