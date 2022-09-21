import { render } from "react-dom";
import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";

const FormContext = createContext({});

function FormWithContext({ defaultValue, onSubmit, children }) {
  const [data, setData] = useState(defaultValue);
  const change = useCallback(function (name, value) {
    setData((d) => Object.assign({}, d, { [name]: value }));
  });
  const value = useMemo(
    function () {
      return Object.assign({}, data, { change: change });
    },
    [data, change]
  ); /// on reprend tous ce que l'on veut transmettre au provider pour l'utiliser

  const handleSubmit = useCallback(
    function (e) {
      e.preventDefault();
      onSubmit(value);
    },
    [onSubmit, value]
  );

  return (
    <FormContext.Provider value={value}>
      <form onSubmit={handleSubmit}>{children}</form>;{JSON.stringify(value)}
    </FormContext.Provider>
  );
}

function Formfield({ name, children }) {
  const data = useContext(FormContext);
  const handleChange = useCallback(
    function (e) {
      data.change(e.target.name, e.target.value);
    },
    [data.change]
  );
  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
        name={name}
        id={name}
        className="form-control"
        value={data[name] || ""}
        onChange={handleChange}
      />
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
      <FormWithContext
        defaultValue={{ name: "Doe", firstname: "John" }}
        onSubmit={handleSubmit}
      >
        <Formfield name="name">Nom</Formfield>
        <Formfield name="firstname">Prénom</Formfield>
        <PrimaryButton>Envoyer</PrimaryButton>
      </FormWithContext>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
