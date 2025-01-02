import React, { useEffect, useState } from "react";
import { startPosition } from "./CreatePosition";
import GameSettings from "../GameSettings";
import { createBoard } from "./src/createBoard";

export default function Board() {
  const [board, setBoard] = useState(createBoard);
  const [memoryCell, setMemoryCell] = useState();
  const [memoryBoard, setMemoryBoard] = useState();
  const [motion, setMotion] = useState();
  const [loseFigure, setLoseFigure] = useState([]);
  const [mov, setMov] = useState([]);

  // ------------- Drag-N-Drop ---------------

  const dragStartHandler = (e, cell, board) => {
    setMemoryBoard(board);
    const movement = cell.figure.movement(cell, board);
    setMov(movement);
    console.log(cell.figure.name);
    const newBoard = board.map((newLine) =>
      newLine.map((newCell) => {
        if (movement.some((target) => target == newCell.id)) {
          if (newCell.figure.name == null) {
            return {
              ...newCell,
              color: newCell.color + " green",
            };
          } else if (newCell.figure.color !== cell.figure.color)
            return {
              ...newCell,
              color: newCell.color + " red",
            };
          else {
            return {
              ...newCell,
            };
          }
        }

        if (newCell == cell) {
          return { ...newCell, color: "blue" };
        } else {
          return { ...newCell };
        }
      })
    );
    setBoard(newBoard);
    setMemoryCell(cell);
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "";
    e.target.parentElement.style.boxShadow = "";
  };

  const dragOverHandler = (e, cell) => {
    e.preventDefault();

    if (cell.figure.name == null) {
      e.target.style.boxShadow = "inset 0 0 3px 15px rgba(0, 0, 0, 0.253)";
    } else if (memoryCell.figure.color !== cell.figure.color) {
      e.target.parentElement.style.boxShadow =
        "inset 0 0 3px 15px rgba(0, 0, 0, 0.253)";
    } else if (memoryCell.figure.color === cell.figure.color) {
      e.target.parentElement.style.boxShadow = "";
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "";
    e.target.parentElement.style.boxShadow = "";
  };

  const dropHandler = (e, cell) => {
    e.preventDefault();
    const canMove = mov.some((id) => id === cell.id);

    const newBoard = memoryBoard.map((newLine) =>
      newLine.map((newCell) => {
        if (
          (newCell.id !== cell.id && !canMove) ||
          memoryCell.figure.color == cell.figure.color
        ) {
          return { ...newCell };
        } else if (newCell.id == cell.id && canMove) {
          setMotion((color) => (color === "white" ? "black" : "white"));
          setLoseFigure([...loseFigure, cell]);
          return { ...newCell, figure: memoryCell.figure };
        } else if (newCell.id == memoryCell.id) {
          memoryCell.figure.firstStep = false;
          return {
            ...newCell,
            figure: { img: null, color: null, name: null },
          };
        } else {
          return { ...newCell };
        }
      })
    );

    setBoard(newBoard);

    e.target.style.boxShadow = "";
    e.target.parentElement.style.boxShadow = "";
  };

  // -------------------------------------------

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
    setLoseFigure([]);
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
              <div key={cell.id}>
                <div className="id">
                  <div className="id-str">
                    {cell.y == 1 ? cell.x.toLocaleUpperCase() : ""}
                  </div>
                  <div className="id-num">{cell.x == "a" ? cell.y : ""}</div>
                </div>
                <div
                  className={"cell " + cell.color}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragOverHandler(e, cell)}
                  onDrop={(e) => dropHandler(e, cell)}
                >
                  <img
                    onDragStart={(e) => dragStartHandler(e, cell, board)}
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
          {loseFigure.map(
            (cell) =>
              cell.figure.color == "black" && (
                <img
                  key={Math.random()}
                  src={cell.figure.img}
                  alt=""
                  draggable={false}
                />
              )
          )}
        </div>
        <h1
          className="helps"
          style={motion && { border: "2px solid rgb(83, 75, 82)" }}
        >
          {text()}
        </h1>
        <div>
          {loseFigure.map(
            (cell) =>
              cell.figure.color == "white" && (
                <img
                  key={Math.random()}
                  src={cell.figure.img}
                  alt=""
                  draggable={false}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
