import { render } from "react-dom";
import React, { useState, useMemo, useCallback, useContext } from "react";

const FormContextContext = createContext({});

function FormContext({ defaultValue, onSubmit, children }) {
  const [data, setData] = useState(defaultValue);

  return (
    <FormContextContext.Provider value={value}>
      <form onSubmit={onSubmit}>{children}</form>;
    </FormContextContext.Provider>
  );
}

function Formfield({ name, children }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="text" name={name} id={name} className="form-control" />
    </div>
  );
}

function PrimaryButton({ children }) {
  return <button className="btn btn-primary">{children}</button>;
}

function App() {
  const handleSubmit = useCallback(function (value) {
    console.log(value);
  }, []);

  return (
    <div className="container">
      <FormContext
        defaultValue={{ name: "Doe", firstname: "John" }}
        onSubmit={handleSubmit}
      >
        <Formfield name="name">Nom</Formfield>
        <Formfield name="firstname">Prénom</Formfield>
        <PrimaryButton>Envoyer</PrimaryButton>
      </FormContext>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
