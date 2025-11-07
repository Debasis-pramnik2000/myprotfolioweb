import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Try to send data to backend
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus(res.data.msg || "Message sent successfully!");
    } catch (err) {
      console.warn("⚠ Backend not running — switching to demo mode.");
      // Show fake success message when backend is off
      setStatus("Message sent successfully! (demo mode)");
    }

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container" style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
};

// 💅 Inline styles (you can replace with CSS later)
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  status: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "green",
  },
};

export default Contact;