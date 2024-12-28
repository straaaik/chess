import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import { startPosition } from "./CreatePosition";
import GameSettings from "./GameSettings";

export default function Board() {
  const [board, setBoard] = useState(createBoard);
  const [memoryCell, setMemoryCell] = useState();
  const [memoryBoard, setMemoryBoard] = useState();
  const [motion, setMotion] = useState();
  const [loseBlack, setLoseBlack] = useState([]);
  const [loseWhite, setLoseWhite] = useState([]);

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
              figure: { img: null, color: null, name: null },
            });
          } else {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "black",
              figure: { img: null, color: null, name: null },
            });
          }
        } else {
          if (i % 2) {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "black",
              figure: { img: null, color: null, name: null },
            });
          } else {
            newLine.push({
              id: { id: char + (j + 1), char: char, num: j + 1 },
              color: "white",
              figure: { img: null, color: null, name: null },
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
  const dragOverHandler = (e, cell) => {
    e.preventDefault();

    if (cell.figure.name == null) {
      e.target.style.background = "rgba(101, 235, 68, 0.858)";
    } else if (memoryCell.figure.color !== cell.figure.color) {
      e.target.parentElement.style.background = "rgba(101, 235, 68, 0.858)";
    } else if (memoryCell.figure.color === cell.figure.color) {
      e.target.parentElement.style.background = "rgba(235, 68, 101, 0.858)";
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.background = "";
    e.target.parentElement.style.background = "";
  };

  const dropHandler = (e, cell) => {
    console.log(1);
    e.preventDefault();
    if (memoryCell.figure.color == cell.figure.color) {
      console.log("Нельзя побить свою фигуру");
      setMotion(memoryCell.figure.color);
    } else {
      console.log(2);
      const newBoard = memoryBoard.map((inLine) =>
        inLine.map((inCell) => {
          if (inCell.id.id === cell.id.id) {
            return { ...inCell, figure: memoryCell.figure };
          } else {
            return inCell;
          }
        })
      );
      setMotion((color) => (color === "white" ? "black" : "white"));
      setBoard(newBoard);

      if (cell.figure.color == "black") {
        const c = cell.figure.name + cell.figure.color;
        console.log(c);
        setLoseBlack([...loseBlack, cell]);
      } else if (cell.figure.color == "white") {
        const c = cell.figure.name + cell.figure.color;
        setLoseWhite([...loseWhite, cell]);
        console.log(c);
      }
    }
    e.target.style.background = "";
    e.target.parentElement.style.background = "";
  };

  function canMotion(figure) {
    if (motion == figure.color) {
      return true;
    } else {
      return false;
    }
  }

  function startGame() {
    setBoard(startPosition);
    setMotion("white");
    setLoseBlack([]);
    setLoseWhite([]);
  }

  const text = () => {
    if (motion == "white") {
      return "Ходят белые";
    } else if (motion == "black") {
      return "Ходят черные";
    } else {
      return motion;
    }
  };
  return (
    <div className="main">
      <GameSettings start={startGame} />
      <div className="body-chess">
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
                  className={"cell " + cell.color}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragOverHandler(e, cell)}
                  onDrop={(e) => dropHandler(e, cell)}
                >
                  <img
                    onDragStart={(e) => dragStartHandler(e, cell)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e, cell)}
                    draggable={canMotion(cell.figure)}
                    className={cell.figure.name == null ? "" : "figure"}
                    src={cell.figure.img}
                    alt=""
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="lose-board">
        <div>
          {loseWhite.map((cell) => (
            <img
              key={Math.random()}
              src={cell.figure.img}
              alt=""
              draggable={false}
            />
          ))}
        </div>
        <h1
          className="helps"
          style={motion && { border: "2px solid rgb(83, 75, 82)" }}
        >
          {text()}
        </h1>
        <div>
          {loseBlack.map((cell) => (
            <img
              key={Math.random()}
              src={cell.figure.img}
              alt=""
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
