import { EditButton } from "../components/EditButton";
import "./GameDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const GameDetailsPage = () => {
  const { id } = useParams();

  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/games/${id}`);
        setGameDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

  return (
    <h1 className="game-details-page">
      GameDetailsPage
      <EditButton />
      <div>
        <ul>
          {gameDetails && (
            <div className="game-card">
              {!gameDetails.screenshots ? (
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLQaAF5IVPMoaT-ftbnmXpKWNmmaXUtcHBw&usqp=CAU" />
              ) : (
                <img src={gameDetails.screenshots[0]} />
              )}
              <h3>{gameDetails.gameName}</h3>
              <h4>{gameDetails.devName}</h4>
              <p>{gameDetails.description}</p>
              <p>{gameDetails.price}€</p>
            </div>
          )}
        </ul>
      </div>
    </h1>
  );
};
