import { render } from "react-dom";
import React, { useEffect, useState } from "react";
import "./react4CSS.css";

function Compteur() {
  const [count, setCount] = useState(0); /// Count détient le nombre de base, alors setCount est la fonction qui va permettre de changer de nombre ( à repérer sur la console je croix "1: f()")

  const handleClick = function (e) {
    e.preventDefault();
    setCount(10); /// Le contenu de la fonction
  };
  return <button onClick={handleClick}>Nombre : {count}</button>;
}

function Compteur1() {
  const [state, setState] = useState({ a: 1 }); /// Count détient le nombre de base, alors setCount est la fonction qui va permettre de changer de nombre ( à repérer sur la console je croix "1: f()")

  const handleClick = function (e) {
    e.preventDefault();
    setState((setState) => {
      return { ...state, count: 10 }; /// on peut fusioner les objets en plus d'en rajouter un nouveau
    }); /// Le contenu de la fonction
  };
  return (
    <button onClick={handleClick}>Nombre : {JSON.stringify(state)}</button>
  );
}

function Compteur2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10); /// Count détient le nombre de base, alors setCount est la fonction qui va permettre de changer de nombre ( à repérer sur la console je croix "1: f()")

  const handleClick = function (e) {
    e.preventDefault();
    setCount((c) => c + 1);
  };

  const handleClick2 = function (e) {
    e.preventDefault();
    setCount2((c) => c + 12);
  };
  return (
    <>
      <button onClick={handleClick}>Nombre : {count}</button>
      <button onClick={handleClick2}>Nombre : {count2}</button>
    </>
  ); /// les <> permettent de retourner les deux bouttons
}

//USEINCREMENT//

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount((c) => c + step);
  };
  return [count, increment];
}

function Compteur3() {
  const [count, increment] = useIncrement(0, 2);
  return (
    <>
      <button onClick={increment}>Incrémenter : {count}</button>
    </>
  );
}

function CompteurEf1() {
  const [count, increment] = useIncrement(0, 2);

  useEffect(() => {
    const timer = window.setInterval(() => {
      console.log("Toujours debout...");
      increment();
    }, 1000);
    return function () {
      clearInterval(timer);
    }; /// sert à enlever le timer si celui-ci à l'élément qui disparait
  }, []);

  useEffect(() => {
    document.title = "Compteur " + count;
  }, [count]);

  return (
    <>
      <button onClick={increment}>Incrémenter : {count}</button>
    </>
  );
}

render(
  <div>
    <CompteurEf1 />
  </div>,
  document.querySelector(".app")
);
