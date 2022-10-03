import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export function Modal({ onClose, children, title }) {
  const handleKeyDown = useCallback(function (e) {
    if (e.key === "Escape") {
      onClose();
    }
  });

  useEffect(
    function () {
      document.addEventListener("keydown", handleKeyDown); // une foix monté l'event apparait
      return function () {
        document.removeEventListener("keydown", handleKeyDown); // une fois démonté l'event est remove
      };
    },
    [handleKeyDown]
  );

  return createPortal(
    <>
      <div
        className="modal fade show"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                aria-label="Fermer"
                onClick={onClose}
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>,
    document.body
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
