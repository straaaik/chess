import { useState } from "react";
import "./App.css";
import whiteBishop from "./img/reshot-icon-bishop-white-532XHM7EK9.svg";
import whiteKing from "./img/reshot-icon-king-white-T8WZHA92P5.svg";
import whiteKnight from "./img/reshot-icon-knight-white-W84RS9K5LU.svg";
import whitePawn from "./img/reshot-icon-pawn-white-HD9LVBFCG6.svg";
import whiteQueen from "./img/reshot-icon-queen-white-7GAEFYQWPJ.svg";
import whiteRook from "./img/reshot-icon-rook-white-JCDFMLPUW4.svg";

import blackBishop from "./img/reshot-icon-bishop-black-EGMSPJ3VUR.svg";
import blackKing from "./img/reshot-icon-king-black-SWYF8UMR74.svg";
import blackKnight from "./img/reshot-icon-knight-black-BYAKS4LZFM.svg";
import blackPawn from "./img/reshot-icon-pawn-black-9SZ623HL8E.svg";
import blackQueen from "./img/reshot-icon-queen-black-2KBTL8RWFD.svg";
import blackRook from "./img/reshot-icon-rook-black-ZPNUHV37FA.svg";

function App() {
  const [board, setBoard] = useState(createBoard);

  function createBoard() {
    const newBoard = [];
    let newLine = [];
    for (let j = 0; j <= 8; j++) {
      let char = "a";
      if (newLine.length) {
        newBoard.push(newLine);
        newLine = [];
      }
      for (let i = 0; i < 8; i++) {
        if (j % 2) {
          if (i % 2) {
            newLine.push({
              id: { char: char, num: j + 1 },
              color: "white",
              figure: null,
            });
          } else {
            newLine.push({
              id: { char: char, num: j + 1 },
              color: "black",
              figure: null,
            });
          }
        } else {
          if (i % 2) {
            newLine.push({
              id: { char: char, num: j + 1 },
              color: "black",
              figure: null,
            });
          } else {
            newLine.push({
              id: { char: char, num: j + 1 },
              color: "white",
              figure: null,
            });
          }
        }

        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }
    }
    return newBoard;
  }

  return (
    <div className="body">
      <div className="board">
        {board.map((line) =>
          line.map((cell) => (
            <div key={cell.id.char + cell.id.num} className={cell.color}>
              {cell.id.num == 1 ? cell.id.char.toLocaleUpperCase() : ""}
              {cell.id.char == "a" ? cell.id.num : ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
