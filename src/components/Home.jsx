import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Offer from "./Offer";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <div>
          <About />
        </div>
        <div>
          <Offer />
        </div>
        <div>
          <Contact />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
