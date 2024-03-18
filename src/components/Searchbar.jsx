import { useState } from "react";
import "./Searchbar.css";

export const Searchbar = () => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <button className="button">Search</button>
      <input onChange={changeHandler}></input>
    </div>
  );
};
