import { useToggle } from "./hooks";
import { renderHook, act } from "@testing-library/react-hooks";

it("toggleHook", function () {
  const { result } = renderHook(() => useToggle(false)); // renderHook retourne le résultat du hook
  expect(result.current[0]).toBeFalsy(); // result contenant le résultat, on lui demande si la valeur courante est bien égale à false
  act(() => result.current[1]()); // on active le toggle pour le changer en true
  expect(result.current[0]).toBeTruthy();
  act(() => result.current[1]()); // on active le toggle pour le changer en false
  expect(result.current[0]).toBeFalsy();
});
