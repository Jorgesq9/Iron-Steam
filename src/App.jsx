import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gameDetails" element={<GameDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
