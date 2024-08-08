// https://school.programmers.co.kr/learn/courses/30/lessons/68936
function solution(arr) {
  var answer = [0, 0];

  const compress = (x, y, n) => {
    const firstValue = arr[x][y];
    let same = true;

    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[i][j] !== firstValue) {
          same = false;
          break;
        }
      }
      if (!same) break;
    }

    if (same) {
      answer[firstValue]++;
    } else {
      const half = n / 2;
      compress(x, y, half);
      compress(x, y + half, half);
      compress(x + half, y, half);
      compress(x + half, y + half, half);
    }
  };
  compress(0, 0, arr.length);
  return answer;
}

// const arr = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 1, 1, 1],
// ];
const arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];
const result = solution(arr);
console.log(result);
