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

export function startPosition(board) {
  return board.map((line) =>
    line.map((cell) => {
      switch (cell.id.id) {
        case "e1":
          return { ...cell, figure: { img: whiteKing, color: "figure-white" } };
        case "e8":
          return { ...cell, figure: { img: blackKing, color: "figure-black" } };
        case "d1":
          return {
            ...cell,
            figure: { img: whiteQueen, color: "figure-white" },
          };
        case "d8":
          return {
            ...cell,
            figure: { img: blackQueen, color: "figure-black" },
          };
        case "a1":
          return { ...cell, figure: { img: whiteRook, color: "figure-white" } };
        case "h1":
          return { ...cell, figure: { img: whiteRook, color: "figure-white" } };
        case "a8":
          return { ...cell, figure: { img: blackRook, color: "figure-black" } };
        case "h8":
          return { ...cell, figure: { img: blackRook, color: "figure-black" } };
        case "c1":
          return {
            ...cell,
            figure: { img: whiteBishop, color: "figure-white" },
          };
        case "f1":
          return {
            ...cell,
            figure: { img: whiteBishop, color: "figure-white" },
          };
        case "c8":
          return {
            ...cell,
            figure: { img: blackBishop, color: "figure-black" },
          };
        case "f8":
          return {
            ...cell,
            figure: { img: blackBishop, color: "figure-black" },
          };
        case "b1":
          return {
            ...cell,
            figure: { img: whiteKnight, color: "figure-white" },
          };
        case "g1":
          return {
            ...cell,
            figure: { img: whiteKnight, color: "figure-white" },
          };
        case "b8":
          return {
            ...cell,
            figure: { img: blackKnight, color: "figure-black" },
          };
        case "g8":
          return {
            ...cell,
            figure: { img: blackKnight, color: "figure-black" },
          };
        case "a2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "b2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "c2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "d2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "e2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "f2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "g2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "h2":
          return { ...cell, figure: { img: whitePawn, color: "figure-white" } };
        case "a7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        case "b7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        case "c7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        case "d7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        case "e7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        case "f7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        case "g7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        case "h7":
          return { ...cell, figure: { img: blackPawn, color: "figure-black" } };
        default:
          return { ...cell, figure: { img: null, color: "" } };
      }
    })
  );
}
