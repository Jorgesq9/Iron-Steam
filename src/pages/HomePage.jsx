import { AddGameForm } from "../components/AddGameForm";
import { GameList } from "../components/GameList";
import { useEffect, useState } from "react";
import { Searchbar } from "../components/Searchbar";
import axios from "axios";

export const HomePage = ({ toggleModal, isModalOpen }) => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

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

      <GameList
        cards={filteredCards}
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};
