import React from "react";
import "./styles/Gadgets.scss";

const gadgets = [
  {
    title: "Odznaki za udział w pikniku strzeleckim",
    description:
      "Zaprojektowałem i stworzyłem odznaki pamiątkowe, dla uczestników pikniku strzeleckiego w Karpnikach",
    image: "/odznaku.jpeg",
  },
  {
    title: "Prototyp interaktywnej wizytówki bez marnowania papieru",
    description:
      "Zainspirowany filmem Iron Man, zaprojektowałem wizytówkę, która nie wymaga papieru, masz ją zawsze przy sobie i zawsze zawiera aktualne dane",
    image: "/wizytowka.png",
  },
];

function Gadgets() {
  return (
    <section className="portfolio-gadgets">
      <h2>Moje Gadżety</h2>
      <div className="gadgets-list">
        {gadgets.map((gadget, index) => (
          <div key={index} className="gadget-item">
            <img src={gadget.image} alt={gadget.title} />
            <div className="gadget-content">
              <h3>{gadget.title}</h3>
              <p>{gadget.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="back-button"
        onClick={() => (window.location.href = "/")}
      >
        ← Powrót na stronę główną
      </button>
    </section>
  );
}
export default Gadgets;
