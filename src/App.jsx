<<<<<<< HEAD
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      {/* 1. show main page */}
      {/* Footer */}
    </>
  );
=======

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
  
>>>>>>> routes
}

export default App;
