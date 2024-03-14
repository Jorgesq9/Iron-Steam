import "./GameCard.css";

export const GameCard = ({ card }) => {
  return <div className="game-card">{card.devName}</div>;
};
