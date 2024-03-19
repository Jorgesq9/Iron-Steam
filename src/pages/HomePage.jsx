import { AddGameForm } from "../components/AddGameForm";
import { GameList } from "../components/GameList";
import { useEffect, useState } from "react";
import { Searchbar } from "../components/Searchbar";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

export const HomePage = ({
  toggleModal,
  isModalOpen,
  setIsLoading,
  isLoading,
}) => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await axios.get("http://localhost:5001/games");
        setCards(response.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.gameName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">
      <Searchbar search={search} setSearch={setSearch} />

      <AddGameForm toggleModal={toggleModal} isModalOpen={isModalOpen} />

      <button className="button modal-button" onClick={toggleModal}>
        <h1>Add Game</h1>
      </button>
      {isLoading ? (
        <PacmanLoader
          className="loading"
          color="#e0e0e0"
          loading={setIsLoading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <GameList
          cards={filteredCards}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};
