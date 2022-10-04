import { useState } from "react";

export function useToggle(initial) {
  const [state, setState] = useState(initial);
  return [
    state,
    function () {
      setState((state) => !state); // pour que le changement de valeur dans les test, marche correctement ( on retourne un callback qui change la valeur de l'état)
    },
  ];
}
