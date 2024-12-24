import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import { startPosition } from "./CreatePosition";

export default function Board() {
  const [board, setBoard] = useState(createBoard);
  const [memoryCell, setMemoryCell] = useState();
  const [memoryBoard, setMemoryBoard] = useState();

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
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "white",
              figure: null,
            });
          } else {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "black",
              figure: null,
            });
          }
        } else {
          if (i % 2) {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "black",
              figure: null,
            });
          } else {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
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

  const dragStartHandler = (e, cell) => {
    const newBoard = board.map((inLine) =>
      inLine.map((inCell) => {
        if (inCell.id.id === cell.id.id) {
          return { ...inCell, figure: null };
        } else {
          return inCell;
        }
      })
    );
    e.target.parentElement.style.background = "rgba(255, 0, 0, 0.207)";
    setMemoryBoard(newBoard);
    setMemoryCell(cell);
  };
  const dragEndHandler = (e) => {
    console.log("1");
    e.target.style.background = "";
    e.target.parentElement.style.background = "";
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className == "figure")
      e.target.parentElement.style.background = "rgba(255, 0, 0, 0.207)";
    else e.target.style.background = "rgba(255, 0, 0, 0.207)";
  };

  const dragLeaveHandler = (e) => {
    e.target.style.background = "";
    e.target.parentElement.style.background = "";
  };

  const dropHandler = (e, cell) => {
    e.preventDefault();
    const newBoard = memoryBoard.map((inLine) =>
      inLine.map((inCell) => {
        if (inCell.id.id === cell.id.id) {
          return { ...inCell, figure: memoryCell.figure };
        } else {
          return inCell;
        }
      })
    );
    console.log(2);
    e.target.style.background = "";
    e.target.parentElement.style.background = "";
    setBoard(newBoard);
  };

  return (
    <div className="body">
      <MyButton onClick={() => setBoard(startPosition(board))}>
        Начать новую партию
      </MyButton>
      <div className="board">
        {board.map((line) =>
          line.map((cell) => (
            <div
              key={cell.id.id}
              className={cell.color}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, cell)}
            >
              <div className="id">
                <div className="id-str">
                  {cell.id.num == 1 ? cell.id.char.toLocaleUpperCase() : ""}
                </div>
                <div className="id-num">
                  {cell.id.char == "a" ? cell.id.num : ""}
                </div>
              </div>

              <img
                onDragStart={(e) => dragStartHandler(e, cell)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, cell)}
                draggable={true}
                className={cell.figure == null ? "" : "figure"}
                src={cell.figure}
                alt=""
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
