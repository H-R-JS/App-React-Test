import { render } from "react-dom";
import React, { useEffect, useState, useMemo } from "react";

/*const encoded = useMemo(
    function () {
      return encoded(number);
    },
    [number]
  );*/

const Button = React.memo(function ({ onClick }) {
  console.log("render");
  return <button onClick={onClick}>Button</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useMemo(function () {
    return function () {
      alert("Bonjour");
    };
  }, []);

  /*const handleClick = useCallback(function () {
      alert("Bonjour");
  }, []); */

  return (
    <div>
      <Button onClick={handleClick} />
      <button onClick={() => setCount((c) => c + 1)}>Incrémenter</button>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
