import React from "react";
import Axios from '../../Hooks/Axios.jsx';

function I_PokeCard({ name, image, weight, height, types, onClose}) {
  return (
    <div className="m-15 p-10 border w-450 h-fit">
      <button onClick={onClose} className="float-right text-2xl">
        ✕
      </button>
      
      <img
        className="justify-self-center rounded-xl w-fit h-fit"
        src={image}
        alt={name}
      />
      <p className="text-6xl justify-self-center">
        Hi there! I'm {" "}
        <span className="text-emerald-500">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </span>
      </p>
      <br /><br/>

      <div className="flex gap-40 justify-self-center bg-emerald-400 text-white p-10 rounded-xl">
        <div>
          <strong className="text-4xl">Type: </strong>
          <br />
          <span className="text-3xl">{types}</span>
        </div>
        <div>
          <strong className="text-4xl">Height:</strong> <br />
          <span className="text-3xl">{height}m</span>
        </div>
        <div>
          <strong className="text-4xl">Weight:</strong> <br />
          <span className="text-3xl">{weight}kg</span>
        </div>
      </div>
    </div>
  );
}

export default I_PokeCard;
