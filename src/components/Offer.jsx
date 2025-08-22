import React from "react";
import "./styles/Offer.scss";

export default function Offer() {
  return (
    <div className="offer">
      <h2>Oferta</h2>
      <div className="offer-grid">
        <div>
          <img src="/ubezpieczenie.png" alt="Ubezpieczenia" />
          <p>Ubezpieczenia na zycie i dozycie</p>
        </div>
        <div>
          <img src="/money.png" alt="Zabezpieczenie oszczędności" />
          <p>Oszczędności i inwestycje</p>
        </div>
        <div>
          <img src="/printing.png" alt="Konsultacje i doradztwo" />
          <p>Technologia NFC i nagrody na eventy</p>
        </div>
        <div>
          <img src="/websites.png" alt="Oprogramowanie" />
          <p>Oprogramowanie dostosowane do Twoich potrzeb</p>
        </div>
      </div>
    </div>
  );
}
