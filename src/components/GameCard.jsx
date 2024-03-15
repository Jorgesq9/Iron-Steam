import "./GameCard.css";
export const GameCard = ({ card }) => {
  return (
    <div className="game-card card">
      {!card.screenshots ? (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLQaAF5IVPMoaT-ftbnmXpKWNmmaXUtcHBw&usqp=CAU" />
      ) : (
        <img src={card.screenshots[0]} />
      )}
      <h3>{card.gameName}</h3>
      <p>{card.price}€</p>
    </div>
  );
};
