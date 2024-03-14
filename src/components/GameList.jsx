import { useEffect, useState } from "react";
import { GameCard } from "./GameCard";
import axios from "axios";

export const GameList = () => {
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
    <div className="games-grid">
      {cards.map((card) => {
        return <GameCard key={card.id} card={card} />;
      })}
    </div>
  );
};
