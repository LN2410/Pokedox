import React from "react";

const Logo = () => {
  const appName = "Lihle's Pokedox";
  return (
    <header>
      <h1>Welcome to {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="This is the logo"
      ></img>
    </header>
  );
};

export default Logo;
