import { render } from "react-dom";
import React, { useState, useMemo, useCallback, useContext } from "react";

const THEMES = {
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

const ThemeContext = React.createContext({
  theme: THEMES.dark,
  toggleTheme: () => {},
});

function SearchForm() {
  return (
    <div>
      <input />
      <ThemedButtonClass>Recherche</ThemedButtonClass>
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
  const { theme } = useContext(ThemeContext);
  return <button style={theme}>{children}</button>;
  /* OU
  return(
  <ThemeContext.Consumer>
      {(value) => {
        return <button style={value}>{children}</button>;
      }}
    </ThemeContext.Consumer>);*/
}

class ThemedButtonClass extends React.Component {
  render() {
    const { children } = this.props;
    const { theme } = this.context;
    return <button style={theme}>{children}</button>;
  }
}
ThemedButtonClass.contextType = ThemeContext; /// Créer la propriété "this.context"

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(function () {
    setTheme((t) => (t === "light" ? "dark" : "light")); /// permet de changer entre dark et light
  }, []);

  const value = useMemo(
    function () {
      return {
        theme: theme === "light" ? THEMES.light : THEMES.dark,
        toggleTheme,
      };
    },
    [toggleTheme, theme]
  );

  return (
    <div>
      <ThemeContext.Provider value={value}>
        <Toolbar />
        <ThemeSwitcher />
      </ThemeContext.Provider>
    </div>
  );
}

function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Changer le theme</button>;
}

render(<App />, document.querySelector(".app"));
