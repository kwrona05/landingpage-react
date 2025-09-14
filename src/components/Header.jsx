import React, { useState } from "react";
import "./styles/Header.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Header() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "subscribers"), { name, email, phone });
      setStatus("Dziękuję za zapisanie do newslettera!");
      setEmail("");
      setName("");
      setPhone("");
      setShowForm(false);
    } catch (err) {
      setStatus("Wystąpił błąd. Spróbuj ponownie później.");
      console.error(err);
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo-section">
          <img src="/logo.png" alt="Logo Aimexa" />
          <h2>Aimexa - Kacper Wrona</h2>
        </div>
        <h1>Technologia wspierająca Twój biznes i finanse</h1>
        <button onClick={() => setShowForm(true)}>
          Umów się na konsultację
        </button>
      </div>

      {/* FORMULARZ JAKO OVERLAY */}
      {showForm && (
        <div className="landing-form-overlay">
          <div className="landing-form">
            <h1>Umów się na konsultację</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój email"
                required
                className="input"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Twoje imię"
                required
                className="input"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Twój numer telefonu"
                required
                className="input"
              />
              <button type="submit">Zapisz się</button>
            </form>
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </>
  );
}
