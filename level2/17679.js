// https://school.programmers.co.kr/learn/courses/30/lessons/17679
function solution(m, n, board) {
  var answer = 0;
  const boards = board.map((el) => el.split(""));

  while (true) {
    const marked = findAndMarkBlocks(boards);
    if (marked.size === 0) break;
    answer += removeMarkedBlocks(boards, marked);

    dropBlocks(boards);
  }

  return answer;
}

const findAndMarkBlocks = (board) => {
  const rows = board.length;
  const cols = board[0].length;
  const marked = new Set();

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols - 1; j++) {
      let current = board[i][j];
      if (
        current !== " " &&
        current === board[i][j + 1] &&
        current === board[i + 1][j] &&
        current === board[i + 1][j + 1]
      ) {
        marked.add(`${i},${j}`);
        marked.add(`${i},${j + 1}`);
        marked.add(`${i + 1},${j}`);
        marked.add(`${i + 1},${j + 1}`);
      }
    }
  }
  return marked;
};

const removeMarkedBlocks = (board, marked) => {
  marked.forEach((pos) => {
    let [i, j] = pos.split(",").map(Number);
    board[i][j] = " ";
  });
  return marked.size;
};

const dropBlocks = (board) => {
  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < cols; i++) {
    let emptyRow = rows - 1;
    for (let j = rows - 1; j >= 0; j--) {
      if (board[j][i] !== " ") {
        if (emptyRow !== j) {
          board[emptyRow][i] = board[j][i];
          board[j][i] = " ";
        }
        emptyRow--;
      }
    }
  }
};

const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
const result = solution(m, n, board);
console.log(result);
