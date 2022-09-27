import { render } from "react-dom";
import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";
import PropTypes from "prop-types";

function addition(n, a) {
  return n + a;
}
/*
Modal.propTypes = {
    onClose: PropTypes.func.isRequired
    children: PropTypes.node.isRequired 
}
*/
function Double({ n }) {
  return "Le double de " + { n } + " est " + { n };
}

Double.propTypes = {
  n: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      <Double n={1} />
    </div>
  );
}

render(<App />, document.querySelector(".app"));
