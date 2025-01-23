export function createBoard() {
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
            id: char + (j + 1),
            x: char,
            y: j + 1,
            color: "white",
            active: false,
            figure: { img: null, color: null, name: null, movement: null },
          });
        } else {
          newLine.push({
            id: char + (j + 1),
            x: char,
            y: j + 1,
            color: "black",
            active: false,
            figure: { img: null, color: null, name: null, movement: null },
          });
        }
      } else {
        if (i % 2) {
          newLine.push({
            id: char + (j + 1),
            x: char,
            y: j + 1,
            color: "black",
            active: false,
            figure: { img: null, color: null, name: null, movement: null },
          });
        } else {
          newLine.push({
            id: char + (j + 1),
            x: char,
            y: j + 1,
            color: "white",
            active: false,
            figure: { img: null, color: null, name: null, movement: null },
          });
        }
      }

      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }
  return newBoard;
}
