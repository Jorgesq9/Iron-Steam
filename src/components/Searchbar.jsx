import "./Searchbar.css";

export const Searchbar = ({ search, setSearch }) => {
  const changeHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <button className="button">Search</button>
      <input onChange={changeHandler} value={search}></input>
    </div>
  );
};
