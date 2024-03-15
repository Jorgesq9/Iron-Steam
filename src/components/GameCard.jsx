import "./GameCard.css";
export const GameCard = ({ card }) => {
  return (
    <div className="game-card">
      <img src={card.screenshots[0]} />
      <h3>{card.gameName}</h3>
      <h4>{card.devName}</h4>
      <p>{card.description}</p>
      <p>{card.price}€</p>
   </div>
  );
};
