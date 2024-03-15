import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { GameDetailsPage } from "./pages/GameDetails";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer" 


function App() {
  return (
    <>
    
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gameDetails/:id" element={<GameDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
