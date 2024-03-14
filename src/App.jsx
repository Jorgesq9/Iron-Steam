import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { GameDetailsPage } from "./pages/GameDetails";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gameDetails" element={<GameDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
=========

import { Routes, Route} from "react-router-dom"
import './App.css'
import About from './Pages/About'

function App() {
  

  return (
    <>
    
    <Routes>


    <Route path='/' element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="gameDetails" element={<GameDetails />} />
    <Route path="*" element={<NotFound />} />

    </Routes>
    
    
    </>
  )
  
>>>>>>>>> Temporary merge branch 2
}

export default App;
