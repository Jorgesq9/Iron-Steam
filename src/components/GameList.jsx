import { GameCard } from "./GameCard";

import "./GameList.css";
import { Link } from "react-router-dom";

export const GameList = ({ cards }) => {
  return (
    <div className="games-grid">
      {cards.length === 0 ? (
        <h1>No game with this name :(</h1>
      ) : (
        cards.map((card) => {
          return (
            <Link key={card.id} to={`gameDetails/${card.id}`}>
              <GameCard card={card} />
            </Link>
          );
        })
      )}
    </div>
  );
};
