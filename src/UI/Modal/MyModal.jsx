import React from "react";
import "./MyModal.css";

export default function MyModal({ active, setActive, children }) {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal__content active" : "modal__content"}>
        {children}
      </div>
    </div>
  );
}
