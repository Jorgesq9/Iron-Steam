import { useEffect, useState } from "react";
import "./EditGameForm.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
export const EditGameForm = ({ isModalOpen, toggleModal }) => {
  const { id } = useParams();

  const [inputValue, setInputValue] = useState({
    gameName: "",
    devName: "",
    description: "",
    price: "",
    category: "",
    linkToGame: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_URL}/games/${id}`);

        setInputValue({
          gameName: response.data.gameName || "",
          devName: response.data.devName || "",
          description: response.data.description || "",
          price: response.data.price || "",
          category: response.data.category || "",
          linkToGame: response.data.linkToGame || "",
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

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
      const newGameResponse = await axios.patch(
        `${API_URL}/games/${id}`,
        {
          ...inputValue,
        }
      );
      toggleModal();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="add-form">
          <h1>{inputValue.id}</h1>
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
          <button onClick={toggleModal} className="button test-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};