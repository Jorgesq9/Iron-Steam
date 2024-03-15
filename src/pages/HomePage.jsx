import { GameList } from "../components/GameList";
import { Navbar } from "../components/Navbar";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <h1>Home Page</h1>
      <div>Random Game Spotlight/Carousel?</div>
      <GameList />
    </div>
  );
};
