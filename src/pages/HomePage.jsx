import { Navbar } from "../components/Navbar";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <h1>Home Page</h1>
      <div>Random Game Spotlight/Carousel?</div>
      <div className="games-grid">
        <h3>Game #1</h3>
        <h3>Game #2</h3>
        <h3>Game #3</h3>
        <h3>Game #4</h3>
        <h3>Game #5</h3>
        <h3>Game #6</h3>
        <h3>Game #7</h3>
        <h3>Game #8</h3>
        <h3>Game #9</h3>
        <h3>Game #10</h3>
      </div>
    </div>
  );
};
