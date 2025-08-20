import React from "react";
import "./styles/Offer.scss";

export default function Offer() {
  return (
    <div className="offer">
      <h2>Oferta</h2>
      <div className="offer-grid">
        <div>
          <img src="/images/insurance.png" alt="Ubezpieczenia" />
          <p>Ubezpieczenia</p>
        </div>
        <div>
          <img src="/images/consulting.png" alt="Konsultacje i doradztwo" />
          <p>Konsultacje i doradztwo</p>
        </div>
        <div>
          <img src="/images/savings.png" alt="Zabezpieczenie oszczędności" />
          <p>Zabezpieczenie Twoich oszczędności</p>
        </div>
        <div>
          <img src="/images/software.png" alt="Oprogramowanie" />
          <p>Oprogramowanie dostosowane do Twoich potrzeb</p>
        </div>
      </div>
    </div>
  );
}
