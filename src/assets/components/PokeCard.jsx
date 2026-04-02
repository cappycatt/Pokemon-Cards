
function PokeCard({ name, image, weight, height, types }) {

  if (!name) return (<div>Something is wrong!</div>);

  return (
    <div
      className=" cursor-pointer transform transition duration-300
                     hover:-translate-y-3 hover:shadow-4xl hover:scale-105bg-gray-100 shadow-xl rounded-xl h-fit w-100 p-4"
    >
      <img className="border rounded-xl" src={image} alt={name} />
      <p className="text-2xl text-emerald-800">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <p>
        <strong>Type: </strong>
        {types}
      </p>
      <p>
        <strong>Height:</strong> {height}m
      </p>
      <p>
        <strong>Weight:</strong> {weight}kg
      </p>
    </div>
  );
}

export default PokeCard;
