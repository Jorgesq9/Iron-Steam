import { GameList } from "../components/GameList";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      
      <h1>Home Page</h1>
      <div>Random Game Spotlight/Carousel?</div>
      <GameList />
    </div>
  );
};
