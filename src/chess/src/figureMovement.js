function movPaw(cell, board, max) {
  const x = cell.x.charCodeAt(0);
  const y = cell.y;
  const mov = [];

  if (cell.figure.color == "white") {
    mov.push([0, 1], [1, 1], [-1, 1]);
  } else {
    mov.push([0, -1], [-1, -1], [1, -1]);
  }
  const targetCells = [];

  for (let [dx, dy] of mov) {
    for (let i = 1; i < max; i++) {
      const newX = String.fromCharCode(x + dx * i);
      const newY = y + dy * i;
      const isFigure = board
        .map((line) =>
          line.find(
            (cell) => cell.id == newX + newY && cell.figure.name !== null
          )
        )
        .filter((cell) => cell !== undefined);
      const a = x + dx * i - cell.x.charCodeAt(0); // проверка для двух клеток
      if (isFigure.length && newX == cell.x) {
      } else if (isFigure.length && newX !== cell.x && a !== 2 && a !== -2) {
        console.log(x + dx * i - cell.x.charCodeAt(0));
        targetCells.push(newX + newY);
      } else if (newX == cell.x) {
        targetCells.push(newX + newY);
      }
    }
  }

  return targetCells;
}

function movVertical(cell, board, max) {
  const x = cell.x.charCodeAt(0);
  const y = cell.y;
  const mov = [];

  if (cell.figure.color == "white" && cell.figure.name == "pawn") {
    mov.push([0, 1]);
  } else if (cell.figure.color == "black" && cell.figure.name == "pawn") {
    mov.push([0, -1]);
  } else {
    mov.push([0, 1], [0, -1]);
  }

  const targetCells = [];
  for (let [dx, dy] of mov) {
    for (let i = 1; i < max; i++) {
      const newX = String.fromCharCode(x + dx * i);
      const newY = y + dy * i;
      const isFigure = board
        .map((line) =>
          line.find(
            (cell) => cell.id == newX + newY && cell.figure.name !== null
          )
        )
        .filter((cell) => cell !== undefined);
      if (isFigure.length) {
        targetCells.push(newX + newY);
        break;
      } else {
        targetCells.push(newX + newY);
      }
    }
  }
  return targetCells;
}

function movHorizontal(cell, board, max) {
  const x = cell.x.charCodeAt(0);
  const y = cell.y;
  const mov = [
    [1, 0],
    [-1, 0],
  ];
  const targetCells = [];
  for (let [dx, dy] of mov) {
    for (let i = 1; i < max; i++) {
      const newX = String.fromCharCode(x + dx * i);
      const newY = y + dy * i;
      const isFigure = board
        .map((line) =>
          line.find(
            (cell) => cell.id == newX + newY && cell.figure.name !== null
          )
        )
        .filter((cell) => cell !== undefined);
      if (isFigure.length) {
        targetCells.push(newX + newY);
        break;
      } else {
        targetCells.push(newX + newY);
      }
    }
  }
  return targetCells;
}

function movDiagonal(cell, board, max) {
  const x = cell.x.charCodeAt(0);
  const y = cell.y;
  const mov = [
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];
  const targetCells = [];

  for (let [dx, dy] of mov) {
    for (let i = 1; i < max; i++) {
      const newX = String.fromCharCode(x + dx * i);
      const newY = y + dy * i;
      const isFigure = board
        .map((line) =>
          line.find(
            (cell) => cell.id == newX + newY && cell.figure.name !== null
          )
        )
        .filter((cell) => cell !== undefined);
      if (isFigure.length) {
        targetCells.push(newX + newY);
        break;
      } else {
        targetCells.push(newX + newY);
      }
    }
  }
  return targetCells;
}

export function rook(cell, board) {
  return [...movVertical(cell, board, 8), ...movHorizontal(cell, board, 8)];
}

export function bishop(cell, board) {
  return movDiagonal(cell, board, 8);
}

export function king(cell, board) {
  return [
    ...movVertical(cell, board, 2),
    ...movHorizontal(cell, board, 2),
    ...movDiagonal(cell, board, 2),
  ];
}

export function knight(cell, board) {
  const x = cell.x.charCodeAt(0);
  const y = cell.y;
  const mov = [
    [1, 2],
    [-1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];
  const targetCells = [];
  for (let [dx, dy] of mov) {
    for (let i = 1; i < 2; i++) {
      const newX = String.fromCharCode(x + dx * i);
      const newY = y + dy * i;
      const isFigure = board
        .map((line) =>
          line.find(
            (cell) => cell.id == newX + newY && cell.figure.name !== null
          )
        )
        .filter((cell) => cell !== undefined);
      if (isFigure.length) {
        targetCells.push(newX + newY);
        break;
      } else {
        targetCells.push(newX + newY);
      }
    }
  }
  return targetCells;
}

export function pawn(cell, board) {
  if (cell.figure.firstStep) {
    return movPaw(cell, board, 3);
  } else {
    return movPaw(cell, board, 2);
  }
}

export function queen(cell, board) {
  return [
    ...movVertical(cell, board, 8),
    ...movHorizontal(cell, board, 8),
    ...movDiagonal(cell, board, 8),
  ];
}
