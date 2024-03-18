import { EditButton } from "../components/EditButton";
import "./GameDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

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

  const handleDelete = async (gameId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the game?")

      if(confirmDelete) {
      await axios.delete (`http://localhost:5001/games/${id}`)
      setGameDetails(null)
      toast.success("Game Deleted")
      window.location.reload()
      }
    } catch(err) {
      console.log(err)
    }
  }


  return(
     <div className="game-details-page">GameDetailsPage
          <EditButton />
          <div>

          <ul>
           {gameDetails && (
           <div className="game-card">
          <img src={gameDetails.screenshots} alt="Game Screenshot" />
          <h1>{gameDetails.gameName}</h1>
          <h3>{gameDetails.devName}</h3>
          <p>{gameDetails.description}</p>
          <p>{gameDetails.price}€</p>
          {gameDetails.linkToGame && (
            <p> 
              <a href={gameDetails.linkToGame} target="_blank" >
                Play the Demo
              </a>
            </p>
          )}

          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

          </ul>

          </div>
     
     </div>
  
     )
  
};
