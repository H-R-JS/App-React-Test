import { render } from "react-dom";
import React from "react";
import { Tabs, Tab } from "./TabsExport";

function App() {
  return (
    <Tabs>
      <Tab title="Premier onglet">
        C'est le premier onglet d'une grande série ou pas.
      </Tab>
      <Tab title="Second onglet">
        Le deuxième est tout aussi trépidente que la première, mais en moins
        bien, lel
      </Tab>
    </Tabs>
  );
}

render(<App />, document.querySelector(".app"));
