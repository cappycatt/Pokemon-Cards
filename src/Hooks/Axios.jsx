import React from "react";
import axios from "axios";
import PokeCard from "../assets/components/PokeCard";
import Search from "../assets/components/Search.jsx";
import Pagination from "../assets/components/Pagination.jsx";
import PokeCardSkeleton from "../assets/components/pokeCardSkeleton.jsx";
import useDebounce from "./debounce.jsx";

function ApiCall() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postPerPage] = React.useState(12);
  const [filterLoading, setFilterLoading] = React.useState(false);
  const debounceValue = useDebounce(search.replaceAll(" ", ""));

  let filteredData = debounceValue
    ? data.filter((poke) =>
        poke.name.toLowerCase().includes(debounceValue.toLowerCase()),
      )
    : data;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(filteredData.length / postPerPage);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=500";

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);

      const detailedPokemon = await Promise.all(
        res.data.results.map(async (poke) => {
          const detail = await axios.get(poke.url);
          return {
            name: poke.name,
            url: poke.url,
            image:
              detail.data.sprites.other?.["official-artwork"]?.front_default,
            weight: (detail.data.weight / 10).toFixed(1),
            height: (detail.data.height / 10).toFixed(1),
            types: detail.data.types.map((t) => t.type.name).join(", "),
          };
        }),
      );

      setData(detailedPokemon);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    setCurrentPage(1);

    if (debounceValue) {
      setFilterLoading(true);
      const timer = setTimeout(() => {
        setFilterLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setFilterLoading(false);
      setLoading(false);
    }
  }, [debounceValue]);

  let skeleton = Array.from({ length: 12 }).map((_, i) => (
    <PokeCardSkeleton key={i} />
  ));

  return (
    <>
      {error && <p className="text-red">{error}</p>}
      <Search setSearch={setSearch} search={search} />
      {loading || filterLoading ? (
        <div className="flex flex-wrap gap-4">{skeleton}</div>
      ) : (
        <>
          <div className="flex flex-wrap gap-6 m-20">
            {currentPosts.map((pokemon, index) => (
              <PokeCard
                key={index}
                name={pokemon.name}
                image={pokemon.image}
                weight={pokemon.weight}
                height={pokemon.height}
                types={pokemon.types}
              />
            ))}
          </div>

          <Pagination
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}
export default ApiCall;
