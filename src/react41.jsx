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
  const [count, increment] = useIncrement(initial, step);

  useEffect(() => {
    const timer = window.setInterval(() => {
      increment();
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
      {
        compteurVisible && (
          <Compteur />
        ) /*Si compteurVisible ="true" et que le <Compteur/> s'affiche*/
      }
      <TodoList />
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    (async function () {
      console.log("yes");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      const responseData = await response.json();
      if (response.ok) {
        setTodos(responseData);
      } else {
        alert(JSON.stringify(responseData));
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return "Chargement...";
  }

  return (
    <ul>
      {todos.map((t) => (
        <li>{t.title}</li>
      ))}
    </ul>
  );
}

render(
  <div>
    <App />
  </div>,
  document.querySelector(".app")
);
