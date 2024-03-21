import { AddGameForm } from "../components/AddGameForm";
import { GameList } from "../components/GameList";
import { useEffect, useState } from "react";
import { Searchbar } from "../components/Searchbar";

import axios from "axios";
import "./HomePage.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
export const HomePage = ({
  toggleModal,
  isModalOpen,
  setIsLoading,
  isLoading,
  isError,
  setIsError,
  userIsLogin,
  setUserIsLogin,
}) => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await axios.get(`${API_URL}/games`);
        setCards(response.data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.gameName.toLowerCase().includes(search.toLowerCase())
  );

  let addButton = null;

  if (userIsLogin) {
    addButton = (
      <button className="button modal-button" onClick={toggleModal}>
        <h1>Add Game</h1>
      </button>
    );
  }

  return (
    <div className="home-page">
      <Searchbar search={search} setSearch={setSearch} />

      {userIsLogin && (
        <AddGameForm
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
          userIsLogin={userIsLogin}
        />
      )}

      {addButton}

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
          <p>Pretty cringe if you ask me...</p>
        </div>
      ) : (
        <GameList
          cards={filteredCards}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
          isError={isError}
          setIsError={setIsError}
        />
      )}
    </div>
  );
};
