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
      setStatus("Do usłyszenia! Skontaktuję się z Tobą w ciągu 24h.");
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
      <h1>Umów się na bezpłatną konsultację i sprawdź ile możesz zyskać!</h1>
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
        <button type="submit">Umów się na bezpłatną konsultację</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
