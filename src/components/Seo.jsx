import React from "react";
import "./styles/Software.scss";

const projects = [
  {
    title: "Administracja strony z wykorzystaniem platformy Joomla",
    description:
      "Sprawuję nadzór techniczny oraz optymalizacyjny nad stroną zhpjg.pl (strona będzie działać do czasu przeniesienia wszystkich artykułów oraz zdjęć na nową stronę - zhpjgag.pl). Dbam o wygląd strony, optymalizację SEO oraz instalowanie nowy wersji oprogramowania i usuwanie ewentualnych błędów integracyjnych po aktualizacji",
    tech: ["Joomla", "PHP", "HTML"],
    link: "https://www.zhpjg.pl",
  },
  {
    title:
      "Administracja strony II Liceum Ogólnokształcącego im. C. K. Norwida",
    description:
      "Przez pierwsze dwa lata liceum byłem odpowiedzialny za administrowanie, integrowanie wtyczek, aktualizację oprogramowania wordpress'owej strony internetowej II LO im. C. K. Norwida",
    tech: ["Wordpress", "Adobe Photoshop"],
    link: null,
  },
];

function Seo() {
  return (
    <section className="portfolio">
      <h2>Porojekty dotyczące optymalizacji SEO</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Zobacz projekt
              </a>
            )}
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

export default Seo;
