import { Modal } from "./react.jsx";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { screen } from "@testing-library/dom";

describe("React test", function () {
  it("scénario d'exemple", function () {
    render(
      <Modal title="Bonjour les gens" onClose={() => null}>
        Bonjour
      </Modal>
    );
    const title = screen.getByText("Bonjour les gens");
    expect(title).toBeInTheDocument();
  });

  it("close on X click", function () {
    const mockClose = jest.fn();
    render(
      <Modal title="Bonjour les gens" onClose={mockClose}>
        Bonjour
      </Modal>
    );
    const close = document.body.querySelector("[aria-label='Fermer']");
    fireEvent.click(close);
    expect(mockClose.mock.calls.length).toBe(1);
  });

  it("close on escape key", function () {
    const mockClose = jest.fn();
    render(
      <Modal title="Bonjour les gens" onClose={mockClose}>
        Bonjour
      </Modal>
    );
    const close = document.body.querySelector("[aria-label='Fermer']");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(mockClose.mock.calls.length).toBe(1);
  });

  it("does nothing on keydown not being Escape", function () {
    const mockClose = jest.fn();
    render(
      <Modal title="Bonjour les gens" onClose={mockClose}>
        Bonjour
      </Modal>
    );
    const close = document.body.querySelector("[aria-label='Fermer']");
    fireEvent.keyDown(document, { key: "Enter" });
    expect(mockClose.mock.calls.length).toBe(0);
  });
});
