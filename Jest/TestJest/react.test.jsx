import { Modal } from "./reactTest.jsx";
import { render } from "@testing-library/react";
import React from "react";

it("scénario d'exemple", function () {
  render(
    <Modal title="Bonjour les gens">
      <div id="demo"></div>
    </Modal>
  );
  const demo = document.querySelector("#demo");
  expect(demo).not.toBeNull();
});
