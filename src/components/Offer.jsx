import React from "react";
import "./styles/Offer.scss";
import { useNavigate } from "react-router-dom";

export default function Offer() {
  const navigate = useNavigate();

  return (
    <div className="offer">
      <h2>Oferta</h2>
      <div className="offer-grid">
        <div onClick={() => navigate("/gadgets")}>
          <img src="/printing.png" alt="Konsultacje i doradztwo" />
          <p>Technologia NFC i gadżety na eventy</p>
        </div>
        <div onClick={() => navigate("/software")}>
          <img src="/websites.png" alt="Oprogramowanie" />
          <p>Oprogramowanie dostosowane do Twoich potrzeb</p>
        </div>
        <div onClick={() => navigate("/seo")}>
          <img src="/SEO.png" alt="SEO" />
          <p>Optymalizacja SEO dla Twojej strony</p>
        </div>
      </div>
    </div>
  );
}
