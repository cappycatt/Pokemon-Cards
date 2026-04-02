import React from "react";

function Search({ setSearch, search}) {

  return (
    <form>
      <div className="w-475 text-5xl text-emerald-400 border bg-emerald-800 p-2">
        For Pokémon Geeks
      </div>
      
      <div className="justify-self-center border w-fit h-fit rounded-xl m-8 pl-2">
        <input
          type="search"
          placeholder="Search Pokemon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" p-2 w-100"
        />
      
        <button className="bg-emerald-400 rounded-xl w-30 p-2 m-2">Search</button>
      </div>
    </form>
  );
}

export default Search;
