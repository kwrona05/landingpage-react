import React from "react";
import "./styles/Software.scss";

const projects = [
  {
    title: "Strona blogowa 'Ocalić od zapomnienia'",
    description:
      "Strona zaprojektowana z myślą o intuicyjnej obsłudze, łącząca prostotę użytkowania z nowoczesnym i atrakcyjnym wyglądem",
    tech: ["React", "TypeScript", "Tailwindcss", "Firebase"],
    link: "https://zhpjgag.pl",
  },
  {
    title:
      "Pół zautomatyzowany program do układania planu dyżurów dla nauczycieli",
    description:
      "Program został stworzony na zlecenie szkoły podstawowej nr 5 w Jeleniej Górze. Jego zadaniem było skrócenie czasu tworzenia planu dyżurów. Dzięki mojemu autorskiemu rozwiązaniu proces ten został skrócony, aż o 83%!",
    tech: ["React", "JavaScript", "Node.js", "AWS"],
    link: null,
  },
];

function Software() {
  return (
    <section className="portfolio">
      <h2>Porojekty dotyczące oprogramowania</h2>
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

export default Software;
