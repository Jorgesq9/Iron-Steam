import { EditModal } from "../components/EditModal";
import { GameList } from "../components/GameList";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <EditModal />

      <div>Random Game Spotlight/Carousel?</div>
      <GameList />
    </div>
  );
};
