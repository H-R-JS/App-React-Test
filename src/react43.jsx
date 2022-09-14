import { render } from "react-dom";
import React, { useEffect, useState, useMemo, useRef } from "react";

function App() {
  const input = useRef(null);
  const compteur = useRef({ count: 0 });

  const handleButtonClick = function () {
    compteur.current.count++;
    console.log(compteur);
  };

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={handleButtonClick}>Récupérer la valeur</button>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
