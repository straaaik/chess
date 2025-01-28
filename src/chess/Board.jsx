import React, { useRef, useState } from "react";
import { startPosition } from "./CreatePosition";
import GameSettings from "../GameSettings";
import { createBoard } from "./src/createBoard";
import MyModal from "../UI/Modal/MyModal";
import MyButton from "../UI/Button/MyButton";

export default function Board() {
  const [board, setBoard] = useState(createBoard);
  const [memoryCell, setMemoryCell] = useState();
  const [memoryBoard, setMemoryBoard] = useState(board);
  const [motion, setMotion] = useState();
  const [loseFigure, setLoseFigure] = useState([]);
  const [mov, setMov] = useState([]);
  const boardRef = useRef(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [cacheCell, setCacheCell] = useState([]);

  // ------------- Drag-N-Drop ---------------

  const dragStartHandler = (e, cell, board) => {
    setMemoryBoard(board);

    const movement = cell.figure.movement(cell, board);

    setMov(movement);

    const newBoard = board.map((newLine) =>
      newLine.map((newCell) => {
        if (
          movement.some((target) => {
            return target == newCell.id;
          })
        ) {
          if (newCell.figure.name == null) {
            return {
              ...newCell,
              active: true,
            };
          } else if (newCell.figure.color !== cell.figure.color)
            return {
              ...newCell,
              active: true,
            };
          else {
            return {
              ...newCell,
              active: false,
            };
          }
        }
        if (newCell.id == cell.id) {
          return { ...newCell, active: true };
        }

        return { ...newCell, active: false };
      })
    );

    setBoard(newBoard);
    setMemoryCell(cell);
  };

  const dragEndHandler = (e, cell) => {
    const boardElement = boardRef.current;
    const boardRect = boardElement.getBoundingClientRect();

    const isInsideBoard =
      e.clientX >= boardRect.left &&
      e.clientX <= boardRect.right &&
      e.clientY >= boardRect.top &&
      e.clientY <= boardRect.bottom;

    !isInsideBoard && setBoard(memoryBoard);
    if (e.target.children.length)
      e.target.children[0].classList.remove("hover");
    if (e.target.parentElement.children.length)
      e.target.parentElement.children[0].classList.remove("hover-attack");
  };

  const dragOverHandler = (e, cell) => {
    e.preventDefault();
    if (
      cell.active &&
      cell.figure.color != motion &&
      cell.figure.name != null
    ) {
      e.target.parentElement.children[0].classList.add("hover-attack");
    }
    if (cell.figure.name == null && cell.active) {
      e.target.children[0].classList.add("hover");
    }
  };

  const dragLeaveHandler = (e) => {
    if (e.target.children.length)
      e.target.children[0].classList.remove("hover");
    if (e.target.parentElement.children.length)
      e.target.parentElement.children[0].classList.remove("hover-attack");
  };

  const dropHandler = (e, cell) => {
    e.preventDefault();
    cell.id != memoryCell.id && cell.active && setCacheCell([cell, memoryCell]);

    const arrTarget = board // массив всех возможных ходов
      .map((line) =>
        line.map((cell) => {
          if (memoryCell.figure.color == motion) {
            return memoryCell.figure.movement?.(cell, board);
          }
        })
      )
      .flat(2)
      .filter((res) => res != undefined);
    const arr = [...new Set(arrTarget)].sort();
    console.log(arr);

    const canMove = mov.some((id) => id === cell.id);

    if (cell.figure.name == "king" && cell.figure.color != motion) {
      setActive(true);
      console.log("Выиграли " + motion);
    }

    const newBoard = memoryBoard.map((newLine) =>
      newLine.map((newCell) => {
        if (
          arr.some(
            (id) =>
              id == newCell.id &&
              newCell.figure.name == "king" &&
              newCell.figure.color != motion
          )
        ) {
          console.log("ШАХ", newCell.id);
        }
        if (
          (newCell.id !== cell.id && !canMove) ||
          memoryCell.figure.color == cell.figure.color
        ) {
          return { ...newCell, active: false };
        } else if (newCell.id == cell.id && canMove) {
          setMotion((color) => (color === "white" ? "black" : "white"));
          setLoseFigure([...loseFigure, cell]);
          return { ...newCell, active: false, figure: memoryCell.figure };
        } else if (newCell.id == memoryCell.id) {
          memoryCell.figure.firstStep = false;
          return {
            ...newCell,
            active: false,
            figure: { img: null, color: null, name: null },
          };
        } else {
          return { ...newCell, active: false };
        }
      })
    );
    setBoard(newBoard);

    if (e.target.children.length)
      e.target.children[0].classList.remove("hover");
  };

  // -------------------CLICK------------------------

  function click(e, cell, board) {
    if (canMotion(cell.figure)) {
      dragStartHandler(e, cell, board);
    }
    if (cell.active) {
      dropHandler(e, cell);
    }
  }

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
    setActive(false);
  }

  const text = () => {
    if (motion == "white") {
      return "Белые";
    } else if (motion == "black") {
      return "Черные";
    } else {
      return motion;
    }
  };

  const checkClass = (cell) => {
    if (cell.id == hovered && cell.active && cell.figure.color == motion) {
      return "hover-active";
    }
    if (
      cell.id == hovered &&
      cell.figure.name != null &&
      cell.figure.color == motion
    ) {
      return "target";
    }
    if (cell.id == hovered && cell.active && cell.figure.name == null) {
      return "hover";
    }

    if (cell.id == hovered && cell.active && cell.figure.color != motion) {
      return "hover-attack";
    }

    if (cell.active && cell.figure.color == motion) {
      return "target";
    }
    if (cell.active && cell.figure.name == null) {
      return "active";
    }
    if (cell.active && cell.figure.color != motion) {
      return "target-attack";
    }
    if (
      cacheCell.map((cell) => cell.id).includes(cell.id) &&
      cacheCell.length == 2
    ) {
      return "cache";
    }
  };
  return (
    <div className="main">
      <GameSettings start={startGame} />
      <div className="body-chess">
        <MyModal active={active} setActive={setActive}>
          {text()} проиграли
          <MyButton onClick={startGame}>Начать новую игру</MyButton>
        </MyModal>
        <div ref={boardRef} className="board">
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
                  onMouseEnter={() => setHovered(cell.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={(e) => click(e, cell, board)}
                  className={"cell " + cell.color}
                  onDragLeave={(e) => dragLeaveHandler(e, cell)}
                  onDragOver={(e) => dragOverHandler(e, cell)}
                  onDrop={(e) => dropHandler(e, cell)}
                >
                  <div className={checkClass(cell)}></div>
                  <img
                    onDragStart={(e) => dragStartHandler(e, cell, board)}
                    onDragLeave={(e) => dragLeaveHandler(e, cell)}
                    onDragEnd={(e) => dragEndHandler(e, cell)}
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
