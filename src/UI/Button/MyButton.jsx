import React from "react";
import cl from "./MyButton.module.css";

export default function MyButton({ children, onClick }) {
  return (
    <button className={cl.MyButton} onClick={onClick}>
      {children}
    </button>
  );
}
