import React from "react";
import "./styles/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Email:{" "}
        <a href="mailto:kacperwrona.dev@gmail.com">kacperwrona.dev@gmail.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/aimexa-kacper-wrona/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aimexa-Kacper Wrona
        </a>
      </p>
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/kacperwrona_aimexa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kacper Wrona - Aimexa
        </a>
      </p>
    </div>
  );
}
