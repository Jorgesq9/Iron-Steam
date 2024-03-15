import { useState } from "react";
import "./AddGameForm.css";
import axios from "axios";

export const AddGameForm = ({ cards }) => {
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

  const submitFormHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/games", inputValue)
      .then((response) => {
        console.log(response.data);
        setInputValue({
          gameName: "",
          devName: "",
          description: "",
          price: "",
          category: "",
          linkToGame: "",
        });
      })
      .catch((err) => console.log("Error adding a game!", err));
  };

  return (
    <div className="add-form">
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
    </div>
  );
};
