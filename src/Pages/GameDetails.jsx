import { EditButton } from "../components/EditButton";
import "./GameDetails.css";
import { useEffect, useState } from "react";
import axios from 'axios'

export const GameDetailsPage = () => {

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


  return(
     <h1 className="game-details-page">GameDetailsPage
          <EditButton />
          <div>

          <ul>

          {cards.map((card) => {
            return (
                 <div className="game-card">
                 <img src={card.screenshots[0]} />
                 <h3>{card.gameName}</h3>
                 <h4>{card.devName}</h4>
                 <p>{card.description}</p>
                 <p>{card.price}€</p>
              </div>
            )
          })}

          </ul>

          </div>
     
     </h1>
  
     )
  return (
    <div className="game-details-page">
      GameDetailsPage
      <EditButton />
    </div>
  );
};
