import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  //   for (let i = 0; i < abilities.length; i++) {
  //     abilities[i];
  //   }
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
