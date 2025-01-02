import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Board from "./chess/Board";

function App() {
  return (
    <>
      <Header />
      <Board />
    </>
  );
}

export default App;
