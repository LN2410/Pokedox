import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState(0);
  function catchPokemon() {
    setCaught(caught + 1);
  }

  return (
    <div>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <p>
        Caught {caught} Pokemon on {props.date}
      </p>
    </div>
  );
};

export default CaughtPokemon;
