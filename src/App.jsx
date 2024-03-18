import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { GameDetailsPage } from "./pages/GameDetails";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage toggleModal={toggleModal} isModalOpen={isModalOpen} />
          }
        />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="gameDetails/:id"
          element={
            <GameDetailsPage
              toggleModal={toggleModal}
              isModalOpen={isModalOpen}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
