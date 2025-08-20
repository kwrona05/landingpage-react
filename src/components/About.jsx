import React from "react";
import "./styles/About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2>O mnie</h2>
        <p>
          Jestem właścicielem firmy Aimexa oraz Konsultantem ds. planowania
          finansowego w <a href="https://www.pru.pl">PRU</a>. Od 2 lat zajmuję
          się tworzeniem stron internetowych oraz oprogramowania dla firm, szkół
          oraz klientów prywatnych. Stworzyłem między innymi stronę{" "}
          <a href="#">zhp.jga</a> oraz aplikację desktopową do układania
          zastępst za nieobecnych nauczycieli dla szkoły podstawowej nr 5 w
          Jeleniej Górze.
        </p>
      </div>
    </div>
  );
}
