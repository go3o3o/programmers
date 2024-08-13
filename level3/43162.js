// https://school.programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers) {
  var answer = 0;
  let visited = Array(n).fill(false);
  const dfs = (node) => {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
const result = solution(n, computers);
console.log(result);
