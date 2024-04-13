import React, { useState } from "react";

const Search = ({ search, setinput }) => {
  const changeHandler = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className="search">
      <input type="text" onChange={changeHandler} className="input" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
