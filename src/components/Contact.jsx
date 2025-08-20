import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./styles/Contact.scss";

export default function Contact() {
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
    } catch (err) {
      setStatus("Wystąpił błąd. Spróbuj ponownie później.");
      console.error(err);
    }
  };

  return (
    <div className="landing-form">
      <h1>
        Zapisz się do newslettera i dowiedz się jak zadbać o swoje finanse
      </h1>
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
        <button type="submit">Zapisz się do newslettera</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
