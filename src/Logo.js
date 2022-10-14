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

function ClickLogger() {
  function LogWhenClicked() {
    console.log("Button was clicked!");
  }

  return <img onClick={LogWhenCLicked}></img>;
}

export default Logo;
