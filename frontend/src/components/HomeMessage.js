import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contact")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container my-5">
      <h3 className="text-success mb-4">📬 Latest Messages</h3>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="list-group">
          {messages.map((msg) => (
            <div key={msg._id} className="list-group-item shadow-sm mb-2">
              <h5>{msg.name} <small className="text-muted">({msg.email})</small></h5>
              <p className="mb-1">📞 {msg.phone}</p>
              <p>{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
