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
          return { ...cell, figure: whiteKing };
        case "e8":
          return { ...cell, figure: blackKing };
        case "d1":
          return { ...cell, figure: whiteQueen };
        case "d8":
          return { ...cell, figure: blackQueen };
        case "a1":
          return { ...cell, figure: whiteRook };
        case "h1":
          return { ...cell, figure: whiteRook };
        case "a8":
          return { ...cell, figure: blackRook };
        case "h8":
          return { ...cell, figure: blackRook };
        case "c1":
          return { ...cell, figure: whiteBishop };
        case "f1":
          return { ...cell, figure: whiteBishop };
        case "c8":
          return { ...cell, figure: blackBishop };
        case "f8":
          return { ...cell, figure: blackBishop };
        case "b1":
          return { ...cell, figure: whiteKnight };
        case "g1":
          return { ...cell, figure: whiteKnight };
        case "b8":
          return { ...cell, figure: blackKnight };
        case "g8":
          return { ...cell, figure: blackKnight };
        case "a2":
          return { ...cell, figure: whitePawn };
        case "b2":
          return { ...cell, figure: whitePawn };
        case "c2":
          return { ...cell, figure: whitePawn };
        case "d2":
          return { ...cell, figure: whitePawn };
        case "e2":
          return { ...cell, figure: whitePawn };
        case "f2":
          return { ...cell, figure: whitePawn };
        case "g2":
          return { ...cell, figure: whitePawn };
        case "h2":
          return { ...cell, figure: whitePawn };
        case "a7":
          return { ...cell, figure: blackPawn };
        case "b7":
          return { ...cell, figure: blackPawn };
        case "c7":
          return { ...cell, figure: blackPawn };
        case "d7":
          return { ...cell, figure: blackPawn };
        case "e7":
          return { ...cell, figure: blackPawn };
        case "f7":
          return { ...cell, figure: blackPawn };
        case "g7":
          return { ...cell, figure: blackPawn };
        case "h7":
          return { ...cell, figure: blackPawn };
        default:
          return { ...cell, figure: null };
      }
    })
  );
}
