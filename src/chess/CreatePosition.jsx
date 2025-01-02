import whiteBishop from "../img/reshot-icon-bishop-white-532XHM7EK9.svg";
import whiteKing from "../img/reshot-icon-king-white-T8WZHA92P5.svg";
import whiteKnight from "../img/reshot-icon-knight-white-W84RS9K5LU.svg";
import whitePawn from "../img/reshot-icon-pawn-white-HD9LVBFCG6.svg";
import whiteQueen from "../img/reshot-icon-queen-white-7GAEFYQWPJ.svg";
import whiteRook from "../img/reshot-icon-rook-white-JCDFMLPUW4.svg";

import blackBishop from "../img/reshot-icon-bishop-black-EGMSPJ3VUR.svg";
import blackKing from "../img/reshot-icon-king-black-SWYF8UMR74.svg";
import blackKnight from "../img/reshot-icon-knight-black-BYAKS4LZFM.svg";
import blackPawn from "../img/reshot-icon-pawn-black-9SZ623HL8E.svg";
import blackQueen from "../img/reshot-icon-queen-black-2KBTL8RWFD.svg";
import blackRook from "../img/reshot-icon-rook-black-ZPNUHV37FA.svg";

import { rook, king, queen, bishop, knight, pawn } from "./src/figureMovement";

export function startPosition(board) {
  return board.map((line) =>
    line.map((cell) => {
      switch (cell.id) {
        case "e1":
          return {
            ...cell,
            figure: {
              name: "king",
              img: whiteKing,
              color: "white",
              movement: king,
            },
          };
        case "e8":
          return {
            ...cell,
            figure: {
              name: "king",
              img: blackKing,
              color: "black",
              movement: king,
            },
          };
        case "d1":
          return {
            ...cell,
            figure: {
              name: "queen",
              img: whiteQueen,
              color: "white",
              movement: queen,
            },
          };
        case "d8":
          return {
            ...cell,
            figure: {
              name: "queen",
              img: blackQueen,
              color: "black",
              movement: queen,
            },
          };
        case "a1":
          return {
            ...cell,
            figure: {
              name: "rook",
              img: whiteRook,
              color: "white",
              movement: rook,
            },
          };
        case "h1":
          return {
            ...cell,
            figure: {
              name: "rook",
              img: whiteRook,
              color: "white",
              movement: rook,
            },
          };
        case "a8":
          return {
            ...cell,
            figure: {
              name: "rook",
              img: blackRook,
              color: "black",
              movement: rook,
            },
          };
        case "h8":
          return {
            ...cell,
            figure: {
              name: "rook",
              img: blackRook,
              color: "black",
              movement: rook,
            },
          };
        case "c1":
          return {
            ...cell,
            figure: {
              name: "bishop",
              img: whiteBishop,
              color: "white",
              movement: bishop,
            },
          };
        case "f1":
          return {
            ...cell,
            figure: {
              name: "bishop",
              img: whiteBishop,
              color: "white",
              movement: bishop,
            },
          };
        case "c8":
          return {
            ...cell,
            figure: {
              name: "bishop",
              img: blackBishop,
              color: "black",
              movement: bishop,
            },
          };
        case "f8":
          return {
            ...cell,
            figure: {
              name: "bishop",
              img: blackBishop,
              color: "black",
              movement: bishop,
            },
          };
        case "b1":
          return {
            ...cell,
            figure: {
              name: "knight",
              img: whiteKnight,
              color: "white",
              movement: knight,
            },
          };
        case "g1":
          return {
            ...cell,
            figure: {
              name: "knight",
              img: whiteKnight,
              color: "white",
              movement: knight,
            },
          };
        case "b8":
          return {
            ...cell,
            figure: {
              name: "knight",
              img: blackKnight,
              color: "black",
              movement: knight,
            },
          };
        case "g8":
          return {
            ...cell,
            figure: {
              name: "knight",
              img: blackKnight,
              color: "black",
              movement: knight,
            },
          };
        case "a2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "b2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "c2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "d2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "e2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "f2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "g2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "h2":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: whitePawn,
              color: "white",
              firstStep: true,
              movement: pawn,
            },
          };
        case "a7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        case "b7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        case "c7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        case "d7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        case "e7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        case "f7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        case "g7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        case "h7":
          return {
            ...cell,
            figure: {
              name: "pawn",
              img: blackPawn,
              color: "black",
              firstStep: true,
              movement: pawn,
            },
          };
        default:
          return { ...cell, figure: { name: null, img: null, color: "" } };
      }
    })
  );
}
