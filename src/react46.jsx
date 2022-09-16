import { render } from "react-dom";
import React from "react";

const theme = {
  dark: {
    background: "#000",
    color: "#FFF",
    border: "solid 1px #FFF",
  },
  light: {
    background: "#FFF",
    color: "#000",
    border: "solid 1px #000",
  },
};

const ThemeContext = React.createContext(theme.dark);

function SearchForm() {
  return (
    <div>
      <input />
      <ThemedButton>Recherche</ThemedButton>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <SearchForm />
      <ThemedButton>M'inscrire</ThemedButton>
    </div>
  );
}

function ThemedButton({ children }) {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        return <button style={value}>{children}</button>;
      }}
    </ThemeContext.Consumer>
  );
  /* OU
  const value = useContext(ThemeContext)
  return <button style={value}>{children}</button>*/
}

function App() {
  return (
    <div>
      <ThemeContext.Provider value={theme.light}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
