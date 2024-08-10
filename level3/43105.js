// https://school.programmers.co.kr/learn/courses/30/lessons/43105
function solution(triangle) {
  const n = triangle.length;
  const dp = triangle.map((row) => [...row]);

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}

const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
const result = solution(triangle);
console.log(result);
