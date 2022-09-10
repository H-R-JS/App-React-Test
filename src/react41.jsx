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

function useFetch(url) {
  const [state, setState] = useState({
    items: [],
    loading: true,
  });

  useEffect(function () {
    (async function () {
      console.log("yes");
      const response = await fetch(url);

      const responseData = await response.json();
      if (response.ok) {
        setState({
          items: responseData,
          loading: false,
        });
      } else {
        alert(JSON.stringify(responseData));
        setState((s) => ({ ...s, loading: false }));
      }
    })();
  }, []);
  return [state.loading, state.items];
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
      <PostTable />
    </div>
  );
}

/*function PostTable() {
  const [loading, items] = useFetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=10"
  );

  if (loading) {
    return "Chargement...";
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Contenu</th>
        </tr>
      </thead>
      <tbody>
        {items.map((items) => (
          <tr key={items.id}>
            <td>{items.name}</td>
            <td>{items.email}</td>
            <td>{items.body}</td>
          </tr>
        ))}
        ;
      </tbody>
    </table>
  );
}*/

/*function TodoList() {
  const [loading, todos] = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (loading) {
    return "Chargement...";
  }

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}*/

render(
  <div>
    <App />
  </div>,
  document.querySelector(".app")
);
