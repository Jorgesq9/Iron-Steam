import { EditGameForm } from "../components/EditGameForm";
import "./GameDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PacmanLoader from "react-spinners/PacmanLoader";

export const GameDetailsPage = ({
  toggleModal,
  isModalOpen,
  isLoading,
  setIsLoading,
  isError,
}) => {
  const { id } = useParams();

  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:5001/games/${id}`);
        setGameDetails(response.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
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
      {isLoading ? (
        <PacmanLoader
          className="loading"
          color="#e0e0e0"
          loading={setIsLoading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : isError ? (
        <div className="error-message">
          <h2>There was an error fetching the data from the backend...</h2>
          <p>Pretty wack amirite?</p>
        </div>
      ) : (
        gameDetails && (
          <div className="game-card">
            <div className="entire-card">
              <div className="card-title">
                <h1 className="texth1">{gameDetails.gameName}</h1>
                <div className="imageDetails">
                <img src={gameDetails.screenshots} alt="Game Screenshot" />
              </div>
              </div>

              <div className="card-body">
                <h3 className="text">Developer by : {gameDetails.devName}</h3>
                <p className="text">{gameDetails.description}</p>
                <p className="text">Price: {gameDetails.price}€</p>
                <div className="buttons">
                  <button className="delete" onClick={handleDelete}>Delete</button>
                  {gameDetails.linkToGame && (
                    <button className="demo"><a className="link" href={gameDetails.linkToGame} target="_blank">
                      Play the Demo
                    </a></button>
                )}
                  <button className="button edit-button" onClick={toggleModal}>
                    <h4>Edit game</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}

      <EditGameForm toggleModal={toggleModal} isModalOpen={isModalOpen} />
    </div>
  );
};
