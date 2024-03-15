import { useState } from "react";
import "./AddGameForm.css";
import axios from "axios";

export const AddGameForm = ({ isModalOpen, toggleModal }) => {
  const [inputValue, setInputValue] = useState({
    gameName: "",
    devName: "",
    description: "",
    price: "",
    category: "",
    linkToGame: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5001/games");
      const games = response.data;
      const highestId = games.reduce((max, game) => Math.max(max, game.id), 0);

      const newGameResponse = await axios.post("http://localhost:5001/games", {
        ...inputValue,
        id: highestId + 1,
      });

      console.log(newGameResponse.data);

      setInputValue({
        gameName: "",
        devName: "",
        description: "",
        price: "",
        category: "",
        linkToGame: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="add-form">
          <h1>AFS</h1>
          <form onSubmit={submitFormHandler}>
            <input
              type="text"
              name="gameName"
              placeholder="Name of game"
              value={inputValue.gameName}
              onChange={inputHandler}
            ></input>

            <input
              type="text"
              name="devName"
              placeholder="Name of developer"
              value={inputValue.devName}
              onChange={inputHandler}
            ></input>

            <input
              type="text"
              name="description"
              placeholder="Game description"
              value={inputValue.description}
              onChange={inputHandler}
            ></input>

            <input
              type="text"
              name="price"
              placeholder="Price in Euro"
              value={inputValue.price}
              onChange={inputHandler}
            ></input>

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={inputValue.category}
              onChange={inputHandler}
            ></input>

            <input
              type="text"
              name="linkToGame"
              placeholder="Link to game"
              value={inputValue.linkToGame}
              onChange={inputHandler}
            ></input>

            <button type="submit" className="button">
              Submit
            </button>
          </form>
          <button onClick={toggleModal} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
