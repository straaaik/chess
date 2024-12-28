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
          return {
            ...cell,
            figure: { name: "king", img: whiteKing, color: "white" },
          };
        case "e8":
          return {
            ...cell,
            figure: { name: "king", img: blackKing, color: "black" },
          };
        case "d1":
          return {
            ...cell,
            figure: { name: "queen", img: whiteQueen, color: "white" },
          };
        case "d8":
          return {
            ...cell,
            figure: { name: "queen", img: blackQueen, color: "black" },
          };
        case "a1":
          return {
            ...cell,
            figure: { name: "rook", img: whiteRook, color: "white" },
          };
        case "h1":
          return {
            ...cell,
            figure: { name: "rook", img: whiteRook, color: "white" },
          };
        case "a8":
          return {
            ...cell,
            figure: { name: "rook", img: blackRook, color: "black" },
          };
        case "h8":
          return {
            ...cell,
            figure: { name: "rook", img: blackRook, color: "black" },
          };
        case "c1":
          return {
            ...cell,
            figure: { name: "bishop", img: whiteBishop, color: "white" },
          };
        case "f1":
          return {
            ...cell,
            figure: { name: "bishop", img: whiteBishop, color: "white" },
          };
        case "c8":
          return {
            ...cell,
            figure: { name: "bishop", img: blackBishop, color: "black" },
          };
        case "f8":
          return {
            ...cell,
            figure: { name: "bishop", img: blackBishop, color: "black" },
          };
        case "b1":
          return {
            ...cell,
            figure: { name: "knight", img: whiteKnight, color: "white" },
          };
        case "g1":
          return {
            ...cell,
            figure: { name: "knight", img: whiteKnight, color: "white" },
          };
        case "b8":
          return {
            ...cell,
            figure: { name: "knight", img: blackKnight, color: "black" },
          };
        case "g8":
          return {
            ...cell,
            figure: { name: "knight", img: blackKnight, color: "black" },
          };
        case "a2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "b2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "c2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "d2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "e2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "f2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "g2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "h2":
          return {
            ...cell,
            figure: { name: "pawn", img: whitePawn, color: "white" },
          };
        case "a7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        case "b7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        case "c7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        case "d7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        case "e7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        case "f7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        case "g7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        case "h7":
          return {
            ...cell,
            figure: { name: "pawn", img: blackPawn, color: "black" },
          };
        default:
          return { ...cell, figure: { name: null, img: null, color: "" } };
      }
    })
  );
}
