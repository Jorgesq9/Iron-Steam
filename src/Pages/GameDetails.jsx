import { EditGameForm } from "../components/EditGameForm";
import "./GameDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GameDetailsPage = ({ toggleModal, isModalOpen }) => {
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

  const handleDelete = async (gameId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete the game?"
      );

      if (confirmDelete) {
        await axios.delete(`http://localhost:5001/games/${id}`);
        setGameDetails(null);
        toast.success("Game Deleted");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="game-details-page">
      {gameDetails && (
        <div className="game-card">
          <h1 className="text">{gameDetails.gameName}</h1>
          <img src={gameDetails.screenshots} alt="Game Screenshot" />

          <h3 className="text">{gameDetails.devName}</h3>
          <p className="text">{gameDetails.description}</p>
          <p className="text">{gameDetails.price}€</p>
          {gameDetails.linkToGame && (
            <p className="text">
              <a href={gameDetails.linkToGame} target="_blank">
                Play the Demo
              </a>
            </p>
          )}

          <button onClick={handleDelete}>Delete</button>
          <button className="button" onClick={toggleModal}>
            <h1>Edit game</h1>
          </button>
        </div>
      )}

      <EditGameForm toggleModal={toggleModal} isModalOpen={isModalOpen} />
    </div>
  );
};
