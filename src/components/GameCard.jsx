import "./GameCard.css";

export const GameCard = ({ card }) => {
  return (
    <div className="game-card">
      <img src={card.screenshots[0]} />
      <h3>{card.devName}</h3>
    </div>
  );
};
