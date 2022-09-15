import { render } from "react-dom";
import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  useLayoutEffect,
  useReducer,
} from "react";

function init(initialValue) {
  return { count: initialValue };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload || 1) };
    case "decrement":
      if (state.count <= 0) {
        return state;
      }
      return { count: state.count - 1 };
    case "reset":
      return init(0);
    default:
      throw new Error("L'action " + action.type + " est inconnue");
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0, init);

  return (
    <div>
      Compteur : {JSON.stringify(count)}
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrémenter
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Incrémenter + 10
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrémenter
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
