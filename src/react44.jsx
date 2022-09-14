import { render } from "react-dom";
import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";

function App() {
  const [count, setCount] = useState(0);
  const button = useRef(null);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  useLayoutEffect(() => {
    if (count % 2 === 0) {
      button.current.style.color = "green";
    } else {
      button.current.style.color = "red";
    }
  }, [count]);

  return (
    <div>
      <button onClick={increment} ref={button}>
        Incrementer {count}
      </button>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
