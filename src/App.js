import React from "react";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";

function App() {
  const appName = "Lihle's Pokedox";
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("Button has been clicked!");
  };

  return (
    <div>
      <Logo appName={appName} logWhenClicked={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
