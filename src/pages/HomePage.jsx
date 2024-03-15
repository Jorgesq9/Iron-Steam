import { AddGameForm } from "../components/AddGameForm";
import { EditModal } from "../components/EditModal";
import { GameList } from "../components/GameList";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

export const HomePage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/games");
        setCards(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="home-page">
      <AddGameForm cards={cards} />
      <EditModal />

      <div>Random Game Spotlight/Carousel?</div>
      <GameList cards={cards} />
    </div>
  );
};
