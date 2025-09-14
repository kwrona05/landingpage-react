import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Software from "./components/Software";
import Seo from "./components/Seo";
import Gadgets from "./components/Gadgets";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/gadgets" element={<Gadgets />} />
      </Routes>
    </Router>
  );
}
