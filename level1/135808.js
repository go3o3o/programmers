// https://school.programmers.co.kr/learn/courses/30/lessons/135808
function solution(k, m, score) {
  var answer = 0;

  if (score.length < m) return 0;
  score.sort((a, b) => b - a);

  const max = Math.floor(score.length / m);
  for (let i = 1; i <= max; i++) {
    answer += score[m * i - 1] * m;
  }

  return answer;
}

function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}

// const k = 1;
// const m = 2;
// const score = [1, 1, 2, 1, 1, 2];

// const k = 3;
// const m = 4;
// const score = [1, 2, 3, 1, 2, 3, 1];

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2, 3];

const result = solution(k, m, score);
console.log(result);
