import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import { startPosition } from "./CreatePosition";

export default function Board() {
  const [board, setBoard] = useState(createBoard);
  const [memoryCell, setMemoryCell] = useState();
  const [memoryBoard, setMemoryBoard] = useState();
  const [motion, setMotion] = useState("Ходят белые");

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
              figure: { img: null, color: "" },
            });
          } else {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "black",
              figure: { img: null, color: "" },
            });
          }
        } else {
          if (i % 2) {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "black",
              figure: { img: null, color: "" },
            });
          } else {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "white",
              figure: { img: null, color: "" },
            });
          }
        }

        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }
    }
    return newBoard;
  }

  function canMotion() {}

  const dragStartHandler = (e, cell) => {
    const newBoard = board.map((inLine) =>
      inLine.map((inCell) => {
        if (inCell.id.id === cell.id.id) {
          return { ...inCell, figure: { img: null, color: "" } };
        } else {
          return inCell;
        }
      })
    );
    setMemoryBoard(newBoard);
    setMemoryCell(cell);
  };
  const dragEndHandler = (e) => {
    e.target.style.background = "";
    e.target.parentElement.style.background = "";
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    //Белые фигуры
    if (
      memoryCell.figure.color == "white" &&
      e.target.className == "figure-black"
    )
      e.target.parentElement.style.background = "rgba(90, 233, 159, 0.858)";

    if (
      memoryCell.figure.color == "white" &&
      e.target.className == "figure-white"
    )
      e.target.parentElement.style.background = "rgba(233, 90, 119, 0.858)";
    //Черные фигуры
    if (
      memoryCell.figure.color == "black" &&
      e.target.className == "figure-white"
    )
      e.target.parentElement.style.background = "rgba(90, 233, 159, 0.858)";
    if (
      memoryCell.figure.color == "black" &&
      e.target.className == "figure-black"
    )
      e.target.parentElement.style.background = "rgba(233, 90, 119, 0.858)";
    //Остальные случаи
    if (e.target.className == "black" || e.target.className == "white")
      e.target.style.background = "rgba(90, 188, 233, 0.858)";
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
    e.target.style.background = "";
    e.target.parentElement.style.background = "";
    setBoard(newBoard);
  };

  const colorFigure = (color) => {
    if (color == "white") {
      return "figure-white";
    } else if (color == "black") {
      return "figure-black";
    } else {
      return "";
    }
  };

  return (
    <div className="body">
      <div style={{ color: "white" }}>{motion}</div>
      <MyButton onClick={() => setBoard(startPosition(board))}>
        Начать новую партию
      </MyButton>
      <div className="board">
        {board.map((line) =>
          line.map((cell) => (
            <div key={cell.id.id}>
              <div className="id">
                <div className="id-str">
                  {cell.id.num == 1 ? cell.id.char.toLocaleUpperCase() : ""}
                </div>
                <div className="id-num">
                  {cell.id.char == "a" ? cell.id.num : ""}
                </div>
              </div>
              <div
                className={cell.color}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, cell)}
              >
                <img
                  onDragStart={(e) => dragStartHandler(e, cell)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropHandler(e, cell)}
                  draggable={true}
                  className={colorFigure(cell.figure.color)}
                  src={cell.figure.img}
                  alt=""
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
