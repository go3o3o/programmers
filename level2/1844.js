// https://school.programmers.co.kr/learn/courses/30/lessons/1844
function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const isValid = (x, y) => {
    return x >= 0 && x < rows && y >= 0 && y < cols && maps[x][y] === 1;
  };

  const queue = [[0, 0, 1]]; // [x, y, distance]
  maps[0][0] = 0; // 시작점을 방문한 것으로 표시

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    if (x === rows - 1 && y === cols - 1) {
      return dist; // 목표 지점에 도달하면 거리 반환
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (isValid(nx, ny)) {
        queue.push([nx, ny, dist + 1]);
        maps[nx][ny] = 0; // 방문한 것으로 표시
      }
    }
  }

  return -1;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
const result = solution(maps);
console.log(result);
