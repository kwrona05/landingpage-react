import React from "react";
import "./styles/About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2>O mnie</h2>
        <p>
          Jestem właścicielem firmy Aimexa oraz specjalistą ds. planowania
          finansowego w <a href="https://www.pru.pl">PRU</a>. Łączę
          doświadczenie w doradztwie finansowym z pasją do nowoczesnych
          technologii, wspierając zarówno firmy, jak i klientów indywidualnych w
          osiąganiu ich celów. Od ponad 2 lat tworzę strony internetowe oraz
          dedykowane rozwiązania programistyczne, które usprawniają działanie
          organizacji i instytucji. Zrealizowałem m.in. projekt strony hufca{" "}
          <a href="https://www.zhpjg.pl">ZHP</a>
          oraz aplikację desktopową do zarządzania zastępstwami nauczycieli dla
          Szkoły Podstawowej nr 5 w Jeleniej Górze, zwiększając efektywność
          pracy kadry i ułatwiając komunikację w placówce. Moje doświadczenie w
          prowadzeniu firmy, doradztwie finansowym i realizacji projektów IT
          pozwala mi oferować klientom kompleksowe wsparcie, łączące wiedzę
          biznesową z praktycznymi rozwiązaniami technologicznymi
        </p>
      </div>
    </div>
  );
}
