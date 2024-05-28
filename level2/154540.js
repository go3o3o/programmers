// https://school.programmers.co.kr/learn/courses/30/lessons/154540

// BFS
const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];

function solution(maps) {
  const answer = [];
  const rows = maps.length;
  const columns = maps[0].length;

  // 위, 아래, 왼쪽, 오른쪽
  const move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = Array.from(Array(rows), () => Array(columns).fill(false));

  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    visited[startX][startY] = true;
    let totalDays = 0;

    while (queue.length) {
      const [curX, curY] = queue.shift();
      totalDays += Number(maps[curX][curY]);

      for (let i = 0; i < move.length; i++) {
        const nextX = curX + move[i][0];
        const nextY = curY + move[i][1];

        if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= columns)
          continue;

        if (visited[nextX][nextY] || maps[nextX][nextY] === "X") continue;

        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
      }
    }
    return totalDays;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        const days = bfs(i, j);
        answer.push(days);
      }
    }
  }

  return !answer.length ? [-1] : answer.sort((a, b) => a - b);
}

const result = solution(maps);
console.log(result);
