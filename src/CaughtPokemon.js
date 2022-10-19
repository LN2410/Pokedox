import React from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState(0);
  function catchPokemon() {
    setCaught((el) => {
      return el + 1;
    });
  }

  return (
    <div>
      <p>
        Caught {catchPokemon} Pokemon on {props.date}
      </p>
    </div>
  );
};

export default CaughtPokemon;
