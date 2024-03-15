import "./AddGameForm.css";

export const AddGameForm = () => {
  return (
    <div className="add-form">
      <form>
        <input type="text" name="gameName" placeholder="Name of game"></input>

        <input
          type="text"
          name="devName"
          placeholder="Name of developer"
        ></input>

        <input
          type="text"
          name="description"
          placeholder="Game description"
        ></input>

        <input type="text" name="price" placeholder="Price in Euro"></input>

        <input type="text" name="category" placeholder="Category"></input>

        <input type="text" name="linkToGame" placeholder="Link to game"></input>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};
