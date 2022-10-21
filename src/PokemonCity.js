import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <br></br>
      <input
        type="text"
        value={city}
        onChange={updateCity}
        placeholder="Enter a City"
      ></input>
      <p>Welcome to the City of {city}</p>
    </div>
  );
}

export default PokemonCity;
