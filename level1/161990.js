// https://school.programmers.co.kr/learn/courses/30/lessons/161990
function solution(wallpaper) {
  const s = [];
  const e = [];

  for (let y = 0; y < wallpaper.length; y++) {
    for (let x = 0; x < wallpaper[y].length; x++) {
      if (wallpaper[y][x] === "#") {
        s.push(y);
        e.push(x);
      }
    }
  }

  const min = [Math.min(...s), Math.min(...e)];
  const max = [Math.max(...s) + 1, Math.max(...e) + 1];

  return [...min, ...max];
}

// s(0,1)~e(3,4)
// (3 - 0) + (4 - 1)
// const wallpaper = [".#...", "..#..", "...#."];
const wallpaper = ["..", "#."];
const result = solution(wallpaper);
console.log(result);
