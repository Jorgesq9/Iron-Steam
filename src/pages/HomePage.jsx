import { EditModal } from "../components/EditModal";
import { GameList } from "../components/GameList";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <EditModal />
      
      <h1>Home Page</h1>
      <div>Random Game Spotlight/Carousel?</div>
      <GameList />
    </div>
  );
};
