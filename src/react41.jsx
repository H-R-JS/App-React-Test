import { render } from "react-dom";
import React, { useEffect, useState } from "react";

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount((n) => n + step);
  };
  return [count, increment];
}

function AutoUseIncrement(initial, step) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((c) => c + step);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  });

  return count;
}

function useToggle(initialBool = true) {
  const [value, setValue] = useState(initialBool);
  const toggle = function () {
    setValue((b) => !b);
  };
  return [value, toggle];
}

function Compteur() {
  const count = AutoUseIncrement(0, 2);

  return <button> Incrémenter : {count}</button>;
}

function App() {
  const [compteurVisible, toggleCompteur] = useToggle(true);

  return (
    <div>
      Afficher le Compteur{" "}
      <input
        type="checkbox"
        onChange={toggleCompteur}
        checked={compteurVisible}
      ></input>
      {compteurVisible && <Compteur />}
    </div>
  );
}

render(
  <div>
    <App />
  </div>,
  document.querySelector(".app")
);
