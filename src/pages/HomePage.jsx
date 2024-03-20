import { AddGameForm } from "../components/AddGameForm";
import { GameList } from "../components/GameList";
import { useEffect, useState } from "react";
import { Searchbar } from "../components/Searchbar";
import { UserRegister} from "../components/UserRegister"
import { UserLogin} from "../components/UserLogin"
import axios from "axios";
import "./HomePage.css"

export const HomePage = ({ toggleModal, isModalOpen }) => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [userIsLogin, setUserIsLogin] = useState(false)

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

  let addButton = null;

  if(userIsLogin) {
    addButton = ( <button className="button modal-button" onClick={toggleModal}>
    <h1>Add Game</h1>
  </button>
)
  }

  return (
    <div className="home-page">
      <Searchbar search={search} setSearch={setSearch} />

      {userIsLogin && (
      <AddGameForm toggleModal={toggleModal} isModalOpen={isModalOpen} userIsLogin={userIsLogin}  /> 
      )}

      
      {addButton}

      <UserRegister />
      <UserLogin setUserIsLogin={setUserIsLogin} />

      <GameList
        cards={filteredCards}
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};
