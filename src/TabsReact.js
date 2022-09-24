import { render } from "react-dom";
import React from "react";
import { Tabs, Tab } from "./TabsExport";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <div className="alert alert-danger">Il y a une un problème !</div>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Tabs>
          <Tab title="Premier onglet">
            C'est le premier onglet d'une grande série ou pas.
          </Tab>
          <Tab title="Second onglet">
            Le deuxième est tout aussi trépidente que la première, mais en moins
            bien, lel
          </Tab>
        </Tabs>
      </ErrorBoundary>
    </div>
  );
}

render(<App />, document.querySelector(".app"));
